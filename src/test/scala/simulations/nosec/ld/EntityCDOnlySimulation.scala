package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import simulations.FiwareLDBaseSimulation

class EntityCDOnlySimulation extends FiwareLDBaseSimulation {

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def getScenario(): ScenarioBuilder = {
    scenario("Parallel entity create/delete")
      .exec(session => session.set("entityId", UUID.randomUUID()))
      .exec(
        createEntityAction()
      )
      // cleanup
      .exec(
        deleteEntityAction()
      )
  }
}
