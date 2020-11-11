package simulations

import com.typesafe.config.ConfigFactory

case class TestConfiguration() {
  val config = ConfigFactory.load("test.conf")

  var baseUrl = config.getString("baseUrl")
  var numDevices = config.getInt("numDevices")
}
