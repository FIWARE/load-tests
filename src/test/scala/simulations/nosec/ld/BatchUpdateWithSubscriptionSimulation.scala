package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder


class BatchUpdateWithSubscriptionSimulation extends BatchUpdateSimulation {

  override def getScenario(): ScenarioBuilder = {
    val idList: List[UUID] = Stream.fill(entitiesToSimulate)(UUID.randomUUID()).toList
    val batchNumberFeeder = Iterator.from(0).map(i => Map("batchNumber" -> i))
    val idIterator = idList.iterator
    val entityIdFeeder = Iterator.continually(Map("entityId" -> idIterator.next()))
    val notificationServerUrl = testConfig.notificationServerUrl

    scenario("Parallel batch updates with subscriptions")
      .feed(batchNumberFeeder)
      .feed(entityIdFeeder)
      .exec(
        batchCreateEntitiesAction(testConfig.batchSize, idList)
      )
      .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      .repeat(testConfig.batchSize) {
        exec(
          createSubscriptionAction(notificationServerUrl)
        )
      }
      .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      .repeat(testConfig.numUpdates) {
        exec(
          batchUpdateEntitiesAction(testConfig.batchSize, idList)
        )
          // wait for the new values to be available
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        batchDeleteEntities(testConfig.batchSize, idList)
      )
  }
}
