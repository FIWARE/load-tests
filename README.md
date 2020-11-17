# Loadtest for Fiware Orion

[Gatling](https://github.com/gatling/gatling) load tests to run against the [Fiware Orion-LD Broker](https://github.com/FIWARE/context.Orion-LD)
or any other implementation of the [ngsi-v2](https://github.com/FIWARE/specifications/tree/master/OpenAPI/ngsiv2) api.

## General guidelines

* all scenarios should describe the involved components
* all scenarios that create something should cleanup afterwards
* if a scenario requires components that are not part of the fiware system(f.e. an echo server), they should at least link to a deployment 
   documentation.

## Scenarios

### Orion without security

The following scenarios will test orion without any security components installed(e.g. no api-umbrella, no keyrock etc.). 

#### Single value updates for entities

A number of  entities will be created, then update 2 attributes with a delay between each of the updates. 
Configuration parameters:

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |

#### Batch updates for entities

A number of entites will be created in batches, then update 2 attibutes also in batches. The number of parallel calls can be calculated
by dividing the number of entities to be simulated through the batchsize.

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |
| batchSize | Number of entities to be updated in each batch | 10 | 