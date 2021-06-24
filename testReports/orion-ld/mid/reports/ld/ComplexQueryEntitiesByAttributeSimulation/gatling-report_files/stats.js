var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000000",
        "ok": "1999983",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "60011",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "1668",
        "ok": "1668",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "1383",
        "ok": "1373",
        "ko": "3"
    },
    "percentiles1": {
        "total": "1494",
        "ok": "1495",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "2003",
        "ok": "2003",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "3817",
        "ok": "3818",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "7388",
        "ok": "7069",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 499856,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259331,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1240796,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7905.138",
        "ok": "7905.071",
        "ko": "0.067"
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
        "ok": "1999983",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "60011",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "1668",
        "ok": "1668",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "1383",
        "ok": "1373",
        "ko": "3"
    },
    "percentiles1": {
        "total": "1495",
        "ok": "1494",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "2004",
        "ok": "2004",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "3817",
        "ok": "3818",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "7183",
        "ok": "7094",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 499856,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259331,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1240796,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7905.138",
        "ok": "7905.071",
        "ko": "0.067"
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
