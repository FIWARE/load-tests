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
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8097",
        "ok": "8097",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "percentiles1": {
        "total": "908",
        "ok": "907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1414",
        "ok": "1417",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2114",
        "ok": "2113",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4022",
        "ok": "4130",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98033,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69152,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82815,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1785.714",
        "ok": "1785.714",
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
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8097",
        "ok": "8097",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1156",
        "ok": "1156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "percentiles1": {
        "total": "908",
        "ok": "907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1416",
        "ok": "1416",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2114",
        "ok": "2115",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4368",
        "ok": "4309",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98033,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69152,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82815,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1785.714",
        "ok": "1785.714",
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
