var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1600000",
        "ok": "1599948",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "60057",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "1162",
        "ok": "1160",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1058",
        "ok": "1004",
        "ko": "2"
    },
    "percentiles1": {
        "total": "942",
        "ok": "942",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1349",
        "ok": "1348",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "2795",
        "ok": "2794",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "4192",
        "ok": "4190",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 626525,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 464586,
    "percentage": 29
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 508837,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9411.765",
        "ok": "9411.459",
        "ko": "0.306"
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
        "total": "1600000",
        "ok": "1599948",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "60057",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "1162",
        "ok": "1160",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1058",
        "ok": "1004",
        "ko": "2"
    },
    "percentiles1": {
        "total": "941",
        "ok": "941",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1343",
        "ok": "1348",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "2795",
        "ok": "2795",
        "ko": "60006"
    },
    "percentiles4": {
        "total": "4192",
        "ok": "4191",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 626525,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 464586,
    "percentage": 29
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 508837,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9411.765",
        "ok": "9411.459",
        "ko": "0.306"
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
