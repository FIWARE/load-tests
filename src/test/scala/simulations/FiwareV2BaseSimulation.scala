package simulations

import java.util.UUID
import io.gatling.core.Predef._
import io.gatling.core.action.builder.ActionBuilder
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import org.keycloak.admin.client.KeycloakBuilder
import org.keycloak.admin.client.token.TokenManager

import scala.util.Random

/**
 * Base class for all Simulations. Provides a set of common configurations and methods to retrieve different actions that can be used for building
 * scenarios.
 */
abstract class FiwareV2BaseSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities
  val baseUrl = testConfig.baseUrl
  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay


  val httpConf = http.baseUrl(baseUrl)
  var tokenManager: TokenManager = setupTokenManager()

  def setupTokenManager(): TokenManager = {
    if(testConfig.keycloakAuthEnabled) {
     println("+++++++++++++++++++++ keycloak is enabled ++++++++++++++++++")
     return KeycloakBuilder.builder()
        .username(testConfig.keycloakUsername)
        .password(testConfig.keycloakPassword)
        .clientSecret(testConfig.keycloakClientSecret)
        .clientId(testConfig.keycloakClientId)
        .grantType("password")
        .realm(testConfig.keycloakRealm)
        .serverUrl(testConfig.keycloakURL)
        .build()
        .tokenManager();
    }
    null
  }

  before {
    beforeScenario();
  }

  val scn = getScenario()


  // simulation will simulate lifecycle of one entity, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(getParallelRuns()))).protocols(httpConf)

  after {
    afterScenario();
  }

  /*
   * must be implemented by the subclasses and should contain the actual scenario
   */
  def getScenario(): ScenarioBuilder

  /*
   * must be implemented by the subclasses and should retrieve the actual  number of parallel connections
   */
  def getParallelRuns(): Int

  /**
   * Method to override if something specific should be done before the scenario
   */
  def beforeScenario() = {};

  /**
   * Method to override if something specific should be done after the scenario
   */
  def afterScenario() = {};

  /*
   * creates a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def createEntityAction(token: String = ""): ActionBuilder = {
    http("create entity")
      .post("/entities")
      .body(StringBody((s: Session) => getEntityString(s("entityId").as[String])))
      .header("Content-Type", "application/json")
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /*
   * updates an attribute of a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def updateEntityAction(attributeToUpdate: String, token: String = ""): ActionBuilder = {
    http("update temperature")
      .post((s: Session) => "/entities/urn:ngsi:AirQualityObserved:" + s("entityId").as[String] + "/attrs")
      .body(StringBody((s: Session) => """{"""" + attributeToUpdate + """":{"type": "Number", "value":""" + Random.nextFloat() * 10 + """, "metadata": {"TimeInstant":{"type": "DateTime", "value":"2022-05-25T09:43:44Z"}}}, "sent-time":{"type":"DateTime", "value":"2022-05-25T09:43:44Z"}}"""))
      .asJson
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /*
   * deletes a single entity, id needs to be fed via session-attribute 'entityId'
   */
  def deleteEntityAction(token: String = ""): ActionBuilder = {
    http("delete entity")
      .delete((s: Session) => "/entities/urn:ngsi:AirQualityObserved:" + s("entityId").as[String])
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /**
   * Get a single entity. Id is expected as a session attribute
   */
  def singleEntityGetAction(token: String = ""): ActionBuilder = {
    http(" get a single entity")
      .get((s: Session) => "/entities/urn:ngsi:AirQualityObserved:" + s("entityId").as[String])
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /*
   * Create multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchCreateEntitiesAction(batchSize: Int, idList: List[UUID], token: String = ""): ActionBuilder = {
    http("create batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("append", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /*
   * Update multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchUpdateEntitiesAction(batchSize: Int, idList: List[UUID], token: String = ""): ActionBuilder = {
    http("update batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("update", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  /*
   * Delete multiple entities as a batch. The number of the current batch should be feed as a session attribute
   */
  def batchDeleteEntities(batchSize: Int, idList: List[UUID], token: String = ""): ActionBuilder = {
    http("delete batch of entities")
      .post("/op/update")
      .body(StringBody((s: Session) => getUpdateBody("delete", s("batchNumber").as[Int] * batchSize, (s("batchNumber").as[Int] + 1) * batchSize, idList)))
      .asJson
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  def getEntityString(entityId: String): String = {
    """{"type":"AirQualityObserved", "id":"urn:ngsi:AirQualityObserved:""" + entityId + """", "temperature":{ "type": "Number", "value":""" + Random.nextInt() + """},"sent-time": {"type":"DateTime", "value":"2022-05-25T09:43:44Z"}, "humidity":{ "type": "Number", "value":""".stripMargin + Random.nextFloat() + """, "metadata": {"TimeInstant":{"type": "DateTime", "value":"2022-05-25T09:43:44Z"}}}} """
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
  def createSubscriptionAction(serverUrl: String, token: String = ""): ActionBuilder = {
    http("create subscriptions")
      .post((s: Session) => "/subscriptions")
      .body(StringBody((s: Session) =>
        """{
            "subject":  {
              "entities": [
                {
                    "id": "urn:ngsi:AirQualityObserved:""" + s("entityId").as[String] +
          """",
                    "type": "AirQualityObserved"
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
                "humidity",
                "sent-time"
             ]
           }
          }"""))
      .asJson
      .header("Fiware-Service", testConfig.fiwareService)
      .header("Fiware-ServicePath", testConfig.fiwareServicePath)
      .header("Authorization", "bearer " + token)
  }

  def getAllEntitiesSubscriptionAction(serverUrl: String): String = {
    """{
            "id": "urn:ngsi-ld:Subscription:all",
            "subject":  {
              "entities": [
                {
                    "idPattern": ".*"
                 }
              ]
           },
           "notification": {
             "http": {
                "url": """" + serverUrl +
      """"
             },
             "attrs": [
                "temperature",
                "humidity",
                "sent-time"
             ]
           }
          }"""
  }
}
