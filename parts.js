<!-- <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script> -->






function initializeMap() {
  
  var mapOptions = {
      panControl:true,
      zoomControl:true,
      mapTypeControl:true,
      scaleControl:true,
      streetViewControl:true,
      overviewMapControl:true,
      rotateControl:true,    
      mapTypeId:google.maps.MapTypeId.HYBRID
  };

    
  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  
  map = new googleMap(document.querySelector("#map"), mapOptions);
}


if (markers.length>0) {
        for (var i = 0;) {
          markers[i].inofWindow.close();
        };
      }

 // *** EVENTHANDLER BEGINS: 
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    // *** EVENTHANDLER ENDS: 
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }