# Setup

The described setup will work stable for setups with:

-   around 23 000 updates/s for the ngsi-ld endpoint
-   around 19 000 single value updates/s for the v2 endpoint

Detailed reports can be found here:

-   LD-endpoint:
    -   [Entity Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/ld/EntityUpdateSimulation/gatling-report.html)
    -   [Batch Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/ld/BatchUpdateSimulation/gatling-report.html)
    -   [Entity Updates with Subscriptions](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/ld/EntityUpdateWithSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/ld/EntityUpdateWithSubscriptionSimulation/grafana-report.png)
    -   [Entity Updates with Type-Subscription](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/ld/EntityUpdateWithTypeSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/ld/EntityUpdateWithTypeSubscriptionSimulation/grafana-report.png)
-   v2-endpoint:
    -   [Entity Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/v2/EntityUpdateSimulation/gatling-report.html)
    -   [Batch Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/v2/BatchUpdateSimulation/gatling-report.html)
    -   [Entity Updates with Subscriptions](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/v2/EntityUpdateWithSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/v2/EntityUpdateWithSubscriptionSimulation/grafana-report.png)
    -   [Entity Updates with a single Subscription](https://fiware.github.io/load-tests/testReports/orion-ld-troe/large/reports/v2/EntityUpdateWithSingleSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/v2/EntityUpdateWithSingleSubscriptionSimulation/grafana-report.png)

## Environment

-   [OpenShift 4.6](https://docs.openshift.com/container-platform/4.6/welcome/index.html) on
    [Google Compute Engine](https://cloud.google.com/compute)
-   3 master - 6 worker, each of type [n1-standard-16](https://cloud.google.com/compute/docs/machine-types)
-   tests were run inside the same cluster
-   all components are deployed using the following helm-charts:
    -   [orion-ld](https://github.com/FIWARE/helm-charts/tree/main/charts/orion)
    -   [mongo-db](https://github.com/bitnami/charts/tree/master/bitnami/mongodb)
    -   [timescale-db](https://github.com/timescale/timescaledb-kubernetes/tree/master/charts/timescaledb-single)
-   the setup uses 16 CPU / 96 GB RAM for Orion-LD, 60 CPU / 96 GB RAM for Mongo-DB, 32 CPU / 128 GB Ram Timescale-DB
-   detailed information(and ready to use values files) can be found in the [config-folder](config)
-   regional ssd storage for mongo(see [storage-class](config/storage-class.yaml))

## Installation

> :warning: Be aware that mongo uses a node-affinity configuration in this config. Due to the resource requirements of
> the single instances, we select the nodes by the label "workload=mongo". You can set node labels via
> `kubectl label nodes <NODE_NAME> workload=mongo` on k8s or `oc label node <NODE_NAME> workload=mongo` in an openshift
> environment.

Add helm repos:

```console
helm repo add fiware https://fiware.github.io/helm-charts/repo/
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add timescale https://charts.timescale.com
helm repo update
```

Install charts:

```console
helm install mongo bitnami/mongodb -f config/mongo.yaml --namespace fiware
helm install timescale timescale/timescaledb-single -f config/timescale.yaml --namespace fiware
helm install orion-test fiware/orion -f config/orion.yaml --namespace fiware
```

Optimizations: To improve performance, you should set an index on the mongodb as following:

```console
kubectl run --namespace fiware mongo-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.2-debian-10-r0 --command -- bash
mongo admin --host "mongo-mongodb-0.mongo-mongodb-headless.fiware.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.fiware.svc.cluster.local:27017"
> use orion
> db.entities.createIndex({"_id.servicePath": 1, "_id.id": 1, "_id.type": 1});
```

Run test:

```console
helm install orion-ldt ../../helm/orion-loadtest/ -n fiware -f ./testReports/orion/large/reports/<ENDPOINT>/<SCENARIO>/test.yaml
```

Get the results:

```console
kubectl proxy --port 8002
```

> to see a local report go to
> `http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-orion-loadtest:8080/proxy/` or click this
> [report link](http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-orion-loadtest:8080/proxy/) when
> running locally
