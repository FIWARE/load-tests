# Setup

The described setup will work stable for setups with:
- around 1300-1500 updates/s for the ngsi-ld endpoint 
- around 1900-2000 single value updates/s for the v2 endpoint
- getting and querying entities ~1800-2000 req/s for the ngsi-ld endpoint
- getting and querying entities ~2800-3000 req/s for the v2 endpoint


Detailed reports can be found here:
* LD-endpoint:
    * [Entity Updates](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/EntityUpdateSimulation/gatling-reports.html) 
    * [Batch Updates](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/BatchUpdateSimulation/gatling-report.html) 
    * [Entity Updates with Subscriptions](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/EntityUpdateWithSubscriptionSimulation/gatling-report.html) 
    * [Get entities](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/GetSingleEntitiesSimulation/gatling-report.html) 
    * [Query entities by attribute](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/QueryEntitiesByAttributeSimulation/gatling-report.html) 
    * [Query entities by type](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/QueryEntitiesByTypeSimulation/gatling-report.html) 
    * [Complex queries](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/ld/ComplexQueryEntitiesByAttributeSimulation/gatling-report.html) 
* v2-endpoint:
    * [Entity Updates](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/v2/EntityUpdateSimulation/gatling-report.html) 
    * [Batch Updates](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/v2/BatchUpdateSimulation/gatling-report.html) 
    * [Get entities](https://fiware.github.io/orion-loadtest/testReports/orion/tiny/reports/v2/GetSingleEntitiesSimulation/gatling-report.html) 
    

## Environment

- [OpenShift 4.6](https://docs.openshift.com/container-platform/4.6/welcome/index.html) on [Google Compute Engine](https://cloud.google.com/compute)
- 3 master - 4 worker, each of type [n1-standard-4](https://cloud.google.com/compute/docs/machine-types)
- tests were run inside the same cluster
- all components are deployed using the following helm-charts:
    - [orion-ld](https://github.com/FIWARE/helm-charts/tree/main/charts/orion)
    - [mongo-db](https://github.com/bitnami/charts/tree/master/bitnami/mongodb)
- the setup uses 1 CPU / 6 GB RAM for Orion-LD, 8 CPU / 16 GB RAM for Mongo-DB
- detailed information(and ready to use values files) can be found in the [config-folder](config)
- regional ssd storage for mongo(see [storage-class](config/storage-class.yaml))

## Installation

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
     helm install orion-ldt ../../helm/orion-loadtest/ -n fiware -f ./testReports/orion/tiny/reports/<ENDPOINT>/<SCENARIO>/test.yaml
```

Get the results:
```
    kubectl proxy --port 8002
```
> see [Report](http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-orion-loadtest:8080/proxy/)
