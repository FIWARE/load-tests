# Setup

The described setup will work stable for setups with:
- around 2700-2800 updates/s for the ngsi-ld endpoint 
- around 3800-3900 single value updates/s for the v2 endpoint
- up to 6000 req/s for single entity GET requests for the ngsi-ld endpoint
- depending on the type of query, between 3500 and 5000 req/s for queries on the ngsi-ld endpoint
- ~6000 req/s for single entity GET requests for the ngsi-ld endpoint

Detailed reports can be found here:
* LD-endpoint:
    * [Entity Updates](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/EntityUpdateSimulation/gatling-reports.html) 
    * [Batch Updates](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/BatchUpdateSimulation/gatling-report.html) 
    * [Entity Updates with Subscriptions](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/EntityUpdateWithSubscriptionSimulation/gatling-report.html) 
    * [Get entities](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/GetSingleEntitiesSimulation/gatling-report.html) 
    * [Query entities by attribute](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/QueryEntitiesByAttributeSimulation/gatling-report.html) 
    * [Query entities by type](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/QueryEntitiesByTypeSimulation/gatling-reports.html) 
    * [Complex queries](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/ld/ComplexQueryEntitiesByAttributeSimulation/gatling-report.html) 
* v2-endpoint:
    * [Entity Updates](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/v2/EntityUpdateSimulation/gatling-report.html) 
    * [Batch Updates](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/v2/BatchUpdateSimulation/gatling-report.html) 
    * [Get entities](https://wistefan.github.io/orion-loadtest/testReports/orion/small/reports/v2/GetSingleEntitiesSimulation/gatling-report.html) 
    

## Environment

- [OpenShift 4.6](https://docs.openshift.com/container-platform/4.6/welcome/index.html) on [Google Compute Engine](https://cloud.google.com/compute)
- 3 master - 4 worker, each of type [n1-standard-8](https://cloud.google.com/compute/docs/machine-types)
- test where run inside the same cluster
- all components are deployed using the following helm-charts:
    - [orion-ld](https://github.com/FIWARE/helm-charts/tree/main/charts/orion)
    - [mongo-db](https://github.com/bitnami/charts/tree/master/bitnami/mongodb)
- the setup uses 2 CPU / 12 GB RAM for Orion-LD, 8 CPU / 16 GB RAM for Mongo-DB
- detailed information(and ready to use values files) can be found in the [config-folder](config)
- regional ssd storage for mongo(see [storage-class](config/storage-class.yaml))

## Installation

> :warning: Be aware that mongo uses a node-affinity configuration in that config. Due to the resource requirements of the single instances, we 
> select the nodes by the label "workload=mongo". You can set node labels via `kubectl label nodes <NODE_NAME> workload=mongo` on k8s or 
>`oc label node <NODE_NAME> workload=mongo` in an openshift environment.

Add helm repos:
```
  helm repo add fiware https://fiware.github.io/helm-charts/repo/
  helm repo add bitnami https://charts.bitnami.com/bitnami
  helm repo update
```

Install charts:
```
  helm install mongo bitnami/mongodb -f config/mongo.yaml --namespace fiware
  helm install orion-test fiware/orion -f config/orion.yaml --namespace fiware
```

Optimizations:
To improve performance, you should set an index on the mongodb as following:
```
    kubectl run --namespace fiware mongo-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.2-debian-10-r0 --command -- bash
    mongo admin --host "mongo-mongodb-0.mongo-mongodb-headless.fiware.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.fiware.svc.cluster.local:27017"
    > use orion
    > db.entities.createIndex({"_id.servicePath": 1, "_id.id": 1, "_id.type": 1});
```

Run test:
```
     helm install orion-ldt ../../helm/orion-loadtest/ -n fiware -f ./testReports/orion/small/reports/<ENDPOINT>/<SCENARIO>/test.yaml
```

Get the results:
```
    kubectl proxy --port 8002
```
> see [Report](http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-orion-loadtest:8080/proxy/)
