var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000000",
        "ok": "2000000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12393",
        "ok": "12393",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1723",
        "ok": "1723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1405",
        "ok": "1405",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1507",
        "ok": "1508",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2042",
        "ok": "2040",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4220",
        "ok": "4218",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8106",
        "ok": "8133",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 499682,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256524,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1243794,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7936.508",
        "ok": "7936.508",
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
        "total": "2000000",
        "ok": "2000000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12393",
        "ok": "12393",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1723",
        "ok": "1723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1405",
        "ok": "1405",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1507",
        "ok": "1507",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2042",
        "ok": "2039",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4218",
        "ok": "4217",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8103",
        "ok": "8104",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 499682,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 256524,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1243794,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7936.508",
        "ok": "7936.508",
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
