var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "164000",
        "ok": "164000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5197",
        "ok": "5197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "percentiles1": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1729",
        "ok": "1729",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4300",
        "ok": "4300",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 130879,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10387,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22734,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1426.087",
        "ok": "1426.087",
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
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2497",
        "ok": "2497",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5197",
        "ok": "5197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4078",
        "ok": "4078",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4200",
        "ok": "4200",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4415",
        "ok": "4415",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4802",
        "ok": "4802",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4999",
        "ok": "4999",
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
    "count": 4000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.783",
        "ok": "34.783",
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
        "total": "160000",
        "ok": "160000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2246",
        "ok": "2246",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "435",
        "ok": "435",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "481",
        "ok": "481",
        "ko": "-"
    },
    "percentiles1": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "percentiles2": {
        "total": "627",
        "ok": "628",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1598",
        "ok": "1598",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1806",
        "ok": "1806",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 130879,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10387,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18734,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1391.304",
        "ok": "1391.304",
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
