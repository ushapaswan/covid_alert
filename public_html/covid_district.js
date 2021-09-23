$(document).ready(function () {

    $.ajax({
        url: "https://data.covid19india.org/v4/min/data.min.json", //API URL
        type: "GET", // GET OR POST,
        beforeSend: function () {
            // This function calls before ajax API Hits
        },
        success: function (res, status) {
            var response = JSON.parse(JSON.stringify(res));
            // console.log((response) )
            Object.entries(response).map(([keys,value]) => {
                // console.log("usha",keys,value)
                Object.entries(value.districts).map(([k,b])=>{
                    // console.log("s",b["total"]["confirmed"])
                    var trHtml="";
                    trHtml += "<tr><td>" + k + "</td><td>" + b["total"]["confirmed"] + "</td><td>" + b["total"]["deceased"] + "</td><td>" + b["total"]["vaccinated1"] + "</td><td>" + b["total"]["vaccinated2"] + "</td></tr>"

                    $("#records_table").append(trHtml);  
                        }) 
            })  
        },
        error: function (error, status) {
            console.log(error)
            // IF our API get any error
            // this function gets called.

        },
    });




});