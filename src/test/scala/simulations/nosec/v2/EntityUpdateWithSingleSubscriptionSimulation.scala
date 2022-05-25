package simulations.nosec.v2

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http

class EntityUpdateWithSingleSubscriptionSimulation extends EntityUpdateSimulation {

  override def beforeScenario(): Unit = {
    val subscription = getAllEntitiesSubscriptionAction(testConfig.notificationServerUrl)
    val request = Http(baseUrl + "subscriptions")
      .header("Content-Type", "application/json")
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
    if (testConfig.keycloakAuthEnabled) {
      request.header("Authorization", "bearer " + tokenManager.getAccessToken.getToken)
    }
    val response = request.postData(subscription).timeout(1000, 6000).asString
    if (response.code > 299 || response.code < 200) {
      println("Was not able to setup the Subscription. Response: " + response + ", Subscription:  " + subscription)
    }
  }

  override def afterScenario(): Unit = {
    val request = Http(baseUrl + "subscriptions")
      .header("Content-Type", "application/json")
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
    if (testConfig.keycloakAuthEnabled) {
      request.header("Authorization", "bearer " + tokenManager.getAccessToken.getToken)
    }
    val response = request.method("DELETE").timeout(1000, 6000).asString
  }

  override def getScenario(): ScenarioBuilder = {
    val notificationServerUrl = testConfig.notificationServerUrl
    scenario("Parallel entity updates with subscription")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        if (testConfig.keycloakAuthEnabled) {
          createEntityAction(tokenManager.getAccessToken.getToken)
        } else {
          createEntityAction()
        }
      )
      .pause(updateDelay.toString, TimeUnit.SECONDS)
      .repeat(numberOfUpdatesToSimulate) {
        exec(
          if (testConfig.keycloakAuthEnabled) {
            updateEntityAction("humidity", tokenManager.getAccessToken.getToken)
          } else {
            updateEntityAction("humidity")
          }
        )
          // wait for the new values to be available
          .pause(updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        if (testConfig.keycloakAuthEnabled) {
          deleteEntityAction(tokenManager.getAccessToken.getToken)
        } else {
          deleteEntityAction()
        }
      )
  }
}
