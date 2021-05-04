package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http
import simulations.FiwareLDBaseSimulation

class EntityUpdateWithBeforeCreationSimulation extends FiwareLDBaseSimulation {

  final val  entityIdPrefix:String = UUID.randomUUID().toString;
  final val entityIdList: List[UUID] = Stream.fill(testConfig.numEntities)(UUID.randomUUID()).toList

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def beforeScenario(): Unit = {

    for (a <- 0 to testConfig.numEntities - 1) {

      val response = Http(baseUrl + "entityOperations/create").header("Content-Type", "application/ld+json").postData(getUpdateBody(a * 100, (a + 1) * 100, entityIdList)).timeout(10000, 60000).asString

      if (response.code != 201) {
        throw new RuntimeException("Was not able to setup the scenario. Response: " + response)
      }
    }
  }

  override def getScenario(): ScenarioBuilder = {

    val idFeeder = Iterator.tabulate(testConfig.numEntities)(n => Map("entityId" -> entityIdList(n)))
    scenario("Parallel entity updates")
      .feed(idFeeder)
      .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      .repeat(testConfig.numUpdates) {
        exec(
          updateEntityAction("temperature")
        )
          // wait for the new values to be available
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
          .exec(
            updateEntityAction("humidity")
          )
          // wait for the new values to be available
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        deleteEntityAction()
      )
  }
}
