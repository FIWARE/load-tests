var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1600000",
        "ok": "1599988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60010",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "1935",
        "ok": "1935",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1260",
        "ok": "1249",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1603",
        "ok": "1603",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "2373",
        "ok": "2374",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "3882",
        "ok": "3881",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "5012",
        "ok": "5010",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45342,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 269290,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1285356,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5498.282",
        "ok": "5498.241",
        "ko": "0.041"
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
        "ok": "1599988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60010",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "1935",
        "ok": "1935",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1260",
        "ok": "1249",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1603",
        "ok": "1603",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "2373",
        "ok": "2374",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "3882",
        "ok": "3881",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "5011",
        "ok": "5010",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45342,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 269290,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1285356,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5498.282",
        "ok": "5498.241",
        "ko": "0.041"
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
