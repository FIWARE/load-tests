# Reports

This folder contains the results of tests executed by FIWARE and all necessary information to setup the tested systems and tests.

It currently contains two different setups:

* [Orion](orion) - Installation only containing [orion-ld](https://github.com/FIWARE/context.Orion-LD) and [mongo-db](https://www.mongodb.com/)
* [Orion-TRoE](orion-troe) - Installation of [orion-ld](https://github.com/FIWARE/context.Orion-LD) with [Temporal Representation](https://github.com/FIWARE/context.Orion-LD/blob/develop/doc/manuals-ld/troe.md) activated

The table below will give an indication on the differences in terms of update performance for the 2 setups, see the sub-folders for detailed results.

|  Environment | Orion | Orion-TRoE |
| ----------------- | ---------------------- | ------------------------ |
| ```tiny``` |  ~1800 req/s | ~1300 req/s |
| ```small``` |  ~3500 req/s | ~2800 req/s |
| ```mid``` |  ~12 000 req/s | ~9900 req/s |
