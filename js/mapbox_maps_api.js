"use strict";

(function () {

    let map;
    let places = [];
    let restaurants;
    let markerVisibility = true;
    mapboxgl.accessToken = MAPBOX_KEY;

    function createMap() {// Create and set map on City Center
        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [14.420628, 50.088329], // starting position [lng, lat]
            zoom: 15, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        map.on('style.load', () => {
//            map.setFog({}); // Set the default atmosphere style
            buildMarkersAndPopups();
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
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'animated-marker';
            let popup = new mapboxgl.Popup()
                .setLngLat(element.lngLat)
                .setHTML(`<div>${element.name}</div><div>${element.address}</div><div>${element.info}</div>`)
            let marker = new mapboxgl.Marker(el)
                .setLngLat(element.lngLat)
                .addTo(map)
                .setPopup(popup);
            popup.addTo(map);
            if (popup.isOpen) {
                marker.togglePopup();
            }
            places.push({popup, marker});
        });
    }

    function setZoomLevel(e) {
        e.preventDefault();
        let zl = document.querySelector('#zoom-level').value;
        map.setZoom(zl);
    }

    function recenter(e) {
        e.preventDefault();
        let newAddress = document.querySelector('#recenter-address').value;
        geocode(newAddress, MAPBOX_KEY).then(function (coordinates) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'animated-marker';
            let popup = new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(`<div>${coordinates}</div><div>${newAddress}</div>`);
            let marker = new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
            popup.addTo(map);
            if (popup.isOpen) {
                marker.togglePopup();
            }
            places.push({popup, marker});
            //    map.setCenter(coordinates);
            map.flyTo({
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

    function toggleMarkers(e) {
        e.preventDefault();
        markerVisibility = !markerVisibility;
        places.forEach((element) => {
            if (markerVisibility === true) {
                element.marker.addTo(map);
            } else {
                element.marker.remove();
            }
        });
    }

    loadRestaurantData();
    createMap();
    $('#zoom-level').on('change', setZoomLevel);
    $('#recenter').on('click', recenter);
    $('#toggle-markers').on('click', toggleMarkers);
}());