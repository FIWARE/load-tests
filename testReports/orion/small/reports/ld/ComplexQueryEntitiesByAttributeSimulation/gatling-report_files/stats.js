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
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3104",
        "ok": "3104",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "percentiles1": {
        "total": "910",
        "ok": "910",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1281",
        "ok": "1281",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2626",
        "ok": "2626",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2888",
        "ok": "2888",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3834,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3337,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2829,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.758",
        "ok": "75.758",
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
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3104",
        "ok": "3104",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "percentiles1": {
        "total": "910",
        "ok": "910",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1281",
        "ok": "1281",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2626",
        "ok": "2626",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2888",
        "ok": "2888",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3834,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3337,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2829,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.758",
        "ok": "75.758",
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
