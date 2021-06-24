var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "450000",
        "ok": "450000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12480",
        "ok": "12480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1881",
        "ok": "1881",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1402",
        "ok": "1402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2305",
        "ok": "2305",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4495",
        "ok": "4490",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6378",
        "ok": "6654",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17621,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 115957,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 316422,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1844.262",
        "ok": "1844.262",
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
        "total": "450000",
        "ok": "450000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12480",
        "ok": "12480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1881",
        "ok": "1881",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1402",
        "ok": "1402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2305",
        "ok": "2305",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4490",
        "ok": "4493",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6607",
        "ok": "6556",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17621,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 115957,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 316422,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1844.262",
        "ok": "1844.262",
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
