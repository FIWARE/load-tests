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
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7898",
        "ok": "7898",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1267",
        "ok": "1266",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1805",
        "ok": "1806",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4335",
        "ok": "4853",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 43212,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 120889,
    "percentage": 48
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 85899,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1953.125",
        "ok": "1953.125",
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
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7898",
        "ok": "7898",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1266",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1805",
        "ok": "1805",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4766",
        "ok": "4068",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 43212,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 120889,
    "percentage": 48
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 85899,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1953.125",
        "ok": "1953.125",
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
