```
{
    "type": "Subscription",
    "@context": "https://fiware.github.io/data-models/context.jsonld",
    "entities": [
      {
          "id": "urn:ngsi-ld:store:<ID>",
          "type": "store"
       }
    ],
   "watchedAttributes": [ "temperature" ],
   "q": "temperature>0",
   "notification": {
     "attributes": [
        "temperature",
        "humidity"
     ],
     "endpoint": {
        "uri": "<ECHO_SERVER_URL",
        "accept": "application/ld+json"
      }
   },
   "throttling" : 1
  }"
```