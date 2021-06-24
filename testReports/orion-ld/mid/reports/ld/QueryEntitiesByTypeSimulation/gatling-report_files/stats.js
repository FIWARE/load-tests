var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1600000",
        "ok": "1599779",
        "ko": "221"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60018",
        "ok": "60003",
        "ko": "60018"
    },
    "meanResponseTime": {
        "total": "1043",
        "ok": "1035",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1066",
        "ok": "810",
        "ko": "2"
    },
    "percentiles1": {
        "total": "814",
        "ok": "814",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1231",
        "ok": "1231",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "2092",
        "ok": "2091",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "4206",
        "ok": "3959",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 768079,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 394888,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 436812,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 221,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10126.582",
        "ok": "10125.184",
        "ko": "1.399"
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
        "ok": "1599779",
        "ko": "221"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60018",
        "ok": "60003",
        "ko": "60018"
    },
    "meanResponseTime": {
        "total": "1043",
        "ok": "1035",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1066",
        "ok": "810",
        "ko": "2"
    },
    "percentiles1": {
        "total": "814",
        "ok": "814",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1231",
        "ok": "1230",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "2092",
        "ok": "2091",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "4234",
        "ok": "4030",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 768079,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 394888,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 436812,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 221,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10126.582",
        "ok": "10125.184",
        "ko": "1.399"
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
