package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http

class EntityUpdateWithMqttSubscriptionSimulation extends EntityUpdateSimulation {

  override def beforeScenario(): Unit = {
    val subscription = getMqttTypeSubscriptionAction(testConfig.notificationServerUrl, "timed-entity")
    val response = Http(baseUrl + "subscriptions").header("Content-Type", "application/ld+json").postData(subscription).timeout(1000, 6000).asString
    if (response.code > 299 || response.code < 200) {
      println("Was not able to setup the Subscription. Response: " + response + ", Subscription:  " + subscription)
    }
  }

  override def afterScenario(): Unit = {
    Http(baseUrl + "subscriptions/urn:ngsi-ld:Subscription:timed-entity").header("Content-Type", "application/ld+json").method("DELETE").timeout(1000, 6000).asString
  }

  override def getScenario(): ScenarioBuilder = {
    val notificationServerUrl = testConfig.notificationServerUrl
    scenario("Parallel entity updates with subscription")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createTimedEntityAction()
      )
      .pause(updateDelay.toString, TimeUnit.SECONDS)
      .repeat(numberOfUpdatesToSimulate) {
        exec(
          updateTimedEntityAction()
        )
          // wait for the new values to be available
          .pause(updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        deleteTimedEntityAction()
      )
  }
}
