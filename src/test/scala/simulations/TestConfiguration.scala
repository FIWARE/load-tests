package simulations

import com.typesafe.config.ConfigFactory

case class TestConfiguration() {
  val config = ConfigFactory.load("test.conf")

  var numPrefillEntities = config.getInt("numPrefillEntities")

  var baseCBUrl = config.getString("baseCBUrl")
  var baseIoTProvisionUrl = config.getString("baseIoTProvisionUrl")
  var baseIoTNotificationUrl = config.getString("baseIoTNotificationUrl")

  var numEntities = config.getInt("numEntities")
  var numUpdates = config.getInt("numUpdates")
  var numGets = config.getInt("numGets")
  var numQueries = config.getInt("numQueries")
  var numParallelQueries = config.getInt("parallelQueries")
  var updateDelay = config.getInt("updateDelay")
  var batchSize = config.getInt("batchSize")
  var notificationServerUrl = config.getString("notificationServerUrl")
}
