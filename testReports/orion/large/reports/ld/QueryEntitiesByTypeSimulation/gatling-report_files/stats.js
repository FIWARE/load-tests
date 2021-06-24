var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1800000",
        "ok": "1799994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "60000",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "1398",
        "ok": "1397",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1409",
        "ok": "1405",
        "ko": "1"
    },
    "percentiles1": {
        "total": "982",
        "ok": "982",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "1593",
        "ok": "1593",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "3408",
        "ok": "3407",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "9424",
        "ok": "9421",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 539907,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 637390,
    "percentage": 35
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 622697,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11320.755",
        "ok": "11320.717",
        "ko": "0.038"
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
        "total": "1800000",
        "ok": "1799994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "60000",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "1398",
        "ok": "1397",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1409",
        "ok": "1405",
        "ko": "1"
    },
    "percentiles1": {
        "total": "981",
        "ok": "982",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "1593",
        "ok": "1593",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "3408",
        "ok": "3408",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "9423",
        "ok": "9433",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 539907,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 637390,
    "percentage": 35
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 622697,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11320.755",
        "ok": "11320.717",
        "ko": "0.038"
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
