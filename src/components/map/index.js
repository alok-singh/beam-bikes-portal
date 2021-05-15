import React, { memo, useEffect } from 'react';
import './styles.css';

const Map = (props) => {
  useEffect(() => {
    const google = window.google;
    const bikes = props.bikes;
    
    const locations = bikes.map(bike => {
      const lable = `Bike Id: ${bike.id}`;
      const longitude = bike.position.x;
      const latitude = bike.position.y;
      return [lable, latitude, longitude];
    });

    let center = bikes.reduce((acc, item) => {
      acc[0] = acc[0] + item.position.y;
      acc[1] = acc[1] + item.position.x;
      return acc;
    }, [0, 0]);

    center = [props.centerLatitude || center[0]/bikes.length, props.centerLongitude || center[1]/bikes.length];

    const map = new google.maps.Map(document.getElementById('bikes-map'), {
      zoom: 12,
      center: new google.maps.LatLng(center[0], center[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const infowindow = new google.maps.InfoWindow();

    const centerMarker = new google.maps.Marker({
      position: new google.maps.LatLng(center[0], center[1]),
      map: map,
      icon: {url: `http://maps.google.com/mapfiles/ms/icons/blue-dot.png`}
    });

    google.maps.event.addListener(centerMarker, 'click', ((marker)  => {
      return () => {
        infowindow.setContent(`Search Location lat: ${center[0]}, lng: ${center[1]}`);
        infowindow.open(map, marker);
      }
    })(centerMarker));

    locations.forEach((location, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: {url: `http://maps.google.com/mapfiles/ms/icons/yellow-dot.png`}
      });

      google.maps.event.addListener(marker, 'click', ((marker, index)  => {
        return () => {
          infowindow.setContent(locations[index][0]);
          infowindow.open(map, marker);
        }
      })(marker, index));
    });

    window.beamMap = map;
    
  })
  return <div id="bikes-map" className="map-container"></div>
}

export default memo(Map);