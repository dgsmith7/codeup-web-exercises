"use strict";

(function () {
    let wx;
    let newZipCode = "75238";
    let location = "";
    let locName = "";
    let locData = "";
    let fileMap = new Map();
    let timeShift;
    let fiveDay;
    mapboxgl.accessToken = MAPBOX_KEY;
    let map;
    let geocoder;
    let gcFlag = false;
    let marker;
    let dragFlag = false;
    let popup;
    let countries = new Map();
    let timestamp;

    function getFileMap() { // hash map for icon filenames
        let url = `./data/icon-map.json`
        $.ajax(url).done(function (data) { // once we have lat lon from zip code get the local area name
            data.forEach((element) => {  // map the icon names to file names
                fileMap.set(element.code, element.file);
            });
            getCountryCodes();  // get country codes
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with the file map! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function getCountryCodes() {// hash map for country codes
        let url = `./data/country-codes.json`
        $.ajax(url).done(function (data) { // once we have lat lon from zip code get the local area name
            data.forEach((element) => {  // map the icon names to file names
                countries.set(element.code, element.name);
            });
            lookUpLatLongByZip(newZipCode);  // then start with zip code
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with the file map! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function lookUpLatLongByZip(zip) {
        let url = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local wx
            location = {"lat": data.lat, "lon": data.lon};  // set the location for the api call
            getLocalWxData();  // do the api call from the lat long
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with zip lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function getLocalWxData() {  // use ajax to get data from api
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            wx = data;  // assign file contents to global variable
            lookUpLocationNameByLatLon(location.lat, location.lon);  // now get local name
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting local conditions! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function lookUpLocationNameByLatLon(lat, lon) {
        let url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) { // now that we have lat lon, local wx, and local name from zip, update page
            locData = data;
            locName = data[0].name;
            if (data[0].state !== undefined) {
                locName += ", " + data[0].state;
            }
            if (data[0].country !== undefined) {
                locName += ", " + countries.get(data[0].country);
            }
            getFiveDayData(); // get the forecast data
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with name lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function getFiveDayData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            fiveDay = data;  // assign file contents to global variable
            populateDisplay(); // now we have the data, fill in the page with the info
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting forecast! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function populateDisplay() {
        if (!map) {
            createMap();
        }
        console.log(location);
        console.log(locData);
        console.log(locName);
        console.log(wx);
        console.log(fiveDay);
        let iconDescObj;
        let tempObj;
        let windObj;
        let imgURL = `./assets/images/weather/${fileMap.get(wx.weather[0].icon)}`;
        setDayNightBG();
        $('#current-img').attr("src", imgURL);
        $('#current-banner').html("Current Conditions for " + locName);
        $('#current-date').html(`<b>${convertDate(wx.dt)}</b></br>Time adjusted to your local timezone`);
        $('#current-desc').html(`<em>${wx.weather[0].description}</em>`);
        $('#current-temps').html(`Temp: <em>${wx.main.temp.toFixed(0)} F</em><br/>Heat index: <em>${wx.main.feels_like.toFixed(0)} F</em><br/>Low: <em>${wx.main.temp_min.toFixed(0)} F</em><br/>High: <em>${wx.main.temp_max.toFixed(0)} F</em>`);
        $('#current-humid').html(`Humidity: <em>${wx.main.humidity}%</em>`);
        $('#current-wind').html(`Winds:<br/><em>${formatDirection(wx.wind.deg)} at ${(wx.wind.speed).toFixed(0)} knots</em>`);
        $('#current-baro').html(`Pressure:<br/>hPa: <em>${wx.main.pressure}<br/>Inches Hg: ${(wx.main.pressure / 33.864).toFixed(2)}</em>`);

        iconDescObj = computeForecastIcon(fiveDay.list.slice(0, 8), fiveDay.city.sunrise);
        tempObj = computeForecastTemps(fiveDay.list.slice(0, 8));
        windObj = computerForecastWinds(fiveDay.list.slice(0, 8));
        $('#day-one-img').attr("src", `./assets/images/weather/${fileMap.get(iconDescObj.icon)}`);
        $('#day-one-date').html(`<b>${convertDate(fiveDay.list[5].dt)}</b>`);
        $('#day-one-desc').html(`<em>${iconDescObj.description}</em>`);
        $('#day-one-temps').html(`Temps:<br/>Low: <em>${tempObj.lo} F</em><br/>High: <em>${tempObj.hi} F</em>`);
        $('#day-one-wind').html(`Winds:<br/><em>${windObj.deg} at<br/>${windObj.speed} knots</em>`);

        iconDescObj = computeForecastIcon(fiveDay.list.slice(8, 17), fiveDay.city.sunrise);
        windObj = computerForecastWinds(fiveDay.list.slice(8, 17));
        $('#day-two-img').attr("src", `./assets/images/weather/${fileMap.get(iconDescObj.icon)}`);
        $('#day-two-date').html(`<b>${convertDate(fiveDay.list[13].dt)}</b>`);
        $('#day-two-desc').html(`<em>${iconDescObj.description}</em>`);
        $('#day-two-temps').html(`Temps:<br/>Low: <em>${tempObj.lo} F</em><br/>High: <em>${tempObj.hi} F</em>`);
        $('#day-two-wind').html(`Winds:<br/><em>${windObj.deg} at<br/>${windObj.speed} knots</em>`);

        iconDescObj = computeForecastIcon(fiveDay.list.slice(16, 25), fiveDay.city.sunrise);
        windObj = computerForecastWinds(fiveDay.list.slice(16, 25));
        $('#day-three-img').attr("src", `./assets/images/weather/${fileMap.get(iconDescObj.icon)}`);
        $('#day-three-date').html(`<b>${convertDate(fiveDay.list[21].dt)}</b>`);
        $('#day-three-desc').html(`<em>${iconDescObj.description}</em>`);
        $('#day-three-temps').html(`Temps:<br/>Low: <em>${tempObj.lo} F</em><br/>High: <em>${tempObj.hi} F</em>`);
        $('#day-three-wind').html(`Winds:<br/><em>${windObj.deg} at<br/>${windObj.speed} knots</em>`);

        iconDescObj = computeForecastIcon(fiveDay.list.slice(24, 33), fiveDay.city.sunrise);
        windObj = computerForecastWinds(fiveDay.list.slice(24, 33));
        $('#day-four-img').attr("src", `./assets/images/weather/${fileMap.get(iconDescObj.icon)}`);
        $('#day-four-date').html(`<b>${convertDate(fiveDay.list[29].dt)}</b>`);
        $('#day-four-desc').html(`<em>${iconDescObj.description}</em>`);
        $('#day-four-temps').html(`Temps:<br/>Low: <em>${tempObj.lo} F</em><br/>High: <em>${tempObj.hi} F</em>`);
        $('#day-four-wind').html(`Winds:<br/><em>${windObj.deg} at<br/>${windObj.speed} knots</em>`);

        iconDescObj = computeForecastIcon(fiveDay.list.slice(32, 40, fiveDay.city.sunrise));
        windObj = computerForecastWinds(fiveDay.list.slice(32, 40));
        $('#day-five-img').attr("src", `./assets/images/weather/${fileMap.get(iconDescObj.icon)}`);
        $('#day-five-date').html(`<b>${convertDate(fiveDay.list[37].dt)}</b>`);
        $('#day-five-desc').html(`<em>${iconDescObj.description}</em>`);
        $('#day-five-temps').html(`Temps:<br/>Low: <em>${tempObj.lo} F</em><br/>High: <em>${tempObj.hi} F</em>`);
        $('#day-five-wind').html(`Winds:<br/><em>${windObj.deg} at<br/>${windObj.speed} knots</em>`);
    }

    function convertDate(epoch) {
        return new Date(epoch * 1000).toLocaleString();
    }

    function setDayNightBG() {
        if (wx.dt < wx.sys.sunrise || wx.dt > wx.sys.sunset) {
            $('#current-img-cont')
                .attr('class', 'night-bg');
        } else {
            $('#current-img-cont')
                .attr('class', 'day-bg');
        }
    }

    function formatDirection(dir) {
        let dirStr = "";
        if ((dir >= 0 && dir <= 22) || (dir >= 337)) {
            dirStr = "North"
        }
        if (dir >= 23 && dir <= 66) {
            dirStr = "Northeast"
        }
        if (dir >= 67 && dir <= 112) {
            dirStr = "East"
        }
        if (dir >= 113 && dir <= 157) {
            dirStr = "Southeast"
        }
        if (dir >= 158 && dir <= 202) {
            dirStr = "South"
        }
        if (dir >= 203 && dir <= 247) {
            dirStr = "Southwest"
        }
        if (dir >= 248 && dir <= 292) {
            dirStr = "West"
        }
        if (dir >= 293 && dir <= 336) {
            dirStr = "Northwest"
        }
        return dirStr;
    }

    function createMap() {// Create and set map on Lat Lon
        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
            center: [location.lon, location.lat], // starting position [lng, lat]
            zoom: 10, // starting zoom
            projection: 'globe', // display the map as a 3D globe
            // remove some map controls
            boxZoom: false,
            doubleClickZoom: false,
            dragRotate: false,
            pitchWithRotate: false,
        });
        geocoder = new MapboxGeocoder({  // adds searchbox from plugin
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        map.addControl(geocoder);
        $('.mapboxgl-ctrl-geocoder--input').attr('placeholder', 'New location');
        // waits to build map and ensures map fots container
        map.on('style.load', () => {  // don't do stuff until map loads
            setTimeout(() => {  // after style loads on map, wait 1.5 seconds to build markers and start icon animations
                buildMarkersAndPopups();
            }, 1500)
            map.resize();
        }).on('moveend', () => {  // event to tell when goecoder done moving map
            if (dragFlag === true) {  //  if map event from dragging marker just reset flag
                dragFlag = false;
            } else {  // otherwise get new location and do stuff
                let nc = map.getCenter();
                location = {
                    "lat": nc.lat, "lon": nc.lng
                };
                if (gcFlag === true) {  // if it was geocode repos, move marker and get new data
                    gcFlag = false;
                    marker
                        .setLngLat([location.lon, location.lat])
                        .addTo(map);
                    ;
                    getLocalWxData();
                }
            }
        });
        geocoder.on('result', () => {
            // geocoder moved map, get rid of geocoder's marker and set flag
            map._markers[1].remove();
            gcFlag = true;
        });
    }

    function buildMarkersAndPopups() {  // put marker on current position and build popup
        // create a HTML element for marker
        popup = new mapboxgl.Popup()
            .setLngLat([location.lon, location.lat])  // set location on map
            // inject html to make it a bootstrap card
            .setHTML(`<div class="card">
                            <div class="card-body">
                                <div class="card-title"><strong>Current Location</strong></div><hr/>
                                <div class="card-subtitle text-muted"><em>${locName}</em></div><hr/>
                                <div class="card-text">${[location.lat, location.lon]}</div>
                            </div>
                        </div>`);
        marker = new mapboxgl.Marker({
            draggable: true,
        })  // make the marker inside our new div
            .setLngLat([location.lon, location.lat])
            .addTo(map)
            .setPopup(popup);
        marker.on('dragend', onDragEnd);
        popup.addTo(map);
        if (popup.isOpen) {  // keeps popups from being open at startup
            marker.togglePopup();
        }
    }

    function onDragEnd() {  // I repositioned marker with mouse - move map and get new data
        dragFlag = true;
        let reposition = marker.getLngLat();
        location = {"lat": reposition.lat, "lon": reposition.lng};
        marker
            .setLngLat([location.lon, location.lat])
            .addTo(map);
        map.easeTo({center: [location.lon, location.lat]});
        getLocalWxData();
    }

    function computeForecastIcon(arr, sunrise) { // get icon for first 3 hour block of day after sunset
        let obj = {icon: '02d', description: 'few clouds'};
        for (let i = 0; i < 8; i++) {
            if (arr[i].dt > sunrise) {
                obj.icon = arr[i].weather[0].icon;
                obj.description = arr[i].weather[0].description;
                break;
            }
        }
        return obj;
    }

    function computeForecastTemps(arr) {  // scan  portion of 5 day and get avg hi and lo temp for one day
        let tempObj = {'lo': arr[0].main.temp_min, 'hi': arr[0].main.temp_max};
        let loSum = 0;
        let hiSum = 0
        for (let i = 0; i < 8; i++) {
            loSum += arr[i].main.temp_min;
            hiSum += arr[i].main.temp_max;
        }
        tempObj.lo = Math.floor(loSum / 8);
        tempObj.hi = Math.floor(hiSum / 8);
        return tempObj;
    }

    function computerForecastWinds(arr) {  // scan portion of 5 day and get avg wind speed and dir for one day
        let windObj = {'deg': arr[0].wind.deg, 'speed': arr[0].wind.speed};
        let degSum = 0;
        let spdSum = 0
        for (let i = 0; i < 8; i++) {
            degSum += arr[i].wind.deg;
            spdSum += arr[i].wind.speed;
        }
        windObj.deg = formatDirection(Math.floor(degSum / 8));
        windObj.speed = Math.floor(spdSum / 8);
        return windObj;
    }

    getFileMap();
}());