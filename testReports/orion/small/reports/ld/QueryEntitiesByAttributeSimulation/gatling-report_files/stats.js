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
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5000",
        "ok": "5000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "989",
        "ok": "989",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "874",
        "ok": "874",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2824",
        "ok": "2824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4614",
        "ok": "4614",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5806,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1887,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2307,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.74",
        "ok": "78.74",
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
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5000",
        "ok": "5000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "989",
        "ok": "989",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "874",
        "ok": "874",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2824",
        "ok": "2824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4614",
        "ok": "4614",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5806,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1887,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2307,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.74",
        "ok": "78.74",
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
