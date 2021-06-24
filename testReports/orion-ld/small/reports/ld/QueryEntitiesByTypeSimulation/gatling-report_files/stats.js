var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600000",
        "ok": "600000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13304",
        "ok": "13304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1548",
        "ok": "1548",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1610",
        "ok": "1609",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3510",
        "ok": "3509",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7926",
        "ok": "8664",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 81225,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 169893,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 348882,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3370.787",
        "ok": "3370.787",
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
        "total": "600000",
        "ok": "600000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13304",
        "ok": "13304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1548",
        "ok": "1548",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1610",
        "ok": "1609",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3510",
        "ok": "3519",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6691",
        "ok": "6991",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 81225,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 169893,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 348882,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3370.787",
        "ok": "3370.787",
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
