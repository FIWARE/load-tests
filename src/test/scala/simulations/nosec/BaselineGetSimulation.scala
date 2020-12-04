package simulations.nosec

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import simulations.TestConfiguration

class BaselineGetSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseUrl = testConfig.baseUrl

  val httpConf = http.baseUrl(baseUrl)

  val scn = scenario("Parallel GET version")
    .repeat(testConfig.numUpdates) {
      exec(
        http("get version")
          .get("version"))
    }

  setUp(scn.inject(atOnceUsers(entitiesToSimulate))).protocols(httpConf)

}
