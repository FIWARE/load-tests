package simulations

import com.typesafe.config.ConfigFactory

case class TestConfiguration() {
  val config = ConfigFactory.load("test.conf")

  val numPrefillEntities = config.getInt("numPrefillEntities")

  val baseCBUrl = config.getString("baseCBUrl")
  val baseIoTProvisionUrl = config.getString("baseIoTProvisionUrl")
  val baseIoTNotificationUrl = config.getString("baseIoTNotificationUrl")

  val numEntities = config.getInt("numEntities")
  val numUpdates = config.getInt("numUpdates")
  val numGets = config.getInt("numGets")
  val numQueries = config.getInt("numQueries")
  val numParallelQueries = config.getInt("parallelQueries")
  val updateDelay = config.getInt("updateDelay")
  val batchSize = config.getInt("batchSize")
  val notificationServerUrl = config.getString("notificationServerUrl")

  val baseVaultUrl = config.getString("baseVaultUrl")
  val vaultToken = config.getString("X-Vault-Token")
  val baseEthereumUrl = config.getString("baseEthereumUrl")
  val baseProxyUrl = config.getString("baseProxyUrl")
}
