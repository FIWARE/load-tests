package simulations

import java.util.UUID

import io.gatling.core.Predef._
import io.gatling.core.action.builder.ActionBuilder
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

import scala.util.Random

/**
 * Base class for all Simulations. Provides a set of common configurations and methods to retrieve different actions that can be used for building
 * scenarios.
 */
abstract class FiwareOrionBaseSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseUrl = testConfig.baseUrl
  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay


  val httpConf = http.baseUrl(baseUrl)

  val scn = getScenario()


  // simulation will simulate lifecycle of one entity, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(getParallelRuns()))).protocols(httpConf)

  /*
   * must be implemented by the subclasses and should contain the actual scenario
   */
  def getScenario(): ScenarioBuilder

  /*
   * must be implemented by the subclasses and should retrieve the actual  number of parallel connections
   */
  def getParallelRuns(): Int

  /*
   * creates a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def createEntityAction(): ActionBuilder = {
    http("create entity")
      .post("/entities")
      .body(StringBody((s: Session) => getEntityString(s("entityId").as[String])))
      .asJson
  }

  /*
   * updates an attribute of a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def updateEntityAction(attributeToUpdate: String): ActionBuilder = {
    http("update temperature")
      .post((s: Session) => "/entities/urn:ngsi-ld:TestEntity:" + s("entityId").as[String] + "/attrs")
      .body(StringBody((s: Session) => """{"""" + attributeToUpdate + """":{"value":""" + Random.nextFloat() * 10 + """}}"""))
      .asJson
  }

  /*
   * deletes a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def deleteEntityAction(): ActionBuilder = {
    http("delete entity")
      .delete((s: Session) => "/entities/urn:ngsi-ld:TestEntity:" + s("entityId").as[String])
  }

  /*
   * Create multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchCreateEntitiesAction(batchSize: Int, idList: List[UUID]): ActionBuilder = {
    http("create batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("append", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
  }

  /*
   * Update multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchUpdateEntitiesAction(batchSize: Int, idList: List[UUID]): ActionBuilder = {
    http("update batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("update", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
  }

  /*
   * Delete multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchDeleteEntities(batchSize: Int, idList: List[UUID]): ActionBuilder = {
    http("delete batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("delete", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
  }

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

  /*
   * Create a subscription. The id of the entity to  subscribe to needs to be fed as a session attribute.
   */
  def createSubscriptionAction(serverUrl: String): ActionBuilder = {
    http("create subscriptions")
      .post((s: Session) => "/subscriptions")
      .body(StringBody((s: Session) =>
        """{
            "subject":  {
              "entities": [
                {
                    "id": "urn:ngsi-ld:TestEntity:""" + s("entityId").as[String] +
          """",
                    "type": "TestEntity"
                 }
              ],
              "condition": {
                "attrs": [
                  "temperature"
                ],
                "expression": {
                  "q": "temperature>0"
                }
             }
           },
           "notification": {
             "http": {
                "url": """" + serverUrl +
          """"
             },
             "attrs": [
                "temperature",
                "humidity"
             ]
           },
           "throttling" : 1
          }"""))
      .asJson
  }
}
