var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500000",
        "ok": "2462823",
        "ko": "37177"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "71883",
        "ok": "60000",
        "ko": "71883"
    },
    "meanResponseTime": {
        "total": "3589",
        "ok": "3426",
        "ko": "14436"
    },
    "standardDeviation": {
        "total": "3708",
        "ok": "3026",
        "ko": "14095"
    },
    "percentiles1": {
        "total": "2952",
        "ok": "2919",
        "ko": "10297"
    },
    "percentiles2": {
        "total": "4486",
        "ok": "4435",
        "ko": "15120"
    },
    "percentiles3": {
        "total": "7686",
        "ok": "6949",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "12708",
        "ok": "11345",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 166549,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 135456,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2160818,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 37177,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5274.262",
        "ok": "5195.829",
        "ko": "78.432"
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
        "total": "2500000",
        "ok": "2462823",
        "ko": "37177"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "71883",
        "ok": "60000",
        "ko": "71883"
    },
    "meanResponseTime": {
        "total": "3589",
        "ok": "3426",
        "ko": "14436"
    },
    "standardDeviation": {
        "total": "3708",
        "ok": "3026",
        "ko": "14095"
    },
    "percentiles1": {
        "total": "2952",
        "ok": "2919",
        "ko": "10297"
    },
    "percentiles2": {
        "total": "4487",
        "ok": "4435",
        "ko": "15120"
    },
    "percentiles3": {
        "total": "7686",
        "ok": "6949",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "12718",
        "ok": "11344",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 166549,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 135456,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2160818,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 37177,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5274.262",
        "ok": "5195.829",
        "ko": "78.432"
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
