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
    "object": "urn:ngsi-ld:owner:random-owner"
   },
   "@context": "https://fiware.github.io/data-models/context.jsonld"
}
``
```
