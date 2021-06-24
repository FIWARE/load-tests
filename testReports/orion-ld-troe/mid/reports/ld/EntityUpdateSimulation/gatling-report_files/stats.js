var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "820000",
        "ok": "820000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10901",
        "ok": "10901",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "560",
        "ok": "560",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1204",
        "ok": "1204",
        "ko": "-"
    },
    "percentiles1": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "percentiles2": {
        "total": "739",
        "ok": "739",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1445",
        "ok": "1445",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7800",
        "ok": "7799",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 644523,
    "percentage": 79
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101969,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73508,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7663.551",
        "ok": "7663.551",
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4906",
        "ok": "4906",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10901",
        "ok": "10901",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7574",
        "ok": "7574",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7497",
        "ok": "7497",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8480",
        "ok": "8476",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9701",
        "ok": "9701",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10400",
        "ok": "10400",
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
    "count": 20000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "186.916",
        "ok": "186.916",
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
        "total": "800000",
        "ok": "800000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2723",
        "ok": "2723",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles1": {
        "total": "181",
        "ok": "179",
        "ko": "-"
    },
    "percentiles2": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1303",
        "ok": "1303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1589",
        "ok": "1589",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 644523,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101969,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 53508,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7476.636",
        "ok": "7476.636",
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
