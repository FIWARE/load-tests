package simulations.nosec.v2

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http

class EntityUpdateWithSingleMqttSubscriptionSimulation extends EntityUpdateSimulation {

  override def beforeScenario(): Unit = {
    val subscription = getAllEntitiesMqttSubscriptionAction(testConfig.notificationServerUrl)
    val response = Http(baseUrl + "subscriptions").header("Content-Type", "application/json").postData(subscription).timeout(1000, 6000).asString
    if (response.code > 299 || response.code < 200) {
      println("Was not able to setup the Subscription. Response: " + response + ", Subscription:  " + subscription)
    }
  }

  override def afterScenario(): Unit = {
    //Http(baseUrl + "subscriptions/urn:ngsi-ld:Subscription:all").header("Content-Type", "application/json").method("DELETE").timeout(1000, 6000).asString
  }

  override def getScenario(): ScenarioBuilder = {
    val notificationServerUrl = testConfig.notificationServerUrl
    scenario("Parallel entity updates with subscription")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createEntityAction()
      )
      .pause(updateDelay.toString, TimeUnit.SECONDS)
      .repeat(numberOfUpdatesToSimulate) {
        exec(
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
