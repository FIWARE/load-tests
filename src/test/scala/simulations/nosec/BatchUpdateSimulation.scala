package simulations.nosec

import java.util.UUID
import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import simulations.TestConfiguration

import scala.util.Random

class BatchUpdateSimulation extends Simulation {

  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseUrl = testConfig.baseUrl
  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay
  val batchSize = testConfig.batchSize

  val httpConf = http.baseUrl(baseUrl)

  val idList: List[UUID] = Stream.fill(entitiesToSimulate)(UUID.randomUUID()).toList
  val batchNumberFeeder = Iterator.from(0).map(i => Map("batchNumber" -> i))
  val numBatches: Int = (entitiesToSimulate / batchSize).ceil.toInt

  val scn = scenario("Parallel batch updates")
    .feed(batchNumberFeeder)
    .exec(
      http("create batch of entities")
        .post("/v2/op/update")
        .body(StringBody((s: Session) => getUpdateBody("append", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
        .asJson
    )
    .pause(updateDelay.toString, TimeUnit.SECONDS)
    .repeat(numberOfUpdatesToSimulate) {
      exec(
        http("update batch of entities")
          .post("/v2/op/update")
          .body(StringBody((s: Session) => getUpdateBody("update", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
          .asJson
      )
        // wait for the new values to be available
        .pause(updateDelay.toString, TimeUnit.SECONDS)
    }
    // cleanup
    .exec(
      http("delete batch of entities")
        .post("/v2/op/update")
        .body(StringBody((s: Session) => getUpdateBody("delete", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
        .asJson
    )

  // simulation will simulate lifecycle of one batch, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(numBatches))).protocols(httpConf)

  def getEntityString(entityId: String): String = {
    """{"type":"TestEntity", "id":"urn:ngsi-ld:TestEntity:""" + entityId + """", "temperature":{"value":""" + Random.nextInt() + """}, "humidity":{"value":""" + Random.nextFloat() + """}}"""
  }

  def getUpdateBody(actionType: String, startPos: Int, endPos: Int, idList: List[UUID]): String = {
    val idIterator: Iterator[UUID] = idList.slice(startPos, endPos).iterator
    val updateBodyBuilder: StringBuilder = StringBuilder.newBuilder

    updateBodyBuilder.append(
      """
      {
        "actionType" : """" + actionType +
        """",
        "entities" : [
      """)

    updateBodyBuilder.append(getEntityString(idIterator.next().toString))

    while (idIterator.hasNext) {
      updateBodyBuilder.append("," + getEntityString(idIterator.next().toString))
    }

    updateBodyBuilder.append("]}").toString()
  }
}

