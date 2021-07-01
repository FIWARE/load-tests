#### Store

```json
{
   "type":"store", "id":"urn:ngsi-ld:store:<UUID>",
   "temperature": {
      "type": "Property",
      "value": <RANDOM_NUMBER>
      },
   "humidity": {
      "type": "Property",
      "value": <RANDOM_NUMBER>
    },
   "open": {
     "type": "Property",
     "value": "true"
   },
   "owner": {
    "type": "Relationship",
    "object": "urn:ngsi-ld:owner:<RANDOM_OWNER_NAME>"
   },
   "@context": "https://fiware.github.io/data-models/context.jsonld"
}
```

### Owner

```json
{
    "@context": "https://fiware.github.io/data-models/context.jsonld",
    "id": "<ID>",
    "type": "owner",
    "name": {
        "type": "Property",
        "value": "<OWNER_NAME>"
    }
}
```

### Product

```json
{
    "@context": "https://fiware.github.io/data-models/context.jsonld",
    "id": "<ID>",
    "type": "product",
    "producer": {
        "type": "Property",
        "value": "<PRODUCER_NAME>"
    }
}
```

### Inventory

```json
{
     "@context": "https://fiware.github.io/data-models/context.jsonld",
    "id": "<ID>",
    "type": "inventory",
    "available": {
       "type": "Property",
      "value": <BOOLEAN>
     },
    "store": {
      "type": "Relationship",
      "object": "urn:ngsi-ld:store:<STORE_ID>"
    },
    "product": {
      "type": "Relationship",
      "object": "urn:ngsi-ld:product:<PRODUCT_ID"
    }
}
```
