# Setup

The described setup will work stable for setups with:
- around 250-280 single value updates/s and peaks between 350-400 updates/s for the ngsi-ld endpoint 
- around 600 single value updates/s for the v2 endpoint
- in case of a more batch centric approach, it's recommended to not set a request poolSize(e.g. broker.reqPoolSize)


## Environment

- [OpenShift 4.6](https://docs.openshift.com/container-platform/4.6/welcome/index.html) on [Google Compute Engine](https://cloud.google.com/compute)
- 3 master - 4 worker, each of type [n1-standard-4](https://cloud.google.com/compute/docs/machine-types)
- orion uses 1 CPUs and 2GiB, mongo uses 4 CPUs and 8GiB
- test where run inside the same cluster

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
    > db.entities.createIndex({"id.servicePath": 1,"_id.id": 1, "_id.type": 1});
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