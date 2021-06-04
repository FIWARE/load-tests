var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "73800",
        "ok": "73800",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5297",
        "ok": "5297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "percentiles1": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles2": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1085",
        "ok": "1085",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4202",
        "ok": "4202",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 65268,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6596,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1936,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "911.111",
        "ok": "911.111",
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
        "total": "1800",
        "ok": "1800",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2703",
        "ok": "2703",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5297",
        "ok": "5297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4006",
        "ok": "4006",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "635",
        "ok": "635",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4090",
        "ok": "4090",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4495",
        "ok": "4495",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5103",
        "ok": "5103",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5289",
        "ok": "5289",
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
    "count": 1800,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
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
        "total": "72000",
        "ok": "72000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1512",
        "ok": "1512",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "percentiles1": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1155",
        "ok": "1156",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 65268,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6596,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 136,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "888.889",
        "ok": "888.889",
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
