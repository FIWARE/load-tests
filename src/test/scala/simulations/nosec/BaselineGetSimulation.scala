package simulations.nosec

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import simulations.TestConfiguration

class BaselineGetSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseCBUrl = testConfig.baseCBUrl

  val httpConf = http.baseUrl(baseCBUrl)

  val scn = scenario("Parallel GET version")
    .repeat(testConfig.numUpdates) {
      exec(
        http("get version")
          .get("version")
      )
    }

  setUp(scn.inject(atOnceUsers(entitiesToSimulate))).protocols(httpConf)

}
