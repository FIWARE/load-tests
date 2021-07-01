# orion-loadtest

![Version: 0.0.1](https://img.shields.io/badge/Version-0.0.1-informational?style=flat-square)
![AppVersion: 0.0.1](https://img.shields.io/badge/AppVersion-0.0.1-informational?style=flat-square)

A Helm chart for running the orion-loadtests on kubernetes.

## Maintainers

| Name     | Email                       | Url |
| -------- | --------------------------- | --- |
| wistefan | stefan.wiedemann@fiware.org |     |

## Source Code

-   <https://github.com/wistefan/orion-loadtest>

## Requirements

| Repository                      | Name        | Version |
| ------------------------------- | ----------- | ------- |
| https://ealenn.github.io/charts | echo-server | 0.3.0   |

## Values

| Key                             | Type   | Default                                                                                                                                                                                        | Description                                                      |
| ------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| aggregation                     | object | `{"image":{"pullPolicy":"Always","repository":"wistefan/loadtest-aggregation","tag":"latest"}}`                                                                                                | configuration for the post-test report aggregation               |
| aggregation.image               | object | `{"pullPolicy":"Always","repository":"wistefan/loadtest-aggregation","tag":"latest"}`                                                                                                          | image to be used for result aggregation                          |
| aggregation.image.pullPolicy    | string | `"Always"`                                                                                                                                                                                     | specification of the image pull policy                           |
| aggregation.image.repository    | string | `"wistefan/loadtest-aggregation"`                                                                                                                                                              | test image name                                                  |
| aggregation.image.tag           | string | `"latest"`                                                                                                                                                                                     | test image tag                                                   |
| collector.additionalAnnotations | object | `{}`                                                                                                                                                                                           | additional annotations for the deployment, if required           |
| collector.additionalLabels      | object | `{}`                                                                                                                                                                                           | additional labels for the deployment, if required                |
| collector.image.pullPolicy      | string | `"IfNotPresent"`                                                                                                                                                                               | specification of the image pull policy                           |
| collector.image.repository      | string | `"delfer/alpine-ftp-server"`                                                                                                                                                                   | collector image name                                             |
| collector.image.tag             | string | `"latest"`                                                                                                                                                                                     | collector image tag                                              |
| collector.password              | string | `"mypassword"`                                                                                                                                                                                 | password to authenticate with                                    |
| collector.port                  | int    | `21`                                                                                                                                                                                           | port to access the collector at                                  |
| collector.resultFolder          | string | `"/results"`                                                                                                                                                                                   | folder to put results at                                         |
| collector.service               | object | `{"annotations":{},"port":21,"type":"ClusterIP"}`                                                                                                                                              | configuration for the k8s service to access the result collector |
| collector.service.annotations   | object | `{}`                                                                                                                                                                                           | addtional annotations, if required                               |
| collector.service.port          | int    | `21`                                                                                                                                                                                           | port to be used by the service                                   |
| collector.service.type          | string | `"ClusterIP"`                                                                                                                                                                                  | service type                                                     |
| collector.username              | string | `"loadtest"`                                                                                                                                                                                   | username to authenticate with                                    |
| test.conf                       | object | `{"batchSize":10,"entitiesPerInstance":100,"notificationServer":"http://orion-ldt-echo-server","numberOfEntities":100,"numberOfUpdates":10,"orionUrl":"http://orion:1026/v2","updateDelay":1}` | test specific configuration                                      |
| test.conf.batchSize             | int    | `10`                                                                                                                                                                                           | number of entities to be updated in each batch                   |
| test.conf.entitiesPerInstance   | int    | `100`                                                                                                                                                                                          | how many entities should one test instance simulate              |
| test.conf.notificationServer    | string | `"http://orion-ldt-echo-server"`                                                                                                                                                               | url of the notification server.                                  |
| test.conf.numberOfEntities      | int    | `100`                                                                                                                                                                                          | number of entities to simulate                                   |
| test.conf.numberOfUpdates       | int    | `10`                                                                                                                                                                                           | number of updates every entity should send                       |
| test.conf.orionUrl              | string | `"http://orion:1026/v2"`                                                                                                                                                                       | url of the orion instance to test                                |
| test.conf.updateDelay           | int    | `1`                                                                                                                                                                                            | delay between calls in seconds(only in context of one instance)  |
| test.image                      | object | `{"pullPolicy":"Always","repository":"wistefan/orion-loadtest","tag":"latest"}`                                                                                                                | image to be used for result collection                           |
| test.image.pullPolicy           | string | `"Always"`                                                                                                                                                                                     | specification of the image pull policy                           |
| test.image.repository           | string | `"wistefan/orion-loadtest"`                                                                                                                                                                    | test image name                                                  |
| test.image.tag                  | string | `"latest"`                                                                                                                                                                                     | test image tag                                                   |
| test.simulationClass            | string | `"simulations.nosec.v2.EntityUpdateSimulation"`                                                                                                                                                | class of the concrete test to run                                |

---

Autogenerated from chart metadata using [helm-docs v1.4.0](https://github.com/norwoodj/helm-docs/releases/v1.4.0)
