package simulations.nosec.ld

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareLDQueryBaseSimulation

class QueryEntitiesByTypeSimulation extends FiwareLDQueryBaseSimulation {


  override def getParallelRuns(): Int = {
    testConfig.numParallelQueries
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Query for entities")
      .repeat(testConfig.numQueries) {
        exec(
          queryByEntityType("https://uri.fiware.org/ns/data-models%23owner")
        )
      }
  }


}
