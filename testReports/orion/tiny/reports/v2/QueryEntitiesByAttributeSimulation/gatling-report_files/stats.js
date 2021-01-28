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
        "total": "409",
        "ok": "409",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7597",
        "ok": "7597",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1652",
        "ok": "1652",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "922",
        "ok": "922",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1338",
        "ok": "1338",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1900",
        "ok": "1900",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4003",
        "ok": "4003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4391",
        "ok": "4391",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14611,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65336,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 170053,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1126.126",
        "ok": "1126.126",
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
        "total": "409",
        "ok": "409",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7597",
        "ok": "7597",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1652",
        "ok": "1652",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "922",
        "ok": "922",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1338",
        "ok": "1338",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1900",
        "ok": "1900",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4003",
        "ok": "4003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4393",
        "ok": "4391",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14611,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65336,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 170053,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1126.126",
        "ok": "1126.126",
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
