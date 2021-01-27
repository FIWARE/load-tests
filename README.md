# Loadtest for FIWARE Orion

![FIWARE Core](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/core.svg)
[![License: MIT](https://img.shields.io/github/license/FIWARE/orion-loadtest.svg)](https://opensource.org/licenses/MIT)

[Gatling](https://github.com/gatling/gatling) load tests to run against the [FIWARE Orion-LD Broker](https://github.com/FIWARE/context.Orion-LD)
or any other implementation of the [ngsi-ld](https://www.etsi.org/deliver/etsi_gs/CIM/001_099/009/01.03.01_60/gs_cim009v010301p.pdf) api.

## Reports

Reports of executed tests and the used config can be found in the [testReports-folder](./testReports/orion). You can find all the information about how to
setup the tested instances  and how to rerun those tests there.

## How to run

### Maven
1. configure your test run inside the ``src/test/resources/test.conf `` 
2. run all scenarios using 
```console
mvn install gatling:test
``` 

or single scenarios via 

```console
mvn install gatling:test -Dgatling.simulationClass=<CLASSNAME>
```

(e.g. ``CLASSNAME=simulations.nosec.v2.BatchUpdateSimulation ``)

### Helm 

In scenarios with a large number of entities, multiple machines should be used. For such cases, the [helm chart](helm/orion-loadtest) can be used. The chart will run the tests as kubernetes jobs an distribute them through the cluster according to your configuration. Every job will upload its result to a central ftp server.
The uploaded results will be aggregated by the ftp's sidecar container. You can view them in a browser via:

```console
kubectl proxy --port <YOUR_PREFERD_LOCAL_PORT>
http://localhost:<YOUR_PREFERD_LOCAL_PORT>/api/v1/namespaces/{{ .Release.Namespace }}/services/{{ template "orion-loadtest.fullname" . }}:8080/proxy/
```
See the chart docu for all configuration options.

## Testresults

Testresults are published in the standard [Gatling Report format](https://gatling.io/docs/current/general/reports/) and can be found under 
``target/gatling/results``

## Scenarios

### Orion without security

The following scenarios will test orion without any security components installed(e.g. no api-umbrella, no keyrock etc.).  Therefore the involved 
components are:
* [Orion](https://github.com/FIWARE/context.Orion-LD)
* [MongoDB](https://www.mongodb.com/)
* optionally: an [Ingress Controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) or load balancer in front of orion

#### Single value updates for entities
> see [code](src/test/scala/simulations/nosec/ld/EntityUpdateSimulation.scala)

A number of entities(see [store-entity](doc/store-entity.md) for structure of the entities) will be created, then update 2 attributes(temprature and humidity)
via ```POST /entities/<ID>/attrs``` with a delay between each of the updates. 

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |

#### Batch updates for entities
> see [code](src/test/scala/simulations/nosec/ld/BatchUpdateSimulation.scala)

A number of entites(see [store-entity](doc/store-entity.md) for structure of the entities) will be created in batches, then update 2 attributes (temprature and humidity) also in batches. The number of parallel calls can be calculated
by dividing the number of entities to be simulated through the batchsize.

The creation is done via ```POST /entityOperations/create```, the updates via ```POST /entityOperations/update```.

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |
| batchSize | Number of entities to be updated in each batch | 10 | 

#### Single value updates for entities with active subscriptions.
> see [code](src/test/scala/simulations/nosec/ld/EntityUpdateWithSubscriptionSimulation.scala)

A number of entities(see [store-entity](doc/store-entity.md) for structure of the entities) will be created, then update 2 attributes(temprature and humidity)
via ```POST /entities/<ID>/attrs``` with a delay between each of the updates.  Each entity will have an active individual 
subscription(see [subscription](doc/subscription.md)), that notifies a configurable http endpoint. To run this test, you need to provide an endpoint, that responds with 2xx to the notifications.
We can recommend the  [labstack echo-server](https://registry.hub.docker.com/r/labstack/echo-web) that is also used in the test [helm-charts](helm/orion-loadtest).

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |
| notificationServerUrl | URL to be notified by orion | http://echo-server | 

#### Single entity get.
> see [code](src/test/scala/simulations/nosec/ld/GetSingleEntitiesSimulation.scala)

A number of  entities(see [store-entity](doc/store-entity.md) for structure of the entities) will be created, then they will be retrieved via GET /entities/<ID> in parallel.

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numGets| How many gets should be executed. | 100  |

#### Query entities by an attribute.
> see [code](src/test/scala/simulations/nosec/ld/QueryEntitiesByAttributeSimulation.scala)

A number of  entities will be created(see [query entities](doc/query-entities.md) for there structure), then a subset of them will be retrieved via a query matching to a specific attribute(`producer`).
The queries are done via ```GET /entities?q=("producer"=="<PRODUCER_NAME>") ```

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numParallelQueries | Number of queries to be executed in parallel.        |  100                  |
| numQueries| How often should the queries be repeated. | 100  |

#### Query entities by type.
> see [code](src/test/scala/simulations/nosec/ld/QueryEntitiesByTypeSimulation.scala)


A number of entities will be created(see [query entities](doc/query-entities.md) for there structure), then a subset of them will be retrieved via a query matching to a specific type(`owner`).
The queries are done via ```GET /entities?type=https://uri.fiware.org/ns/data-models%23owner) ```

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numParallelQueries | Number of queries to be executed in parallel.        |  100                  |
| numQueries| How often should the queries be repeated. | 100  |

#### Query entities by type and attribute.
> see [code](src/test/scala/simulations/nosec/ld/ComplexQueryEntitiesByAttributeSimulation.scala)

A number of entities will be created(see [query entities](doc/query-entities.md) for there structure), then a subset of them will be retrieved via a query matching to some attributes and types.
The query is: ``` GET /entities?type="store"&q=(("open"=="<RANDOM_BOOLEAN>")|("owner"=="<RANDOM_OWNER"))&options=keyValues" ```

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numParallelQueries | Number of queries to be executed in parallel.        |  100                  |
| numQueries| How often should the queries be repeated. | 100  |


---

## License

[MIT](./LICENSE). © 2020-21 FIWARE Foundation e.V.
