var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "96012000",
        "ok": "95827977",
        "ko": "184023"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "5090",
        "ok": "5090",
        "ko": "4088"
    },
    "meanResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "240"
    },
    "standardDeviation": {
        "total": "321",
        "ok": "321",
        "ko": "308"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "64"
    },
    "percentiles2": {
        "total": "503",
        "ok": "504",
        "ko": "382"
    },
    "percentiles3": {
        "total": "916",
        "ok": "916",
        "ko": "903"
    },
    "percentiles4": {
        "total": "1046",
        "ok": "1045",
        "ko": "1063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 85538502,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10204195,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 85280,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 184023,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7099.904",
        "ok": "7086.296",
        "ko": "13.608"
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
        "ok": "11977",
        "ko": "23"
    },
    "minResponseTime": {
        "total": "2307",
        "ok": "2307",
        "ko": "3516"
    },
    "maxResponseTime": {
        "total": "5090",
        "ok": "5090",
        "ko": "4088"
    },
    "meanResponseTime": {
        "total": "3562",
        "ok": "3562",
        "ko": "3820"
    },
    "standardDeviation": {
        "total": "586",
        "ok": "587",
        "ko": "150"
    },
    "percentiles1": {
        "total": "3501",
        "ok": "3500",
        "ko": "3819"
    },
    "percentiles2": {
        "total": "4005",
        "ok": "4006",
        "ko": "3903"
    },
    "percentiles3": {
        "total": "4510",
        "ok": "4510",
        "ko": "4002"
    },
    "percentiles4": {
        "total": "4809",
        "ok": "4809",
        "ko": "4069"
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
    "count": 11977,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 23,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.887",
        "ok": "0.886",
        "ko": "0.002"
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
        "total": "96000000",
        "ok": "95816000",
        "ko": "184000"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1718",
        "ok": "1718",
        "ko": "1451"
    },
    "meanResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "239"
    },
    "standardDeviation": {
        "total": "319",
        "ok": "319",
        "ko": "305"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "64"
    },
    "percentiles2": {
        "total": "503",
        "ok": "503",
        "ko": "382"
    },
    "percentiles3": {
        "total": "915",
        "ok": "915",
        "ko": "902"
    },
    "percentiles4": {
        "total": "1045",
        "ok": "1045",
        "ko": "1062"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 85538502,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10204195,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73303,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 184000,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7099.016",
        "ok": "7085.41",
        "ko": "13.606"
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
