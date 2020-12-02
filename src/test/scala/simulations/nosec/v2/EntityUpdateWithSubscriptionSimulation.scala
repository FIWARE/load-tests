package simulations.nosec.v2

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder

class EntityUpdateWithSubscriptionSimulation extends EntityUpdateSimulation {

  override def getScenario(): ScenarioBuilder = {
    val notificationServerUrl = testConfig.notificationServerUrl
    scenario("Parallel entity updates with subscription")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createEntityAction()
      )
      .pause(updateDelay.toString, TimeUnit.SECONDS)
      .exec(
        createSubscriptionAction(notificationServerUrl)
      )
      .pause(updateDelay.toString, TimeUnit.SECONDS)
      .repeat(numberOfUpdatesToSimulate) {
        exec(
          updateEntityAction("temperature")
        )
          // wait for the new values to be available
          .pause("1", TimeUnit.SECONDS)
          .exec(
            updateEntityAction("humidity")
          )
          // wait for the new values to be available
          .pause(updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        deleteEntityAction()
      )
  }
}
