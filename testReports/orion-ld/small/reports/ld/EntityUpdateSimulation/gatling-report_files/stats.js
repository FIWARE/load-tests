var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "648000",
        "ok": "648000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9551",
        "ok": "9551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1049",
        "ok": "1049",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles1": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2207",
        "ok": "2209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4696",
        "ok": "4696",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 180470,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 239444,
    "percentage": 37
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 228086,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2986.175",
        "ok": "2986.175",
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
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2796",
        "ok": "2796",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9551",
        "ok": "9551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5535",
        "ok": "5535",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5604",
        "ok": "5604",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6110",
        "ok": "6110",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6988",
        "ok": "6988",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7394",
        "ok": "7394",
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
    "count": 8000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36.866",
        "ok": "36.866",
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
        "total": "640000",
        "ok": "640000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "993",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "538",
        "ok": "538",
        "ko": "-"
    },
    "percentiles1": {
        "total": "985",
        "ok": "985",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1305",
        "ok": "1305",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1986",
        "ok": "1986",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2302",
        "ok": "2302",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 180470,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 239444,
    "percentage": 37
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 220086,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2949.309",
        "ok": "2949.309",
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
