"use strict";

(function () {
    let wx;
    let newZipCode = "75238";
    let zipCode = "";
    let newLocation = {"lat": 32.869, "lon": -96.703};
    let location = "";
    let newLocName = "Dallas";
    let locName = "";

    function getLocalWxData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        console.log(url);
        $.get(url).done(function (data) {
            wx = data;  // assign file contents to global variable
            console.log("weather: ", wx)
            lookUpLocationNameByLatLon(location.lat, location.lon);
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting local conditions! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function lookUpLocationNameByLatLon(lat, lon) {
        let url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {
            console.log("name lookup:", data);
            locName = data[0].name;
            populateDisplay();
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with name lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });

    }

    function lookUpLatLongByZip(zip) {
        let url = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {
            console.log("zip lookup:", data);
            location = {"lat": data.lat, "lon": data.lon};
            getLocalWxData();
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with zip lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });

    }

    function populateDisplay() {

        $('#map-area').html(`<p>${JSON.stringify(wx)}</p>`);
        let imgURL = `http://openweathermap.org/img/wn/${wx.weather[0].icon}.png`;
        $('#current-img').attr("src", imgURL);
        $('#current-banner').html("Current Conditions for " + locName);
        $('#current-date').html(`${convertDate(wx.dt)}`);
        $('#current-desc').html(`${wx.weather[0].description}`);
        $('#current-temps').html(`Temp: ${wx.main.temp.toFixed(0)}<br/>Low: ${wx.main.temp_min.toFixed(0)} High: ${wx.main.temp_max.toFixed(0)}<br/>Heat index: ${wx.main.feels_like.toFixed(0)}`);
        $('#current-humid').html(`Humidity: ${wx.main.humidity}%`);
        $('#current-wind').html(`Winds:<br/>${wx.wind.deg} degrees at ${wx.wind.speed} knots`);
        $('#current-baro').html(`Pressure:<br/>HectoPascals: ${wx.main.pressure}<br/>Inches of Hg: ${(wx.main.pressure / 33.864).toFixed(2)}`);
        // console.log(wx);

    }

    function convertDate(epoch) {
        return new Date(epoch * 1000).toLocaleString();
    }

    lookUpLatLongByZip(newZipCode);
}());