var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3808",
        "ok": "3808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1172",
        "ok": "1172",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "percentiles1": {
        "total": "889",
        "ok": "889",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1506",
        "ok": "1506",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2802",
        "ok": "2802",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3197",
        "ok": "3197",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4177,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2052,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3771,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.942",
        "ok": "71.942",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3808",
        "ok": "3808",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1172",
        "ok": "1172",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "percentiles1": {
        "total": "889",
        "ok": "889",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1506",
        "ok": "1506",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2802",
        "ok": "2802",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3197",
        "ok": "3197",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4177,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2052,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3771,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.942",
        "ok": "71.942",
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
