package simulations.nosec.v2

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareV2BaseSimulation

class BatchUpdateSimulation extends FiwareV2BaseSimulation {

  override def getParallelRuns(): Int = {
    (testConfig.numEntities / testConfig.batchSize).ceil.toInt
  }

  override def getScenario(): ScenarioBuilder = {
    val idList: List[UUID] = Stream.fill(entitiesToSimulate)(UUID.randomUUID()).toList
    val batchNumberFeeder = Iterator.from(0).map(i => Map("batchNumber" -> i))
    scenario("Parallel batch updates")
      .feed(batchNumberFeeder)
      .exec(
        batchCreateEntitiesAction(testConfig.batchSize, idList)
      )
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

