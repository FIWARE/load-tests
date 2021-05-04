package simulations.nosec.ld

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import scalaj.http.Http
import simulations.FiwareLDBaseSimulation

class EntityUpdateWithBeforeCreationSimulation extends FiwareLDBaseSimulation {

  final val entityIdPrefix: String = UUID.randomUUID().toString;
  final val entityIdList: List[UUID] = Stream.fill(testConfig.numEntities)(UUID.randomUUID()).toList

  override def getParallelRuns(): Int = {
    testConfig.numEntities
  }

  override def beforeScenario(): Unit = {
    val batches: Int = (testConfig.numEntities / 100).ceil.toInt

    println("Will create " + batches + " batches.")
    for (a <- 0 to batches - 1) {

      val body = getUpdateBody(a * 100, (a + 1) * 100,  entityIdList)
      println("Create batch from " + a * 100 + " to " + (a + 1) * 100)

      val response = Http(baseUrl + "entityOperations/create").header("Content-Type", "application/ld+json").postData(body).timeout(10000, 60000).asString

      if (response.code != 201) {
        throw new RuntimeException("Was not able to setup the scenario. Response: " + response + ", body: " + body)
      }

    }
  }

  override def getScenario(): ScenarioBuilder = {

    val idFeeder = Iterator.tabulate(testConfig.numEntities)(n => Map("entityId" -> entityIdList(n)))
    scenario("Parallel entity updates")
      .feed(idFeeder)
      .pause("30", TimeUnit.SECONDS)
      .repeat(testConfig.numUpdates) {
        exec(
          updateEntityAction("temperature")
        )
          // wait for the new values to be available
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
          .exec(
            updateEntityAction("humidity")
          )
          // wait for the new values to be available
          .pause(testConfig.updateDelay.toString, TimeUnit.SECONDS)
      }
      // cleanup
      .exec(
        deleteEntityAction()
      )
  }
}
