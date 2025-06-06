package simulations

import java.util.UUID

import io.gatling.core.Predef._
import io.gatling.core.action.builder.ActionBuilder
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import scalaj.http.Http  // This library is deplrecated in Scala

import scala.util.Random

/**
 * Base class for all Simulations. Provides a set of common configurations and methods to retrieve different actions that can be used for building
 * scenarios.
 */
abstract class CanisMajorBaseSimulation extends Simulation {
  val testConfig = TestConfiguration()

  val entitiesToSimulate = testConfig.numEntities

  val baseVaultUrl = testConfig.baseVaultUrl
  val baseEthereumUrl = testConfig.baseEthereumUrl
  val vaultToken = testConfig.vaultToken
  val baseProxyUrl = testConfig.baseProxyUrl

  val numberOfUpdatesToSimulate = testConfig.numUpdates
  val updateDelay = testConfig.updateDelay

  val ethereumAccount = "foo" // This is the account name used in the Vault

  // Define the HTTP protocol for notification port
  val httpProxyUrl = http.baseUrl(baseProxyUrl)

  before {
    beforeScenario();

    println("++++++++++++++++++++++++++++++++++++ EXECUTE BEFORE ++++++++++++++++++++++++++++++++++")

    println("Get health information of the Vault.")
    var response = Http(baseVaultUrl + "/v1/sys/health")
                    .timeout(10000, 60000)
                    .asString

    if (response.code != 200) {
      throw new RuntimeException("Was not able to get the health status of the Vault. Response: \n" + response)
    }

    println("Register the vault-ethereum plugin in the Vault.")
    response = Http(baseVaultUrl + "/v1/sys/plugins/catalog/secret/vault-ethereum")
                    .header("Content-Type", "application/json")
                    .header("X-Vault-Token", vaultToken)
                    .postData(getRegisterPluginString())
                    .method("PUT") // Specify the HTTP method
                    .timeout(10000, 60000)
                    .asString

    if (response.code != 204) {
      throw new RuntimeException("Was not able to register the vault-ethereum plugin. Response: \n" + response)
    }

    println("Enable the vault-ethereum plugin in the Vault.")
    response = Http(baseVaultUrl + "/v1/sys/mounts/ethereum")
                    .header("Content-Type", "application/json")
                    .header("X-Vault-Token", vaultToken)
                    .postData(getEnablePluginString())
                    .timeout(10000, 60000)
                    .asString

    if (response.code != 204) {
      throw new RuntimeException("Was not able to enable the vault-ethereum plugin. Response: \n" + response)
    }

    println("Configure the vault-ethereum plugin in the Vault.")
    response = Http(baseVaultUrl + "/v1/ethereum/config")
                    .header("Content-Type", "application/json")
                    .header("X-Vault-Token", vaultToken)
                    .postData(getConfigurePluginString())
                    .method("PUT") // Specify the HTTP method
                    .timeout(10000, 60000)
                    .asString

    if (response.code != 200) {
      throw new RuntimeException("Was not able to configure the vault-ethereum plugin. Response: \n" + response)
    }

    println("Create a user in the Vault.")
    response = Http(baseVaultUrl + "/v1/ethereum/accounts/" + ethereumAccount)
                    .header("Content-Type", "application/json; charset=utf-8")
                    .header("X-Vault-Token", vaultToken)
                    .postData(getMnemonicString())
                    .method("PUT") // Specify the HTTP method
                    .timeout(10000, 60000)
                    .asString

    if (response.code != 200) {
      throw new RuntimeException("Was not able to create an user account. Response: \n" + response)
    }
  
  }

  after {
    afterScenario();
  }

  val scn = getScenario()

  // simulation will simulate lifecycle of one entity, at once will care about running them in parallel
  setUp(scn.inject(atOnceUsers(getParallelRuns()))).protocols(httpProxyUrl)

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

  def sendEntityDataAction(): ActionBuilder = {
    val link = "<https://raw.githubusercontent.com/smart-data-models/dataModel.DistributedLedgerTech/master/context.jsonld>;rel=\"http://www.w3.org/ns/json-ld#context\";type=\"application/ld+json\""
    val walletUser = baseEthereumUrl + "/v1/ethereum/accounts/" + ethereumAccount

    http("send entity data")
      .post("/ngsi-ld/v1/entities")
      .body(StringBody((s: Session) => getEntityDataString(s("randomValue").as[String])))
      .header("Content-Type", "application/json")
      .header("Accept", "application/json")
      .header("Link", link)
      .header("Wallet-Type", "vault")
      .header("Wallet-Token", vaultToken)
      .header("Wallet-Address", baseEthereumUrl + "/v1/ethereum/accounts/" + ethereumAccount)
      .header("NGSILD-TENANT", "orion")
  }

  def getRegisterPluginString(): String = {
    """{
      "sha256": "76dc18d1811e2086e784414ffdef700854959e85fdfd61f089b138f1e0364aa2",
      "command": "vault-ethereum --tls-skip-verify=true"
    }"""
  }

  def getEnablePluginString(): String = {
    """{
      "type": "vault-ethereum"
    }"""
  }

  def getConfigurePluginString(): String = {
    """{
      "chain_id": "5777",
      "rpc_url": """" + baseEthereumUrl + """"
    }"""
  }

  def getMnemonicString(): String = {
    """{
      "mnemonic": "hungry health ignore host fox humble kangaroo hat level anger eight moon"
    }"""
  }

  def getEntityDataString(entityId: String): String = {
    // The CBroker URL and the API key should be adjusted according to our setup, need to be taken from Session data
    """{
        "id": "urn:ngsi-ld:Building:""" + entityId + """",
        "type": "Building",
        "category": {
          "type": "Property",
          "value": ["warehouse"]
        },
        "address": {
          "type": "Property",
          "value": {
            "streetAddress": "Alexanderplatz 2",
            "addressRegion": "Berlin",
            "addressLocality": "Mitte",
            "postalCode": "10178"
          }
        }
    }"""
  }

}
