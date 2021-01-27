package simulations.nosec.v2

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareV2QueryBaseSimulation

class QueryEntitiesByTypeSimulation extends FiwareV2QueryBaseSimulation {


  override def getParallelRuns(): Int = {
    testConfig.numParallelQueries
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Query for entities")
      .repeat(testConfig.numQueries) {
        exec(
          queryByEntityType("owner")
        )
      }
  }


}
