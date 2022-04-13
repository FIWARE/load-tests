var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180300",
        "ok": "180300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21312",
        "ok": "21312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "979",
        "ok": "979",
        "ko": "-"
    },
    "percentiles1": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles2": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1978",
        "ok": "1978",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5399",
        "ok": "5399",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 132778,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19085,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 28437,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.94",
        "ok": "179.94",
        "ko": "-"
    }
},
contents: {
"req_create-entity-a3620": {
        type: "REQUEST",
        name: "create entity",
path: "create entity",
pathFormatted: "req_create-entity-a3620",
stats: {
    "name": "create entity",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "735",
        "ok": "735",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5107",
        "ok": "5107",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1736",
        "ok": "1736",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "684",
        "ok": "684",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1622",
        "ok": "1622",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1991",
        "ok": "1991",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3133",
        "ok": "3133",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3629",
        "ok": "3629",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 62,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 234,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.299",
        "ok": "0.299",
        "ko": "-"
    }
}
    },"req_update-temperat-6d80d": {
        type: "REQUEST",
        name: "update temperature",
path: "update temperature",
pathFormatted: "req_update-temperat-6d80d",
stats: {
    "name": "update temperature",
    "numberOfRequests": {
        "total": "180000",
        "ok": "180000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21312",
        "ok": "21312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "621",
        "ok": "621",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "978",
        "ok": "978",
        "ko": "-"
    },
    "percentiles1": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles2": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1974",
        "ok": "1974",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 132774,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19023,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 28203,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.641",
        "ok": "179.641",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
