var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250000",
        "ok": "249988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "477",
        "ok": "477",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59951",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "1721",
        "ok": "1718",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1644",
        "ok": "1594",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1627",
        "ok": "1627",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1848",
        "ok": "1846",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "2755",
        "ok": "2754",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "5304",
        "ok": "5299",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10394,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34031,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 205563,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1111.111",
        "ok": "1111.058",
        "ko": "0.053"
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
        "ok": "249988",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "477",
        "ok": "477",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59951",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "1721",
        "ok": "1718",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1644",
        "ok": "1594",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1627",
        "ok": "1627",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "1839",
        "ok": "1848",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "2754",
        "ok": "2753",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "5305",
        "ok": "5302",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10394,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34031,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 205563,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1111.111",
        "ok": "1111.058",
        "ko": "0.053"
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
