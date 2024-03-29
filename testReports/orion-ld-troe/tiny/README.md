# Setup

The described setup will work stable for setups with:

-   around 1400 updates/s for the ngsi-ld endpoint
-   around 2000 single value updates/s for the v2 endpoint

Detailed reports can be found here:

-   LD-endpoint:
    -   [Entity Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/ld/EntityUpdateSimulation/gatling-report.html)
    -   [Batch Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/ld/BatchUpdateSimulation/gatling-report.html)
    -   [Entity Updates with Subscriptions](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/ld/EntityUpdateWithSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/ld/EntityUpdateWithSubscriptionSimulation/grafana-report.png)
    -   [Entity Updates with Type-Subscription](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/ld/EntityUpdateWithTypeSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/ld/EntityUpdateWithTypeSubscriptionSimulation/grafana-report.png)
-   v2-endpoint:
    -   [Entity Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/v2/EntityUpdateSimulation/gatling-report.html)
    -   [Batch Updates](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/v2/BatchUpdateSimulation/gatling-report.html)
    -   [Entity Updates with Subscriptions](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/v2/EntityUpdateWithSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/v2/EntityUpdateWithSubscriptionSimulation/grafana-report.png)
    -   [Entity Updates with a single Subscription](https://fiware.github.io/load-tests/testReports/orion-ld-troe/tiny/reports/v2/EntityUpdateWithSingleSubscriptionSimulation/gatling-report.html) -
        [Notification latency](reports/v2/EntityUpdateWithSingleSubscriptionSimulation/grafana-report.png)

## Environment

-   [OpenShift 4.6](https://docs.openshift.com/container-platform/4.6/welcome/index.html) on
    [Google Compute Engine](https://cloud.google.com/compute)
-   3 master - 4 worker, each of type [n1-standard-4](https://cloud.google.com/compute/docs/machine-types)
-   tests were run inside the same cluster
-   all components are deployed using the following helm-charts:
    -   [orion-ld](https://github.com/FIWARE/helm-charts/tree/main/charts/orion)
    -   [mongo-db](https://github.com/bitnami/charts/tree/master/bitnami/mongodb)
    -   [timescale-db](https://github.com/timescale/timescaledb-kubernetes/tree/master/charts/timescaledb-single)
-   the setup uses 1 CPU / 6 GB RAM for Orion-LD, 8 CPU / 16 GB RAM for Mongo-DB
-   detailed information(and ready to use values files) can be found in the [config-folder](config)
-   regional ssd storage for mongo and timescale (see [storage-class](config/storage-class.yaml))

## Installation

Add helm repos:

```console
helm repo add fiware https://fiware.github.io/helm-charts
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add timescale https://charts.timescale.com
helm repo update
```

Install charts:

```console
helm install mongo bitnami/mongodb -f config/mongo.yaml --namespace fiware
helm install timescale timescale/timescaledb-single -f config/timescale.yaml --version v0.7.1 --namespace fiware
helm install orion-test fiware/orion -f config/orion.yaml --namespace fiware
```

:warning: Apply [optimizations](#optimizations)

Run test:

```console
helm install orion-ldt ../../helm/orion-loadtest/ -n fiware -f ./testReports/orion/tiny/reports/<ENDPOINT>/<SCENARIO>/test.yaml
```

Get the results:

```console
kubectl proxy --port 8002
```

> see [Gatling-Report](http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-orion-loadtest:8080/proxy/)

Get latency report(only available when notification latency was measured):

> see
> [Grafana-Dashboard](http://localhost:8002/api/v1/namespaces/fiware/services/orion-ldt-grafana:80/proxy/d/3vb8BaYMk/latency-overview?orgId=1)

## Optimizations:

To improve performance, you should set an index on the mongodb as following:

```console
kubectl run --namespace fiware mongo-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.2-debian-10-r0 --command -- bash
mongo admin --host "mongo-mongodb-0.mongo-mongodb-headless.fiware.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.fiware.svc.cluster.local:27017"
> use orion
> db.entities.createIndex({"_id.servicePath": 1, "_id.id": 1, "_id.type": 1});
```

### Notification specific:

Recommendations on for optimizations in setups that are using notifications depend on the concreate usecase. Following
differentiations can be made:

-   'SingleSubscriber-case' - A subscription to one(or few) subscribers(e.g. notification endpoints) is created and
    should receive all notifications. This is typical for setups that include backends like
    [QuantumLeap](https://quantumleap.readthedocs.io/en/latest/) or
    [Cygnus](https://github.com/telefonicaid/fiware-cygnus).
-   'ManySubscriber-case' - Subscriptions for many differents subscribers(e.g. notification endpoints) are created. They
    should receive different amounts of notifications.

#### SingleSubscriber-case

In order to efficently handle notifications, orion should run in notification-mode 'persistent'. The mode can be set in
the helm charts via `broker.notificationMode: persistent`. The configuration is set in the config, provided for this
environment. See
[Orion-Documentation on notifications](https://github.com/telefonicaid/fiware-orion/blob/master/doc/manuals/admin/perf_tuning.md#notification-modes-and-performance)
for detailed information.

#### ManySubscriber-case

This case requires some careful fine-tuning of the connection pool. In lower load scenarios, the
`broker.notificationMode: transient`(e.g. the default) can be used. For high load scenarios, the threadpool
configuration should be used with specifically tuned pool and queue configuration. See
[Orion-Documentation on notifications](https://github.com/telefonicaid/fiware-orion/blob/master/doc/manuals/admin/perf_tuning.md#notification-modes-and-performance)
for detailed information.
