"use strict";
/*
TODO:
turn button into text input for zipcode and add evnt handler
complete card style then use on all forecast cards
incorporate map
use flyto anim for new zipcode
add comments
remove superfluous comments and garbage
organize and consolidate css file
review and remove superfluous html
 */
(function () {
    let wx;
    let newZipCode = "99762";// 96707 75238
    let zipCode = "";
    let newLocation = {"lat": 32.869, "lon": -96.703};
    let location = "";
    let newLocName = "Dallas";
    let locName = "";

    function getLocalWxData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        console.log(url);
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            wx = data;  // assign file contents to global variable
            // console.log("weather: ", wx)
            lookUpLocationNameByLatLon(location.lat, location.lon);
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting local conditions! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function lookUpLocationNameByLatLon(lat, lon) {
        let url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) { // now that we have lat lon, local wx, and local name from zip, update page
//            console.log("name lookup:", data);
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
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local wx
            location = {"lat": data.lat, "lon": data.lon};
            getLocalWxData();
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with zip lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function populateDisplay() {
        $('#map-area').html(`<div>The map will go here, centered on ${JSON.stringify(location)}</div>`);
        let imgURL = `http://openweathermap.org/img/wn/${wx.weather[0].icon}@4x.png`;
        $('#current-img').attr("src", imgURL);
        $('#current-banner').html("Current Conditions for " + locName);
        $('#current-date').html(`<b>${convertDate(wx.dt)}</b>`);
        $('#current-desc').html(`<em>${wx.weather[0].description}</em>`);
        $('#current-temps').html(`Temp: <em>${wx.main.temp.toFixed(0)} F</em><br/>Heat index: <em>${wx.main.feels_like.toFixed(0)} F</em><br/>Low: <em>${wx.main.temp_min.toFixed(0)} F</em><br/>High: <em>${wx.main.temp_max.toFixed(0)} F</em>`);
        $('#current-humid').html(`Humidity: <em>${wx.main.humidity}%</em>`);
        $('#current-wind').html(`Winds:<br/><em>${formatDirection(wx.wind.deg)} at ${(wx.wind.speed).toFixed(0)} knots</em>`);
        $('#current-baro').html(`Pressure:<br/>hPa: <em>${wx.main.pressure}<br/>Inches Hg: ${(wx.main.pressure / 33.864).toFixed(2)}</em>`);
    }

    function convertDate(epoch) {
        return new Date(epoch * 1000).toLocaleString();
    }

    function formatDirection(dir) {
        let dirStr = "";
        if ((dir >= 0 && dir <= 22) || (dir >= 337)) {
            dirStr = "N"
        }
        if (dir >= 23 && dir <= 66) {
            dirStr = "NE"
        }
        if (dir >= 67 && dir <= 112) {
            dirStr = "E"
        }
        if (dir >= 113 && dir <= 157) {
            dirStr = "SE"
        }
        if (dir >= 158 && dir <= 202) {
            dirStr = "S"
        }
        if (dir >= 203 && dir <= 247) {
            dirStr = "SW"
        }
        if (dir >= 248 && dir <= 292) {
            dirStr = "W"
        }
        if (dir >= 293 && dir <= 336) {
            dirStr = "NW"
        }
        return dirStr;
    }

    lookUpLatLongByZip(newZipCode);  // start with zip code
}());