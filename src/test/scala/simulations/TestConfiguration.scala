package simulations

import com.typesafe.config.ConfigFactory

case class TestConfiguration() {
  val config = ConfigFactory.load("test.conf")

  var numPrefillEntities = config.getInt("numPrefillEntities")

  var baseUrl = config.getString("baseUrl")
  var numEntities = config.getInt("numEntities")
  var numUpdates = config.getInt("numUpdates")
  var numGets = config.getInt("numGets")
  var numQueries = config.getInt("numQueries")
  var numParallelQueries = config.getInt("parallelQueries")
  var updateDelay = config.getInt("updateDelay")
  var batchSize = config.getInt("batchSize")
  var notificationServerUrl = config.getString("notificationServerUrl")

  var keycloakAuthEnabled = config.getBoolean("keycloakAuthEnabled")
  var keycloakUsername = config.getString("keycloakUsername")
  var keycloakPassword = config.getString("keycloakPassword")
  var keycloakClientId = config.getString("keycloakClientId")
  var keycloakClientSecret = config.getString("keycloakClientSecret")
  var keycloakURL = config.getString("keycloakURL")
  var keycloakRealm = config.getString("keycloakRealm")

  var fiwareService = config.getString("fiwareService")
  var fiwareServicePath = config.getString("fiwareServicePath")
}
