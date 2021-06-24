var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1600000",
        "ok": "1599572",
        "ko": "428"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "11192"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "60024",
        "ko": "60021"
    },
    "meanResponseTime": {
        "total": "2967",
        "ok": "2960",
        "ko": "27222"
    },
    "standardDeviation": {
        "total": "2209",
        "ok": "2143",
        "ko": "22379"
    },
    "percentiles1": {
        "total": "2638",
        "ok": "2639",
        "ko": "12598"
    },
    "percentiles2": {
        "total": "3590",
        "ok": "3590",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "6009",
        "ok": "6004",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "8146",
        "ok": "8082",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18746,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106184,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1474642,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 428,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3940.887",
        "ok": "3939.833",
        "ko": "1.054"
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
        "total": "1600000",
        "ok": "1599572",
        "ko": "428"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "11192"
    },
    "maxResponseTime": {
        "total": "60024",
        "ok": "60024",
        "ko": "60021"
    },
    "meanResponseTime": {
        "total": "2967",
        "ok": "2960",
        "ko": "27222"
    },
    "standardDeviation": {
        "total": "2209",
        "ok": "2143",
        "ko": "22379"
    },
    "percentiles1": {
        "total": "2638",
        "ok": "2639",
        "ko": "12598"
    },
    "percentiles2": {
        "total": "3590",
        "ok": "3590",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "6009",
        "ok": "6004",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "8149",
        "ok": "8084",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18746,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 106184,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1474642,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 428,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3940.887",
        "ok": "3939.833",
        "ko": "1.054"
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
