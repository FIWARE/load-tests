var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000000",
        "ok": "1988813",
        "ko": "11187"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "60079",
        "ok": "59994",
        "ko": "60079"
    },
    "meanResponseTime": {
        "total": "2682",
        "ok": "2621",
        "ko": "13477"
    },
    "standardDeviation": {
        "total": "2605",
        "ok": "2257",
        "ko": "13807"
    },
    "percentiles1": {
        "total": "2112",
        "ok": "2101",
        "ko": "11597"
    },
    "percentiles2": {
        "total": "3607",
        "ok": "3599",
        "ko": "14833"
    },
    "percentiles3": {
        "total": "6511",
        "ok": "6368",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "10693",
        "ok": "10001",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 314857,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 204369,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1469587,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 11187,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4750.594",
        "ok": "4724.021",
        "ko": "26.572"
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
        "total": "2000000",
        "ok": "1988813",
        "ko": "11187"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "60079",
        "ok": "59994",
        "ko": "60079"
    },
    "meanResponseTime": {
        "total": "2682",
        "ok": "2621",
        "ko": "13477"
    },
    "standardDeviation": {
        "total": "2605",
        "ok": "2257",
        "ko": "13807"
    },
    "percentiles1": {
        "total": "2112",
        "ok": "2100",
        "ko": "11597"
    },
    "percentiles2": {
        "total": "3607",
        "ok": "3599",
        "ko": "14833"
    },
    "percentiles3": {
        "total": "6511",
        "ok": "6367",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "10695",
        "ok": "10001",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 314857,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 204369,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1469587,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 11187,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4750.594",
        "ok": "4724.021",
        "ko": "26.572"
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
