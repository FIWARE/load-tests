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
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8185",
        "ok": "8185",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1307",
        "ok": "1307",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1211",
        "ok": "1212",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2185",
        "ok": "2186",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3651",
        "ok": "4094",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 37612,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 84058,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 128330,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1602.564",
        "ok": "1602.564",
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
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8185",
        "ok": "8185",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1307",
        "ok": "1307",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1212",
        "ok": "1211",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2186",
        "ok": "2187",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4351",
        "ok": "4046",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 37612,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 84058,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 128330,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1602.564",
        "ok": "1602.564",
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
