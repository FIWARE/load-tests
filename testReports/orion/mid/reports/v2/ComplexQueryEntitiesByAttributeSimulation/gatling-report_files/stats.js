var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000000",
        "ok": "1999360",
        "ko": "640"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60079",
        "ok": "60075",
        "ko": "60079"
    },
    "meanResponseTime": {
        "total": "2982",
        "ok": "2964",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "2520",
        "ok": "2305",
        "ko": "11"
    },
    "percentiles1": {
        "total": "2360",
        "ok": "2359",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "3501",
        "ok": "3501",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "7155",
        "ok": "7142",
        "ko": "60021"
    },
    "percentiles4": {
        "total": "9097",
        "ok": "9085",
        "ko": "60065"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38362,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 84923,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1876075,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 640,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4246.285",
        "ok": "4244.926",
        "ko": "1.359"
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
        "ok": "1999360",
        "ko": "640"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60079",
        "ok": "60075",
        "ko": "60079"
    },
    "meanResponseTime": {
        "total": "2982",
        "ok": "2964",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "2520",
        "ok": "2305",
        "ko": "11"
    },
    "percentiles1": {
        "total": "2360",
        "ok": "2358",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "3501",
        "ok": "3500",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "7155",
        "ok": "7143",
        "ko": "60021"
    },
    "percentiles4": {
        "total": "9097",
        "ok": "9085",
        "ko": "60065"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38362,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 84923,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1876075,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 640,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4246.285",
        "ok": "4244.926",
        "ko": "1.359"
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
