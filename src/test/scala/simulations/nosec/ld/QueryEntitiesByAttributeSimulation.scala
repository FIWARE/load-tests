package simulations.nosec.ld

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareLDQueryBaseSimulation

class QueryEntitiesByAttributeSimulation extends FiwareLDQueryBaseSimulation {


  override def getParallelRuns(): Int = {
    testConfig.numParallelQueries
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Query for entities")
      .repeat(testConfig.numQueries) {
        exec(
          // number of matching entities will vary a little, but shouldn't influence the overall results. See FiwareLDQueryBaseSimulation for the
          // data structure
          queryByOneAttribute("producer", "producer1")
        )
      }
  }


}
