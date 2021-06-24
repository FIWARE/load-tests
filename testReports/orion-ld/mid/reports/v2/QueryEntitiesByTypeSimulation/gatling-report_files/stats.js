var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000000",
        "ok": "1990768",
        "ko": "9232"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60075",
        "ok": "60034",
        "ko": "60075"
    },
    "meanResponseTime": {
        "total": "2520",
        "ok": "2467",
        "ko": "13870"
    },
    "standardDeviation": {
        "total": "2597",
        "ok": "2273",
        "ko": "14718"
    },
    "percentiles1": {
        "total": "2404",
        "ok": "2400",
        "ko": "10093"
    },
    "percentiles2": {
        "total": "2971",
        "ok": "2959",
        "ko": "15715"
    },
    "percentiles3": {
        "total": "4639",
        "ok": "4540",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "8418",
        "ok": "8143",
        "ko": "60040"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 207995,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 86778,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1695995,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 9232,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5235.602",
        "ok": "5211.435",
        "ko": "24.168"
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
        "total": "2000000",
        "ok": "1990768",
        "ko": "9232"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60075",
        "ok": "60034",
        "ko": "60075"
    },
    "meanResponseTime": {
        "total": "2520",
        "ok": "2467",
        "ko": "13870"
    },
    "standardDeviation": {
        "total": "2597",
        "ok": "2273",
        "ko": "14718"
    },
    "percentiles1": {
        "total": "2404",
        "ok": "2400",
        "ko": "10093"
    },
    "percentiles2": {
        "total": "2972",
        "ok": "2959",
        "ko": "15715"
    },
    "percentiles3": {
        "total": "4638",
        "ok": "4540",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "8427",
        "ok": "8136",
        "ko": "60040"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 207995,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 86778,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1695995,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 9232,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5235.602",
        "ok": "5211.435",
        "ko": "24.168"
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
