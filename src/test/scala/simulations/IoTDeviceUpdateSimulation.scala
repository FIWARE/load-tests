package simulations

import java.util.UUID
import java.util.concurrent.TimeUnit

import com.google.gson.Gson
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class IoTDeviceUpdateSimulation extends Simulation {

  val testConfig = TestConfiguration()

  val devicesToSimulate = testConfig.numDevices
  val baseUrl = testConfig.baseUrl


  val httpConf = http
    .baseUrl(baseUrl)


  val randTemperatureFeeder = Iterator.continually(Map("temp" -> Random.nextInt(100)))
  val randHumidityFeeder = Iterator.continually(Map("hum" -> Random.nextFloat() * 10))


  val scn = scenario("Parallel device updates")
    .exec(session => session.set("entityId", UUID.randomUUID()))
    .feed(randTemperatureFeeder)
    .feed(randHumidityFeeder)
    .exec(
      http("create entity")
        .post("/v2/entities")
        .body(StringBody((s: Session) => """{"type":"Device", "id":"urn:ngsi-ld:Device:""" + s("entityId").as[String] + """", "temperature":{"value":10}, "humidity":{"value":12.3}}"""))
        .asJson)
    .pause("1", TimeUnit.SECONDS)
    .repeat(100) {
      exec(
        http("update temperature")
          .post((s: Session) => "/v2/entities/urn:ngsi-ld:Device:" + s("entityId").as[String] + "/attrs")
          .body(StringBody("""{"temperature":{"value":""" + "${temp}" + """}}"""))
          .asJson
      )
        // wait for the new values to be available
        .pause("1", TimeUnit.SECONDS)
        .exec(
          http("update humidity")
            .post((s: Session) => "/v2/entities/urn:ngsi-ld:Device:" + s("entityId").as[String] + "/attrs")
            .body(StringBody("""{"humidity":{"value":""" + "${hum}" + """}}"""))
            .asJson
        )
        // wait for the new values to be available
        .pause("1", TimeUnit.SECONDS)
    }

  // simulation will simulate livecycle of one device, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(devicesToSimulate))).protocols(httpConf)

}
