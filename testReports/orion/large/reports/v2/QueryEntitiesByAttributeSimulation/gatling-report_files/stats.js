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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15094",
        "ok": "15094",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1658",
        "ok": "1658",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1435",
        "ok": "1435",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1806",
        "ok": "1806",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3496",
        "ok": "3496",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10005",
        "ok": "10006",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7272,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1045103,
    "percentage": 58
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 747625,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18181.818",
        "ok": "18181.818",
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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15094",
        "ok": "15094",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1658",
        "ok": "1658",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1435",
        "ok": "1435",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1806",
        "ok": "1806",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3495",
        "ok": "3497",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10006",
        "ok": "10006",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7272,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1045103,
    "percentage": 58
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 747625,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18181.818",
        "ok": "18181.818",
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
