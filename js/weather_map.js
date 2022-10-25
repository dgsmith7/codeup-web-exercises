"use strict";

(function () {
    let wx;
    let location = {"lat": 32.869, "lon": -96.703};

    function getLocalWxData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${OPEN_WX_MAP_KEY}`
        console.log(url);
        $.get(url).done(function (data) {
            wx = data;  // assign file contents to global variable
            $('#map-area').html(`<p>${JSON.stringify(wx)}</p>`);
            console.log(wx);
        }).fail(function (jqXhr, status, error) {
            alert("There was an error! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    getLocalWxData();

}());