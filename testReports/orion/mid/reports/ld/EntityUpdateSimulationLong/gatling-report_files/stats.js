var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72012000",
        "ok": "72012000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4993",
        "ok": "4993",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles2": {
        "total": "431",
        "ok": "431",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1031",
        "ok": "1031",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64550492,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4536234,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2925274,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6176.516",
        "ok": "6176.516",
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
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1898",
        "ok": "1898",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4993",
        "ok": "4993",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3606",
        "ok": "3606",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "545",
        "ok": "545",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3604",
        "ok": "3603",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3996",
        "ok": "3996",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4489",
        "ok": "4489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4706",
        "ok": "4706",
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
    "count": 12000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.029",
        "ok": "1.029",
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
        "total": "72000000",
        "ok": "72000000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2581",
        "ok": "2581",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "367",
        "ok": "367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles2": {
        "total": "431",
        "ok": "431",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1030",
        "ok": "1030",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64550492,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4536234,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2913274,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6175.487",
        "ok": "6175.487",
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
