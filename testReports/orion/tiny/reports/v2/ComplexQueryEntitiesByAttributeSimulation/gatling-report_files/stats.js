var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250000",
        "ok": "250000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "522",
        "ok": "522",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9699",
        "ok": "9699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1937",
        "ok": "1937",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1903",
        "ok": "1904",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2278",
        "ok": "2278",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3207",
        "ok": "3207",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4147",
        "ok": "4275",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1286,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 35638,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 213076,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1082.251",
        "ok": "1082.251",
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
        "total": "250000",
        "ok": "250000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "522",
        "ok": "522",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9699",
        "ok": "9699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1937",
        "ok": "1937",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1903",
        "ok": "1903",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2280",
        "ok": "2280",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3207",
        "ok": "3207",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4322",
        "ok": "3952",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1286,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 35638,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 213076,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1082.251",
        "ok": "1082.251",
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
