package simulations

import java.util.UUID

import io.gatling.core.Predef._
import io.gatling.core.action.builder.ActionBuilder
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import scalaj.http.Http

import scala.util.Random

/**
 * Base class for all Simulations. Provides a set of common configurations and methods to retrieve different actions that can be used for building
 * scenarios.
 */
abstract class FiwareIoTBaseSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities

  // val baseCBUrl = testConfig.baseCBUrl
  val baseIoTNotificationUrl = testConfig.baseIoTNotificationUrl
  val baseIoTProvisionUrl = testConfig.baseIoTProvisionUrl

  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay

  // Define the HTTP protocol for notification port
  val httpIoTNotiPort = http.baseUrl(baseIoTNotificationUrl)

  before {
    beforeScenario();

    println("++++++++++++++++++++++++++++++++++++ EXECUTE BEFORE ++++++++++++++++++++++++++++++++++")
    println("Provisioning Group Service.")

    val response1 = Http(baseIoTProvisionUrl + "/iot/services")
                    .header("Content-Type", "application/json")
                    .header("Fiware-Service", "openiot")
                    .header("Fiware-ServicePath", "/")
                    .postData(getProvisionServiceString())
                    .timeout(10000, 60000)
                    .asString

    if (response1.code != 201) {
      throw new RuntimeException("Was not able to provision the Service Group. Response: \n" + response1)
    }

    println("Provisioning Device.")
    val response2 = Http(baseIoTProvisionUrl + "/iot/devices")
                .header("Content-Type", "application/json")
                .header("Fiware-Service", "openiot")
                .header("Fiware-ServicePath", "/")
                .postData(getProvisionSensorString())
                .timeout(10000, 60000)
                .asString


    if (response2.code != 201) {
      throw new RuntimeException("Was not able to provision Device. Response: \n" + response2)
    }

}

  after {
    afterScenario();
  }

  val scn = getScenario()

  // simulation will simulate lifecycle of one entity, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(getParallelRuns()))).protocols(httpIoTNotiPort)

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

  /**
    * Provisioning a Service group in an IoT Agent
    */
  /*def provisioningServiceGroupAction(): String = {
    Http(baseIoTProvisionUrl + "/iot/services")
    .header("Content-Type", "application/json")
    .header("Fiware-Service", "openiot")
    .header("Fiware-ServicePath", "")
    .postData(StringBody((s: Session) => getProvisionServiceString()))
    .timeout(10000, 60000)

    /*http("provision service group")
      .baseURL(baseIoTProvisionUrl)
      .post("/iot/services")
      .body(StringBody((s: Session) => getProvisionServiceString()))
      .header("Content-Type", "application/json")
      .header("Fiware-Service", "openiot")
      .header("Fiware-ServicePath", "")
      .asString*/
  }

  def provisionSensorAction(): String = {
    Http(baseIoTProvisionUrl + "/iot/devices")
    .header("Content-Type", "application/json")
    .header("Fiware-Service", "openiot")
    .header("Fiware-ServicePath", "")
    .postData(StringBody((s: Session) => getProvisionSensorString()))
    .timeout(10000, 60000)
    .asString

    /*http("provision sensor")
      .baseURL(baseIoTProvisionUrl)
      .post("/iot/devices")
      .body(StringBody((s: Session) => getProvisionSensorString()))
      .header("Content-Type", "application/json")
      .header("Fiware-Service", "openiot")
      .header("Fiware-ServicePath", "/")
      .asString*/
  }
*/
  def sendDeviceMeasurementAction(): ActionBuilder = {
    val queryString = "/iot/json?k=4jggokgpepnvsb2uv4s40d59ov&i=temperature001"    
    http("send device measurement")
      .post(queryString)
      .body(StringBody((s: Session) => getDeviceMeasurementString()))
      .header("Content-Type", "application/json")
  }

  def getProvisionServiceString(): String = {
    // The CBroker URL and the API key should be adjusted according to our setup, need to be taken from Session data
    """{
      "services": [
        {
            "apikey": "4jggokgpepnvsb2uv4s40d59ov",
            "cbroker": "http://localhost:1026",
            "entity_type": "Device",
            "resource": "/iot/json",
            "attributes": [
                {
                    "object_id": "bpm", "type": "Property", "name": "heartRate",
                    "metadata": { "unitCode": {"type": "Text", "value": "5K" }}
                },
                {
                    "object_id": "s", "name": "status", "type": "Property"
                },
                {
                    "object_id": "gps", "name": "location", "type": "geo:point"
                }
            ],
            "static_attributes": [
                {
                    "name": "category", "type": "VocabProperty", "value": "sensor"
                },
                {
                    "name": "supportedProtocol", "type": "Property", "value": "ul20"
                }
            ]
        }
      ]
    }"""
  }

  def getProvisionSensorString(): String = {
    // The CBroker URL and the API key should be adjusted according to our setup, need to be taken from Session data
    """{
        "devices": [
            {
                "device_id": "temperature001",
                "entity_name": "urn:ngsi-ld:Device:temperature001",
                "entity_type": "Device",
                "apikey": "4jggokgpepnvsb2uv4s40d59ov",
                "timezone": "Europe/Berlin",
                "attributes": [
                    {
                        "object_id": "t",
                        "name": "temperature",
                        "type": "Property",
                        "metadata": {
                            "unitCode": {
                                "type": "Text",
                                "value": "CEL"
                            }
                        }
                    }
                ],
                "static_attributes": [
                    {
                        "name": "controlledAsset",
                        "type": "Relationship",
                        "value": "urn:ngsi-ld:Building:barn001"
                    }
                ]
            }
        ]
    }"""
  }

  def getDeviceMeasurementString(): String = {
    // The CBroker URL and the API key should be adjusted according to our setup, need to be taken from Session data
    """{
        "t": 3
    }"""
  }

}
