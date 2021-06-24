var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300000",
        "ok": "300000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8392",
        "ok": "8392",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1086",
        "ok": "1086",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1473",
        "ok": "1469",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3320",
        "ok": "3323",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5446",
        "ok": "5414",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 95237,
    "percentage": 32
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70683,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 134080,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1470.588",
        "ok": "1470.588",
        "ko": "-"
    }
},
contents: {
"req_get-entities-b718b": {
        type: "REQUEST",
        name: " Get entities",
path: " Get entities",
pathFormatted: "req_get-entities-b718b",
stats: {
    "name": " Get entities",
    "numberOfRequests": {
        "total": "300000",
        "ok": "300000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8392",
        "ok": "8392",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1086",
        "ok": "1086",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1465",
        "ok": "1474",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3320",
        "ok": "3328",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5472",
        "ok": "5412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 95237,
    "percentage": 32
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70683,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 134080,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1470.588",
        "ok": "1470.588",
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
