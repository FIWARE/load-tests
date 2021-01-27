package simulations

import io.gatling.core.action.builder.ActionBuilder
import io.gatling.http.Predef._
import io.gatling.core.Predef._

import scalaj.http.Http

import scala.util.Random

abstract class FiwareLDQueryBaseSimulation extends FiwareLDBaseSimulation {


  var numOwners = 10;
  var numStores = 20;
  var numProducts = 50;
  var numInventory = 100;

  override def beforeScenario() = {
    // just in case there are some leftovers
    cleanUp()

    // create some owners
    for (i <- 1 to numOwners) {
      val ownerName = "owner" + i;
      postEntity(createOwnerEntity(ownerName));
    }
    // create some stores
    for (i <- 1 to numStores) {
      val storeName = "store" + i;
      // assign a random store
      postEntity(createStoreEntity(storeName, "owner" + randomBetween(1, numOwners)))
    }
    // create some products
    for (i <- 1 to numProducts) {
      val productName = "product" + i;
      val producerName = "producer" + randomBetween(1, 10);
      postEntity(createProductEntity(productName, producerName));
    }
    // create some inventory items
    for (i <- 1 to numInventory) {
      val inventoryName = "inventory" + i;
      // assign a random product
      val productName = "product" + randomBetween(1, numProducts);
      // assign a random store
      val storeName = "store" + randomBetween(1, numStores);
      postEntity(createInventoryEntity(inventoryName, productName, storeName))
    }
  }

  override def afterScenario(): Unit = {
    cleanUp();
  }

  def cleanUp() = {
    for (i <- 1 to numStores) {
      deleteEntity("urn:ngsi-ld:store:store" + i)
    }
    for (i <- 1 to numOwners) {
      deleteEntity("urn:ngsi-ld:owner:owner" + i)
    }
    for (i <- 1 to numInventory) {
      deleteEntity("urn:ngsi-ld:inventory:inventory" + i)
    }
    for (i <- 1 to numProducts) {
      deleteEntity("urn:ngsi-ld:product:product" + i)
    }
  }

  def randomBetween(min: Int, max: Int): Int = {
    val rnd = new Random();
    min + rnd.nextInt((max - min) + 1)
  }

  def postEntity(entity: String) = {
    val response = Http(baseUrl + "entities").header("Content-Type", "application/ld+json").postData(entity).timeout(1000, 6000).asString
    if (response.code > 299 || response.code < 200) {
      println("Was not able to setup the datastructure. Response: " + response + ", Entity:  " + entity)
    }
  }

  def deleteEntity(entityId: String) = {
    Http(baseUrl + "entities/" + entityId).header("Content-Type", "application/ld+json").method("DELETE").timeout(1000, 6000).asString
  }

  /**
   * Get all entities with the given type
   */
  def queryByEntityType(entityType: String): ActionBuilder = {
    http(" Get entities")
      .get("/entities?type=" + entityType)
      .header("Content-Type", "application/ld+json")
  }

  /**
   * Get all entities with the given type
   */
  def queryByOneAttribute(attribute: String, valueString: String): ActionBuilder = {
    val queryString = "/entities?q=(" + attribute + "==\"" + valueString + "\")"
    http(" Get entities")
      .get(queryString)
      .header("Content-Type", "application/ld+json")
  }

  /**
   * Get all entities that fulfill the query in the simplified format
   */
  def queryComplexByAttributesAndType(attribute: String, attributeValue: String, relationship: String, relationshipValue: String, entityType: String): ActionBuilder = {
    val queryString = "/entities?type=" + entityType + "&q=((" + attribute + "==\"" + attributeValue + "\")|(" + relationship + "==" + "\"" + relationshipValue + "\"))&options=keyValues"
    http(" Get entities")
      .get(queryString)
      .header("Content-Type", "application/ld+json")
  }

  def createOwnerEntity(ownerName: String): String = {
    val id = "urn:ngsi-ld:owner:" + ownerName;
    """
       {
         "@context": "https://fiware.github.io/data-models/context.jsonld",
        "id":"""" + id +
      """",
        "type": "owner",
        "name": {
          "type": "Property",
          "value": """" + ownerName +
      """"
        }
      }
    """
  }

  def createStoreEntity(name: String, ownerName: String): String = {
    val id = "urn:ngsi-ld:store:" + name;
    """
       {
         "@context": "https://fiware.github.io/data-models/context.jsonld",
        "id": """" + id +
      """",
        "type": "store",
        "owner": {
          "type": "Relationship",
          "object": "urn:ngsi-ld:owner:""" + ownerName +
      """"
        },
        "open": {
          "type": "Property",
          "value": """" + (Math.random() > 0.5).toString +
      """"
        }
      }
    """
  }

  def createProductEntity(name: String, producer: String): String = {
    val id = "urn:ngsi-ld:product:" + name;
    """
       {
         "@context": "https://fiware.github.io/data-models/context.jsonld",
        "id": """" + id +
      """",
        "type": "product",
        "producer": {
          "type": "Property",
          "value": """" + producer +
      """"
         }
      }
    """
  }

  def createInventoryEntity(name: String, productName: String, storeName: String): String = {
    val id = "urn:ngsi-ld:inventory:" + name;
    """
       {
         "@context": "https://fiware.github.io/data-models/context.jsonld",
        "id": """" + id +
      """",
        "type": "inventory",
        "available": {
           "type": "Property",
          "value": """" + (Math.random() > 0.5).toString +
      """"
         },
        "store": {
          "type": "Relationship",
          "object": "urn:ngsi-ld:store:""" + storeName +
      """"
        },
        "product": {
          "type": "Relationship",
          "object": "urn:ngsi-ld:product:""" + productName +
      """"
        }
      }
    """
  }

}
