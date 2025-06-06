package simulations.nosec.canismajor

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http
import simulations.CanisMajorBaseSimulation

class CanisMajorSimulation extends CanisMajorBaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("IoT Agent Simulation")
      .repeat(testConfig.numUpdates) {
        exec(session => {
          // Generate a random value and store it in a session variable
          val randomValue = UUID.randomUUID().toString // Random value between 0 and 99
          session.set("randomValue", randomValue) // Store it in the session
        })
        .exec(
          sendEntityDataAction()
        )
        // wait for the new values to be available
        .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
  }
}
