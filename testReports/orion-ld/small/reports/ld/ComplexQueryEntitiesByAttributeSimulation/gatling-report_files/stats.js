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
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12788",
        "ok": "12788",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1317",
        "ok": "1317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1282",
        "ok": "1282",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1978",
        "ok": "1979",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3814",
        "ok": "3813",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6349",
        "ok": "6344",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 61771,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 223944,
    "percentage": 37
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 314285,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2643.172",
        "ok": "2643.172",
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
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12788",
        "ok": "12788",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1317",
        "ok": "1317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1282",
        "ok": "1281",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1978",
        "ok": "1978",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3813",
        "ok": "3814",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7524",
        "ok": "6344",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 61771,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 223944,
    "percentage": 37
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 314285,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2643.172",
        "ok": "2643.172",
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
