# Loadtest for FIWARE Orion

[Gatling](https://github.com/gatling/gatling) load tests to run against the [FIWARE Orion-LD Broker](https://github.com/FIWARE/context.Orion-LD)
or any other implementation of the [ngsi-ld](https://www.etsi.org/deliver/etsi_gs/CIM/001_099/009/01.03.01_60/gs_cim009v010301p.pdf) api.

## Reports

Reports of executed tests and the used config can be found in the [testReports-folder](./testReports).

## General guidelines

* all scenarios should describe the involved components
* if a scenario requires components that are not part of the FIWARE system(f.e. an echo server), they should at least link to a deployment 
   documentation.

## How to run

### Maven
1. configure your test run inside the ``src/test/resources/test.conf `` 
2. run all scenarios using ``mvn install gatling:test `` or single scenarios via ``mvn install gatling:test -Dgatling.simulationClass=<CLASSNAME>``
(f.e. ``CLASSNAME=simulations.nosec.v2.BatchUpdateSimulation ``)
## Scenarios

## Testresults

Testresults are published in the standard [Gatling Report format](https://gatling.io/docs/current/general/reports/) and can be found under 
``target/gatling/results``

### Orion without security

The following scenarios will test orion without any security components installed(e.g. no api-umbrella, no keyrock etc.).  Therefor the involved 
components are:
* [Orion](https://github.com/telefonicaid/FIWARE-orion)
* [MongoDB](https://www.mongodb.com/)
* optionally: an [Ingress Controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) or Loadbalancer in front of orion

#### Single value updates for entities

A number of  entities will be created, then update 2 attributes with a delay between each of the updates. 
Configuration parameters:

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |

#### Batch updates for entities

A number of entites will be created in batches, then update 2 attibutes also in batches. The number of parallel calls can be calculated
by dividing the number of entities to be simulated through the batchsize.

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |
| batchSize | Number of entities to be updated in each batch | 10 | 

#### Single value updates for entities with active subscriptions.

A number of  entities will be created, then update 2 attributes with a delay between each of the updates.  Each entity will have an active individual 
subscription, that notifies a configurable http endpoint. To run this test, you need to provide an endpoint, that responds with 2xx to the notifications. 

##### Echo Server preparation

If running Orion on Kubernetes, an easy solution would be to install an [echo server](https://ealenn.github.io/Echo-Server/) into the cluster. That 
solutions takes out the network as a bottleneck to the notification endpoint.
Use ``helm install echo-server ealenn/echo-server``  to provide an endpoint cluster internal at the address ``http://echo-server``.

##### Config

|  Parameter | Description | Example |
| ----------------- | ----------------------------------------------- | ------------------------ |
| baseUrl        | Url of orion                                                | http://localhost  |                            
| numEntities | Number of entities to be simulated.        |  100                  |
| numUpdates| How many updates should be executed for each attribute. | 100  |
| updateDelay| Delay between attribute updates in seconds. | 1 |
| notificationServerUrl | URL to be notified by orion | http://echo-server | 

### Helm 

In scenarios with a large number of entities, multiple machines should be used. For such cases, the helm chart can be used. The chart will run the 
tests as kubernetes jobs an distribute them through the cluster according to your configuration. Every job will upload its result to a central ftp server.
The uploaded results will be aggregated by the ftp's sidecar container. You can view them in a browser via:

```
kubectl proxy --port <YOUR_PREFERD_LOCAL_PORT>
http://localhost:<YOUR_PREFERD_LOCAL_PORT>/api/v1/namespaces/{{ .Release.Namespace }}/services/{{ template "orion-loadtest.fullname" . }}:8080/proxy/
```
See the chart docu for all configuration options.