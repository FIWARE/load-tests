var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "49598763",
        "ok": "49598763",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8504",
        "ok": "8504",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1404",
        "ok": "1404",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1239",
        "ok": "1239",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1680",
        "ok": "1680",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3057",
        "ok": "3058",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3809",
        "ok": "3809",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8173343,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15548824,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25876596,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6900.217",
        "ok": "6900.217",
        "ko": "-"
    }
},
contents: {
"req_create-entity-a3620": {
        type: "REQUEST",
        name: "create entity",
path: "create entity",
pathFormatted: "req_create-entity-a3620",
stats: {
    "name": "create entity",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4113",
        "ok": "4113",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8504",
        "ok": "8504",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5845",
        "ok": "5845",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5811",
        "ok": "5811",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6485",
        "ok": "6485",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7183",
        "ok": "7183",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7596",
        "ok": "7596",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.478",
        "ok": "3.478",
        "ko": "-"
    }
}
    },"req_update-temperat-6d80d": {
        type: "REQUEST",
        name: "update temperature",
path: "update temperature",
pathFormatted: "req_update-temperat-6d80d",
stats: {
    "name": "update temperature",
    "numberOfRequests": {
        "total": "49573763",
        "ok": "49573763",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6525",
        "ok": "6525",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1402",
        "ok": "1402",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "739",
        "ok": "739",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1239",
        "ok": "1239",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1679",
        "ok": "1679",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3047",
        "ok": "3047",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3787",
        "ok": "3787",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8173343,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15548824,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25851596,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6896.739",
        "ok": "6896.739",
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
