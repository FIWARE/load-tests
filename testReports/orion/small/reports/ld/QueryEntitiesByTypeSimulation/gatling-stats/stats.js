var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5488",
        "ok": "5488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1782",
        "ok": "1782",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2029",
        "ok": "2029",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3497",
        "ok": "3497",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4905",
        "ok": "4905",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 270,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1832,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3898,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "28.571",
        "ok": "28.571",
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5488",
        "ok": "5488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1782",
        "ok": "1782",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2029",
        "ok": "2029",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3497",
        "ok": "3497",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4905",
        "ok": "4905",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 270,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1832,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3898,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "28.571",
        "ok": "28.571",
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
