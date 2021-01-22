var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4802",
        "ok": "4802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1574",
        "ok": "1574",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "920",
        "ok": "920",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1393",
        "ok": "1393",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2103",
        "ok": "2103",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3307",
        "ok": "3307",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4493",
        "ok": "4493",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5754,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7022,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17224,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.341",
        "ok": "146.341",
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
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4802",
        "ok": "4802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1574",
        "ok": "1574",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "920",
        "ok": "920",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1393",
        "ok": "1393",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2103",
        "ok": "2103",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3307",
        "ok": "3307",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4493",
        "ok": "4493",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5754,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7022,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17224,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "146.341",
        "ok": "146.341",
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
