var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500000",
        "ok": "1500000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13187",
        "ok": "13187",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1511",
        "ok": "1511",
        "ko": "-"
    },
    "percentiles1": {
        "total": "990",
        "ok": "990",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1796",
        "ok": "1794",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3599",
        "ok": "3599",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9705",
        "ok": "9704",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 514825,
    "percentage": 34
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 402490,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 582685,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15151.515",
        "ok": "15151.515",
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
        "total": "1500000",
        "ok": "1500000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13187",
        "ok": "13187",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1511",
        "ok": "1511",
        "ko": "-"
    },
    "percentiles1": {
        "total": "989",
        "ok": "990",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1796",
        "ok": "1796",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3599",
        "ok": "3599",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9704",
        "ok": "9705",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 514825,
    "percentage": 34
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 402490,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 582685,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15151.515",
        "ok": "15151.515",
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
