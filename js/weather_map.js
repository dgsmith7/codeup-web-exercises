"use strict";
/*
TODO:

incorporate map
marker drag = new api call
form - turn button into text input for zipcode, add event handler and clientside validation
use flyto anim for new zipcode
add comments
remove superfluous comments and garbage
organize and consolidate css file
review and remove superfluous html
accessibility?
 */
(function () {
    let wx;
    let newZipCode = "75238";//"02108";//"99762";// "96707";
    let zipCode = "";
    let newLocation = {"lat": 32.869, "lon": -96.703};
    let location = "";
    let newLocName = "Dallas";
    let locName = "";
    let fileMap = new Map();
    let timeShift;
    let sunMoon;
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
            //console.log(fileMap.get('04d'));
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
        //console.log(url);
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

//     function getSunAndMoonData(url) {
//         let callUrl = `https://aa.usno.navy.mil/api/rstt/oneday?date=${makeSunMoonDate(wx.dt)}&coords=${(location.lat).toFixed(2)},${(location.lon.toFixed(2))}&tz=${timeShift}&dst=true&id=joeybaga`;
//         fetch(callUrl, {
//             method: 'GET',
//             mode: 'no-cors',
//             crossOrigin: true,
//             dataType: 'jsonp',
// //            credentials: 'same-origin',
// //            headers: {
//             // 'Access-Control-Allow-Origin': 'http://localhost:8080',
//             // 'Vary': 'Origin',
//             // 'Accept': 'application/json',
// //            },
//         })
//             .then((response) => {
//                 console.log("response - ", response);
//                 response.text()
//             })
//             .then((data) => {
//                 console.log(data ? JSON.parse(data) : {});
//                 []
//                 //sunMoon = data;
//                 //console.log("sunMoon - ", sunMoon);
//                 console.log("data - ", data);
//             })
//             .then(() => {
//                 console.log("sun and moon: ", sunMoon);
//                 getFiveDayData();
//             })
//             .catch(errorMsg => {
//                 console.log("error - ", errorMsg);
//             });
//     }
//
//     function apiCall() {
//         const Http = new XMLHttpRequest();
//         const url = `https://aa.usno.navy.mil/api/rstt/oneday?date=${makeSunMoonDate(wx.dt)}&coords=${(location.lat).toFixed(2)},${(location.lon.toFixed(2))}&tz=${timeShift}&dst=true&id=joeybaga`;
//         Http.open("GET", url);
//         Http.send();
//
//         Http.onreadystatechange = function (e) {
//             if (this.readyState == 4 && this.status === 200) {
//                 data = JSON.parse(Http.responseText);
//
//                 if (data.error) {
//                     var errmsg = document.getElementById('location-message')
//                     errmsg.style.display = "";
//                     errmsg.style.height = "80px";
//                     errmsg.classList.add('usa-alert--error');
//                     var errtxt = document.getElementsByClassName('usa-alert__text')[0]
//                     errtxt.innerHTML = "Error: " + data.error;
//                 } else {
//                     var lat = document.getElementById('lat');
//                     var lon = document.getElementById('lon');
//
//                     // If daylight saving time applies for this
//                     // data service, check the appropriate radio button
//                     if (document.getElementById('dst-radio-1')) {
//                         if (data.dstexempt === false) {
//                             var dst_radio_1 = document.getElementById('dst-radio-1');
//                             dst_radio_1.checked = true;
//                         } else {
//                             var dst_radio_0 = document.getElementById('dst-radio-0');
//                             dst_radio_0.checked = true;
//                         }
//                     }
//
//                     if (document.getElementById('tz')) {
//                         var tz = document.getElementById('tz');
//                         var tz_sign_0 = document.getElementById('tz_sign-0');
//                         var tz_sign_1 = document.getElementById('tz_sign-1');
//
//                         tz.value = Math.abs(data.tz);
//
//                         if (parseInt(data.tz) < 0) {
//                             tz_sign_1.checked = true
//                         } else {
//                             tz_sign_0.checked = true
//                         }
//                     }
//
//                     //var height = document.getElementById('height');
//
//                     lat.value = data.latitude;
//                     lon.value = data.longitude;
//
//                     if (document.getElementById('label')) {
//                         document.getElementById('label').value = data.city + ", " + data.state;
//                     }
//
//                     // Check the box to use US TZ labels in printout
//                     if (document.getElementById('tz-label-1')) {
//                         var tz_label = document.getElementById('tz-label-1');
//                         tz_label.checked = true;
//                     }
//
//                     document.getElementById('location-message').display = "hidden";
//                     //height.value = data.height
//                     modal.style.display = "none";
//                 }
//             }
//         }
//     }

    function getFiveDayData() {  // use ajax to get restaurant dat from file
        console.log(convertDate(wx.dt));
        console.log(makeSunMoonDate(wx.dt));
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
        //$('#map-area').html(`<div>The map will go here, centered on ${JSON.stringify(location)}</div>`);
        console.log(typeof wx.weather[0].icon);
        let imgURL = `./assets/images/weather/${fileMap.get(wx.weather[0].icon)}`;
        console.log("image look up", imgURL);
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

    function makeSunMoonDate(epoch) {
        let s = new Date(epoch * 1000).toLocaleString();
        s = s.split(',')[0];
        let sArr = s.split('/');
        console.log(s);
        s = sArr[2] + "-" + sArr[0] + "-" + sArr[1];
        return s;
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

    function createMap() {// Create and set map on City Center
        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [location.lon, location.lat], // starting position [lng, lat]
            zoom: 10, // starting zoom
            projection: 'globe', // display the map as a 3D globe
            boxZoom: false,
            doubleClickZoom: false,
            dragRotate: false,
            pitchWithRotate: false,
        });
        geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        map.addControl(geocoder);
        $('.mapboxgl-ctrl-geocoder--input').attr('placeholder', 'New location');
        console.log("prox - ", geocoder.getProximity());
        map.on('style.load', () => {  // don't do stuff until map loads
            setTimeout(() => {  // after style loads on map, wait 1.5 seconds to build markers and start icon animations
                buildMarkersAndPopups();
            }, 1500)
            map.resize();
        }).on('moveend', () => {
            if (dragFlag === true) {
                console.log('reset dragging flag');
                dragFlag = false;
            } else {
                let nc = map.getCenter();
                console.log("new center - ", nc);
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
            console.log('geocoder relocate event has occurred.');
            map._markers[1].remove();
            gcFlag = true;
        });
    }

    function buildMarkersAndPopups() {
        // create a HTML element for each feature
        popup = new mapboxgl.Popup()
            .setLngLat([location.lon, location.lat])  // set location on map
            // inject html to make it a bootstrap card
            .setHTML(`<div class="card">
                            <div class="card-body">
                                <div class="card-title"><strong>Current Location</strong></div><hr/>
                                <div class="card-subtitle text-muted"><em>location name</em></div><hr/>
                                <div class="card-text">${[location.lat, location.lon]}</div>
                            </div>
                        </div>`);
        marker = new mapboxgl.Marker({
            draggable: true
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
        // map.flyTo({  // recenters map with a flight animation
        //     center: [location.lon, location.lat],
        //     speed: 0.5,
        //     curve: 0.5,
        //     duration: 5000,
        //     easing(t) {
        //         return t;
        //     }
        // });
        //
        marker
            .setLngLat([location.lon, location.lat])
            .addTo(map);
        ;

        map.setZoom(10);
        getLocalWxData();
    }

    function recenter(e) {
        e.preventDefault(); //  prevent page refresh
        let newAddress = document.querySelector('#recenter-address').value; // gets value from inout
        geocode(newAddress, MAPBOX_KEY).then(function (coordinates) {  // get lngLat from address
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.id = 'marker' + places.length;
            el.setAttribute("style", `margin-top: 3px; background-image:url("../assets/icons/noun-location-5256157.png");`);
            let popup = new mapboxgl.Popup() //  next 10 or 15 lines are similar to function above, consider refactoring
                .setLngLat(coordinates)
                .setHTML(`<div class="card">
                            <div class="card-body">
                                <div class="card-title"><strong>${newAddress}</strong></div><hr/>
                                <div class="card-subtitle text-muted"><em>${coordinates}</em></div>
                            </div>
                        </div>`);
            let marker = new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
            popup.addTo(map);
            if (popup.isOpen) {
                marker.togglePopup();
            }
            let bouncing = true;
            let bounceFrames = 0;
            places.push({popup, marker, bouncing, bounceFrames});
            map.flyTo({  // recenters map with a flight animation
                center: coordinates,
                speed: 0.5,
                curve: 0.5,
                duration: 5000,
                easing(t) {
                    return t;
                }
            });
        });
    }

    console.log(location);
    getFileMap();
}());