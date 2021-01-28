var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350000",
        "ok": "350000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9698",
        "ok": "9698",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1518",
        "ok": "1518",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1474",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1674",
        "ok": "1675",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3510",
        "ok": "3495",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6266",
        "ok": "6379",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 108036,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 35771,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 206193,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1598.174",
        "ok": "1598.174",
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
        "total": "350000",
        "ok": "350000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9698",
        "ok": "9698",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1518",
        "ok": "1518",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1472",
        "ok": "1474",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1675",
        "ok": "1677",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3517",
        "ok": "3532",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6423",
        "ok": "6377",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 108036,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 35771,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 206193,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1598.174",
        "ok": "1598.174",
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
