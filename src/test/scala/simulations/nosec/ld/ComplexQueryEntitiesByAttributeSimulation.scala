package simulations.nosec.ld

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareLDQueryBaseSimulation

class ComplexQueryEntitiesByAttributeSimulation extends FiwareLDQueryBaseSimulation {


  override def getParallelRuns(): Int = {
    testConfig.numParallelQueries
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Query for entities")
      .repeat(testConfig.numQueries) {
        exec(
          queryComplexByAttributesAndType("open", (Math.random() > 0.5).toString, "owner", "owner" + randomBetween(1, 5), "store")
        )
      }
  }


}
