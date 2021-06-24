var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3232000",
        "ok": "3232000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14909",
        "ok": "14909",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "990",
        "ok": "990",
        "ko": "-"
    },
    "percentiles1": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles2": {
        "total": "131",
        "ok": "145",
        "ko": "-"
    },
    "percentiles3": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4223",
        "ok": "3707",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3170428,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12937,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 48635,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17010.526",
        "ok": "17010.526",
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
        "total": "32000",
        "ok": "32000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6802",
        "ok": "6802",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14909",
        "ok": "14909",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9878",
        "ok": "9878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1575",
        "ok": "1575",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9700",
        "ok": "9700",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10901",
        "ok": "10901",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12702",
        "ok": "12702",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13798",
        "ok": "13798",
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
    "count": 32000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "168.421",
        "ok": "168.421",
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
        "total": "3200000",
        "ok": "3200000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4309",
        "ok": "4309",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles2": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles3": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "percentiles4": {
        "total": "791",
        "ok": "791",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3170428,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12937,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16635,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16842.105",
        "ok": "16842.105",
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
