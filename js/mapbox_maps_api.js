"use strict";

//(function () {

mapboxgl.accessToken = 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [14.42526, 50.0525], // starting position [lng, lat]
    zoom: 15, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

/*
Pizza:
Kožná 481/11, 110 00 Staré Město, Czechia
50.0865816,14.4193266

Clock:
Staroměstské nám. 1, 110 00 Josefov, Czechia
14.4185178, 50.0870215

Prague:
14.4481066, 50.0788674

Charels Bridge:
Karlův most, 110 00 Praha 1, Czechia
14.4114366, 50.0864771

 */
// map.on('style.load', () => {
//     map.setFog({}); // Set the default atmosphere style
// });

// let marker = new mapboxgl.Marker()
//     .setLngLat([14.42153, 50.08665])
//     .addTo(map);

//map.setZoom(5);

let praguePopup = new mapboxgl.Popup()
    .setHTML("<p>Prague</p>")

//marker.setPopup(praguePopup);

geocode("Staroměstské nám. 1, 110 00 Josefov, Czechia", 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug').then(function (result) {
    console.log("Astronomical Clock Lng Lat", result);
    // map.setCenter(result);
    // map.setZoom(20);
});

reverseGeocode({  // prague
    lng: 14.4185178,
    lat: 50.0870215
}, 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug').then(function (results) {
    // logs the address for The Astronomical Clock
    console.log("Astronomical Clock Address", results);
});

let pizzaInfo = {
    address: "Kožná 481/11, 110 00 Staré Město, Czechia",
    popupHTML: "<p>Pizzeria Giovanni</p>"
};

function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function (coordinates) {
        let popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        let marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
}

placeMarkerAndPopup(pizzaInfo, 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug', map);
//}());