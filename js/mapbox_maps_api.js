"use strict";

//(function () {

let map;
let marker;
let restaurants;

function createMap() {// Create and set map on City Center
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug';
    map = new mapboxgl.Map({
        // Prague:
        //     14.4481066, 50.0788674
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [14.4481066, 50.0788674], // starting position [lng, lat]
        zoom: 12, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
}

function createMarker(loc) {
// Pizzeria Giovanni:
//     Kožná 481/11, 110 00 Staré Město, Czechia
//     14.4193266, 50.0865816
    marker = new mapboxgl.Marker()
        .setLngLat(loc)
        .addTo(map);
}

function createPopUp(n) {
    let popup = new mapboxgl.Popup()
        .setHTML(`<p>${n}</p>`)
    marker.setPopup(popup);
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

function appendBlogPosts(data) {
//        console.log(data);
    let newHTML = '';
    for (let i = 0; i < data.length; i++) {
        let picUrl = 'http://placekitten.com/' + (Math.floor(Math.random() * 750) + 150) + '/' + (Math.floor(Math.random() * 500) + 150);  //ask different size each time to randomize because same size always retuns same image
        newHTML += `<div class="card m-3"><img src="${picUrl}" class="card-img-top img-thumbnail m-2" style="max-width: 25vw; height: auto;" alt="A kitten"><div class="card-body"><div><h5 class="card-title">${data[i].title}</h5></div>
                        <div><h6 class="card-subtitle mt-1 text-muted">${data[i].date}</h6></div><div class="row mt-3 mb-3">
                        <div>${data[i].content}</div></div><div><h6 class="card-subtitle mt-1 text-muted">Categories:</h6></div><div class="row m-2"><ul class="list-group list-group-horizontal">`
        for (let j = 0; j < data[i].categories.length; j++) {
            newHTML += '<li class="list-group-item">' + data[i].categories[j] + '</li>';
        }
        newHTML += `</ul></div></div></div>`;
    }
    $('#posts').html(newHTML);
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

// geocode("Staroměstské nám. 1, 110 00 Josefov, Czechia", 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug').then(function (result) {
//     console.log("Astronomical Clock Lng Lat", result);
//     // map.setCenter(result);
//     // map.setZoom(20);
// });

// reverseGeocode({  // prague
//     lng: 14.4185178,
//     lat: 50.0870215
// }, 'pk.eyJ1IjoiZGdzbWl0aDciLCJhIjoiY2l3bDZ5c2gwMDAyaTJvbm4xbTBpNGgzNCJ9.Ue5-g-SMk3KXCHdpGidvug').then(function (results) {
//     // logs the address for The Astronomical Clock
//     console.log("Astronomical Clock Address", results);
// });

// let pizzaInfo = {
//     address: "Kožná 481/11, 110 00 Staré Město, Czechia",
//     popupHTML: "<p>Pizzeria Giovanni</p>"
// };
//
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
    createMarker([14.4193266, 50.0865816]);
    createPopUp("Pizzeria Giovanni");
})

//}());