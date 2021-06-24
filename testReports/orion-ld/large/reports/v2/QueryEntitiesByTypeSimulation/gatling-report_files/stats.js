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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14803",
        "ok": "14803",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1767",
        "ok": "1767",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1450",
        "ok": "1450",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1990",
        "ok": "1989",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3840",
        "ok": "3842",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8905",
        "ok": "8905",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 244209,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 221311,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1034480,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13761.468",
        "ok": "13761.468",
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14803",
        "ok": "14803",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1767",
        "ok": "1767",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1451",
        "ok": "1450",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1990",
        "ok": "1990",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3842",
        "ok": "3841",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8905",
        "ok": "8905",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 244209,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 221311,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1034480,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13761.468",
        "ok": "13761.468",
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
