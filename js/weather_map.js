"use strict";
/*
TODO:

add comments
remove superfluous comments and garbage
organize and consolidate css file
review and remove superfluous html
accessibility?
 */
(function () {
    let wx;
    let newZipCode = "96707";
    let location = "";
    let locName = "";
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

//Moons - Image by <a href="https://www.freepik.com/free-vector/realistic-moon-phases_1087009.htm#page=2&query=moon%20phases&position=6&from_view=search&track=sph">Freepik</a>
    function getFileMap() {
        let url = `./data/icon-map.json`
        $.ajax(url).done(function (data) {// once we have lat lon from zip code get the local area name
            data.forEach((element) => {
                fileMap.set(element.code, element.file);
            });
            lookUpLatLongByZip(newZipCode);  // start with zip code
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with the file map! Check the console for details");
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

    function getLocalWxData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            wx = data;  // assign file contents to global variable
            timeShift = wx.timezone / 3600;
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
        $.get(url).done(function (data) { // now that we have lat lon, local wx, and local name from zip, update page
            console.log("name lookup:", data);
            locName = data[0].name + ", " + data[0].state;
            getFiveDayData();//getSunAndMoonData();//apiCall();//
        }).fail(function (jqXhr, status, error) {
            alert("There was an error with name lookup! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function getFiveDayData() {  // use ajax to get restaurant dat from file
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${OPEN_WX_MAP_KEY}`
        //console.log(url);
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            fiveDay = data;  // assign file contents to global variable
            timeShift = wx.timezone / 3600;
            console.log("forecast: ", fiveDay)
            populateDisplay();
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting forecast! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
        });
    }

    function populateDisplay() {
        createMap();
        let imgURL = `./assets/images/weather/${fileMap.get(wx.weather[0].icon)}`;
        //  if it is night sub moon for sun: imgURL something
        setDayNightBG();
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
                console.log('reset dragging flag');
                dragFlag = false;
            } else {  // otherwise get new location and do stuff
                let nc = map.getCenter();
                location = {
                    "lat": nc.lat, "lon": nc.lng
                };
                if (gcFlag === true) {
                    gcFlag = false;
                    console.log(map);
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

    function buildMarkersAndPopups() {
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

    function onDragEnd() {
        dragFlag = true;
        let reposition = marker.getLngLat();
        location = {"lat": reposition.lat, "lon": reposition.lng};
        console.log("dragged - ", location);
        marker
            .setLngLat([location.lon, location.lat])
            .addTo(map);
        getLocalWxData();
    }

    console.log(location);
    getFileMap();
}());