// Calls the main render main map function

// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&region=JP&language=ja&callback=initMap">

let gMap;

function initMap() {
  gMap = new google.maps.Map(document.getElementById("map"));
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Center on user's current location if geolocation prompt allowed
      var initialLocation = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      gMap.setCenter(initialLocation);
      gMap.setZoom(13);
    },
    function (positionError) {
      // User denied geolocation prompt - default to Philadelphia
      map.setCenter(
        new google.maps.LatLng(39.96533936576329, -75.18061828075426)
      );
      gMap.setZoom(5);
    }
  );
}

window.initMap = initMap;
