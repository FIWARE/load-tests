package simulations.nosec.iot

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http
import simulations.FiwareIoTBaseSimulation

class IoTAgentSimulation extends FiwareIoTBaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("IoT Agent Simulation")
      .repeat(testConfig.numUpdates) {
        exec(
          sendDeviceMeasurementAction()
        )
        // wait for the new values to be available
        .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
  }
}
