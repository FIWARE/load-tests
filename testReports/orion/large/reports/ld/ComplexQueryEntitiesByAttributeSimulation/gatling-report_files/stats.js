var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1800000",
        "ok": "1800000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12594",
        "ok": "12594",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1468",
        "ok": "1468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1456",
        "ok": "1456",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1690",
        "ok": "1687",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3619",
        "ok": "3616",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9690",
        "ok": "9650",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 543366,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 497369,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 759265,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15789.474",
        "ok": "15789.474",
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
        "total": "1800000",
        "ok": "1800000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12594",
        "ok": "12594",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1468",
        "ok": "1468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1456",
        "ok": "1456",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1686",
        "ok": "1691",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3618",
        "ok": "3618",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9659",
        "ok": "9664",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 543366,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 497369,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 759265,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15789.474",
        "ok": "15789.474",
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
