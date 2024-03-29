package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http
import simulations.FiwareLDBaseSimulation

class EntityUpdateSimulation extends FiwareLDBaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Parallel entity updates")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createEntityAction()
      )
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
  }
}
