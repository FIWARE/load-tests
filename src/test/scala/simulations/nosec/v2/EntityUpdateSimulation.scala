package simulations.nosec.v2

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareV2BaseSimulation

class EntityUpdateSimulation extends FiwareV2BaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Parallel entity updates")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        if(testConfig.keycloakAuthEnabled) {
          createEntityAction(tokenManager)
        } else {
          createEntityAction()
        }
      )
      .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      .repeat(testConfig.numUpdates) {
        exec(
          if(testConfig.keycloakAuthEnabled) {
            updateEntityAction("temperature", tokenManager)
          } else {
            updateEntityAction("temperature")
          }

        )
        // wait for the new values to be available
        .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
        .exec(
          if(testConfig.keycloakAuthEnabled) {
            updateEntityAction("humidity", tokenManager)
          } else {
            updateEntityAction("humidity")
          }
        )
        // wait for the new values to be available
        .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        if(testConfig.keycloakAuthEnabled) {
          deleteEntityAction(tokenManager)
        } else {
          deleteEntityAction()
        }
      )
  }
}
