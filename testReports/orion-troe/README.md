# Test reports

The reports in this folder where conducted with the [temporal-representation functionality](https://github.com/FIWARE/context.Orion-LD/blob/develop/doc/manuals-ld/troe.md) 
of Orion-LD enabled. Only update tests where conducted, since retrieval is not impacted by this feature.
Configuration information can be found in the config-folders and include the used configuration for [Timescale-DB](https://www.timescale.com/).

Environments:
* [Tiny](tiny) - 1 CPU / 6 GB RAM Orion-LD, 8 CPU / 16 GB RAM Mongo-DB, 4 CPU / 16 GB RAM Timescale-DB
* [Small](small) - 2 CPU / 12 GB RAM Orion-LD, 16 CPU / 32 GB RAM Mongo-DB, 8 CPU / 32 GB RAM Timescale-DB
* [Mid](mid) - 8 CPU / 48 GB RAM Orion-LD, 30 CPU / 48 GB RAM Mongo-DB, 16 CPU / 64 GB Ram Timescale-DB 

# Storage

In order to get the required performance form mongo-db, we would recommend the usage of ssd's for storage. Since the tests where run on 
a [GCP-enviornment](https://cloud.google.com), we need to create such a storage class first. The kubernetes-manifest for that can be found in the [config](small/config/storage-class.yaml).
It can be applied to the cluster via:
```kubectl apply -f <CONFIG_SIZE>/config/storage.yaml ```
