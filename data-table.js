$(document).ready(function () {

    $.ajax({
        url: "https://data.covid19india.org/v4/min/data.min.json", //API URL
        type: "GET", // GET OR POST,
        beforeSend: function () {
            // This function calls before ajax API Hits
        },
        success: function (res, status) {
            var response = JSON.parse(JSON.stringify(res));
            console.log(Object.keys(response).length, )
            Object.keys(response).map((e) => {
                // console.log("u",response[e]["total"]["recovered"])
                var trHtml = ""
                // console.log(e);
                trHtml += "<tr><td>" + e + "</td><td>" + response[e]["total"]["confirmed"] + "</td><td>" + response[e]["total"]["deceased"]+"</td><td>" +response[e]["total"]["recovered"] + "</td><td>" + response[e]["total"]["vaccinated1"] + "</td><td>" + response[e]["total"]["vaccinated2"] + "</td></tr>"
                
                $("#records_table").append(trHtml);
            })
            
        },
        error: function (error, status) {
            console.log(error)
            // IF our API get any error
            // this function gets called.

        },
    });

});
