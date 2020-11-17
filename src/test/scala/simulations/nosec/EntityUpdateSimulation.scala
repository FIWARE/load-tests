package simulations.nosec

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import simulations.TestConfiguration

import scala.util.Random

class EntityUpdateSimulation extends Simulation {

  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseUrl = testConfig.baseUrl
  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay


  val httpConf = http.baseUrl(baseUrl)

  val randTemperatureFeeder = Iterator.continually(Map("temp" -> Random.nextInt(100)))
  val randHumidityFeeder = Iterator.continually(Map("hum" -> Random.nextFloat() * 10))


  val scn = scenario("Parallel entity updates")
    .exec(session => session.set("entityId", UUID.randomUUID()))
    .feed(randTemperatureFeeder)
    .feed(randHumidityFeeder)
    .exec(
      http("create entity")
        .post("/v2/entities")
        .body(StringBody((s: Session) => """{"type":"TestEntity", "id":"urn:ngsi-ld:TestEntity:""" + s("entityId").as[String] + """", "temperature":{"value":10}, "humidity":{"value":12.3}}"""))
        .asJson)
    .pause(updateDelay.toString, TimeUnit.SECONDS)
    .repeat(numberOfUpdatesToSimulate) {
      exec(
        http("update temperature")
          .post((s: Session) => "/v2/entities/urn:ngsi-ld:TestEntity:" + s("entityId").as[String] + "/attrs")
          .body(StringBody("""{"temperature":{"value":""" + "${temp}" + """}}"""))
          .asJson
      )
        // wait for the new values to be available
        .pause("1", TimeUnit.SECONDS)
        .exec(
          http("update humidity")
            .post((s: Session) => "/v2/entities/urn:ngsi-ld:TestEntity:" + s("entityId").as[String] + "/attrs")
            .body(StringBody("""{"humidity":{"value":""" + "${hum}" + """}}"""))
            .asJson
        )
        // wait for the new values to be available
        .pause(updateDelay.toString, TimeUnit.SECONDS)
    }
    // cleanup
    .exec(
      http("delete entity")
        .delete((s: Session) => "/v2/entities/urn:ngsi-ld:TestEntity:" + s("entityId").as[String])
    )


  // simulation will simulate lifecycle of one entity, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(entitiesToSimulate))).protocols(httpConf)
}
