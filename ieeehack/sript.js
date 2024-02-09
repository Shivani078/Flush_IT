function initMap() {
    var myLatLng = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: myLatLng,
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "FlushIT",
    });
  }
  