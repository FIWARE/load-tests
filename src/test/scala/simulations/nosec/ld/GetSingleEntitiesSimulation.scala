package simulations.nosec.ld


import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareLDBaseSimulation

class GetSingleEntitiesSimulation extends FiwareLDBaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Parallel single entity get")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createEntityAction()
      )
      .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      .repeat(testConfig.numUpdates) {
        exec(
          singleEntityGetAction()
        )
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        deleteEntityAction()
      )
  }
}
