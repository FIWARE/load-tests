var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "82000",
        "ok": "82000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4001",
        "ok": "4001",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "631",
        "ok": "631",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "605",
        "ok": "605",
        "ko": "-"
    },
    "percentiles1": {
        "total": "511",
        "ok": "511",
        "ko": "-"
    },
    "percentiles2": {
        "total": "841",
        "ok": "841",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1595",
        "ok": "1595",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3298",
        "ok": "3298",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55814,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12095,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14091,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "854.167",
        "ok": "854.167",
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
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1903",
        "ok": "1903",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4001",
        "ok": "4001",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3115",
        "ok": "3115",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3199",
        "ok": "3199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3410",
        "ok": "3410",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3700",
        "ok": "3700",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3898",
        "ok": "3898",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.833",
        "ok": "20.833",
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
        "total": "80000",
        "ok": "80000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "1802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "569",
        "ok": "569",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "percentiles1": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "percentiles2": {
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1554",
        "ok": "1554",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1609",
        "ok": "1609",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55814,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12095,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12091,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "833.333",
        "ok": "833.333",
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
