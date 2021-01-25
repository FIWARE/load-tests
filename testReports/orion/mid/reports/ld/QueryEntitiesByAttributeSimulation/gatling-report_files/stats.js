var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600000",
        "ok": "600000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13700",
        "ok": "13700",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1685",
        "ok": "1685",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1381",
        "ok": "1381",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1893",
        "ok": "1892",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3556",
        "ok": "3556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6348",
        "ok": "7310",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51991,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 190261,
    "percentage": 32
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 357748,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2816.901",
        "ok": "2816.901",
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
        "total": "600000",
        "ok": "600000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13700",
        "ok": "13700",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1685",
        "ok": "1685",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1318",
        "ok": "1318",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1382",
        "ok": "1381",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1893",
        "ok": "1893",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3564",
        "ok": "3562",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7310",
        "ok": "8826",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51991,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 190261,
    "percentage": 32
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 357748,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2816.901",
        "ok": "2816.901",
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
