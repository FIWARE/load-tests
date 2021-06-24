var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3232000",
        "ok": "3232000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14904",
        "ok": "14904",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1006",
        "ok": "1006",
        "ko": "-"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles2": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles3": {
        "total": "693",
        "ok": "693",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3483",
        "ok": "3483",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3094880,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37986,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99134,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15102.804",
        "ok": "15102.804",
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
        "total": "32000",
        "ok": "32000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5697",
        "ok": "5697",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14904",
        "ok": "14904",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9743",
        "ok": "9743",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1555",
        "ok": "1555",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9805",
        "ok": "9805",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10809",
        "ok": "10809",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12295",
        "ok": "12295",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12699",
        "ok": "12699",
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
    "count": 32000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "149.533",
        "ok": "149.533",
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
        "total": "3200000",
        "ok": "3200000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6305",
        "ok": "6305",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles2": {
        "total": "193",
        "ok": "193",
        "ko": "-"
    },
    "percentiles3": {
        "total": "594",
        "ok": "594",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1935",
        "ok": "1935",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3094880,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37986,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 67134,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14953.271",
        "ok": "14953.271",
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
