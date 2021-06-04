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
        "total": "10807",
        "ok": "10807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1368",
        "ok": "1368",
        "ko": "-"
    },
    "percentiles1": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1040",
        "ok": "1038",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2575",
        "ok": "2575",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8598",
        "ok": "8598",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 585273,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101617,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 133110,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6833.333",
        "ok": "6833.333",
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
        "total": "5711",
        "ok": "5711",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10807",
        "ok": "10807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8272",
        "ok": "8272",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1097",
        "ok": "1097",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8303",
        "ok": "8303",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9096",
        "ok": "9096",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10066",
        "ok": "10069",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10495",
        "ok": "10495",
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
        "total": "166.667",
        "ok": "166.667",
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
        "total": "4113",
        "ok": "4113",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "percentiles1": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles2": {
        "total": "953",
        "ok": "954",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1873",
        "ok": "1873",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2746",
        "ok": "2746",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 585273,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101617,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 113110,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6666.667",
        "ok": "6666.667",
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
