# Test reports

Test reports and there configuration can be found here. The reports are roughly structured by the size of the
environment, you can find the system configuration inside the /config folder and the tests with their reports inside the
reports folder.

Environments:

-   [Tiny](tiny) - 1 CPU / 6 GB RAM Orion-LD, 4 CPU / 16 GB RAM Mongo-DB
-   [Small](small) - 2 CPU / 12 GB RAM Orion-LD, 8 CPU / 32 GB RAM Mongo-DB
-   [Mid](mid) - 8 CPU / 48 GB RAM Orion-LD, 30 CPU / 48 GB RAM Mongo-DB
-   [Large](large) - 16 CPU / 96 GB RAM Orion-LD, 60 CPU / 96 GB RAM Mongo-DB

# Storage

In order to get the required performance form mongo-db, we would recommend the usage of ssd's for storage. Since the
tests where run on a [GCP-enviornment](https://cloud.google.com), we need to create such a storage class first. The
kubernetes-manifest for that can be found in the [config](small/config/storage-class.yaml). It can be applied to the
cluster via: `kubectl apply -f <CONFIG_SIZE>/config/storage.yaml `
