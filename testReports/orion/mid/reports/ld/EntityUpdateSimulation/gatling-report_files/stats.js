var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "492000",
        "ok": "492000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5924",
        "ok": "5924",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "percentiles1": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles2": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4402",
        "ok": "4402",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 454627,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21164,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16209,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5927.711",
        "ok": "5927.711",
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
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2228",
        "ok": "2228",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5924",
        "ok": "5924",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4224",
        "ok": "4224",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "726",
        "ok": "726",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4287",
        "ok": "4287",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4746",
        "ok": "4738",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5380",
        "ok": "5380",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5690",
        "ok": "5690",
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
    "count": 12000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "144.578",
        "ok": "144.578",
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
        "total": "480000",
        "ok": "480000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1979",
        "ok": "1979",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "percentiles1": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles2": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "percentiles3": {
        "total": "824",
        "ok": "824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1193",
        "ok": "1193",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 454627,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21164,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4209,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5783.133",
        "ok": "5783.133",
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
