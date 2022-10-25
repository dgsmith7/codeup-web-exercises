"use strict";

//(function () {

let map;
let places = [];
let restaurants;
mapboxgl.accessToken = MAPBOX_KEY;//'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug';

function createMap() {// Create and set map on City Center
    map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [14.420628, 50.088329], // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
}

function loadRestaurantData() {
    $.ajax("./data/restaurants.json").done(function (data, status, jqXhr) {
        console.log(data);
        restaurants = data;
    }).fail(function (jqXhr, status, error) {
        alert("There was an error! Check the console for details");
        console.log("Response status: " + status);
        console.log("Error object: " + error);
    });
}

function buildMarkersAndPopups() {
    restaurants.forEach((element) => {
        let popup = new mapboxgl.Popup()
            .setLngLat(element.lngLat)
            .setHTML(`<div>${element.name}</div><div>${element.address}</div><div>${element.info}</div>`)
            .addTo(map);
        let marker = new mapboxgl.Marker()
            .setLngLat(element.lngLat)
            .addTo(map);
        marker.setPopup(popup);
        places.push({popup, marker});
    });
}

/*
Clock:
Staroměstské nám. 1, 110 00 Josefov, Czechia
14.4185178, 50.0870215


Charels Bridge:
Karlův most, 110 00 Praha 1, Czechia
14.4114366, 50.0864771

 */

// $('#cont').on('click', (e) => {
// //    console.log('clicked');
//     // if (e.key === 'r') {
//     map.setZoom(5);
//     //
//     // }
// });


// reverseGeocode({  // prague
//     lng: 14.4185178,
//     lat: 50.0870215
// }, 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug').then(function (results) {
//     // logs the address for The Astronomical Clock
//     console.log("Astronomical Clock Address", results);
// });

// function placeMarkerAndPopup(info, token, map) {
//     geocode(info.address, token).then(function (coordinates) {
//         let popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         let marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// }

// placeMarkerAndPopup(pizzaInfo, 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug', map);
loadRestaurantData();
createMap();
$('body').on('click', () => {
    buildMarkersAndPopups();
})

//}());