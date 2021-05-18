/* 
  Map Component
  
  Plots a list of bikes with given 
  latitude and longitude
  on google map 
  script injected in index.html
*/

// Libraries
import React, { memo, useEffect } from 'react';

// Configurations
import { config } from '../../config/vars';

import './styles.css';

const Map = (props) => {
  useEffect(() => {
    const google = window.google;
    const bikes = props.bikes;
    
    const locations = bikes.map(bike => {
      const lable = `Bike Id: ${bike.id}`;
      const longitude = bike.position.x;
      const latitude = bike.position.y;
      return { lable, latitude, longitude };
    });

    const calculatedCenter = bikes.reduce((acc, item) => {
      acc[0] = acc[0] + item.position.y;
      acc[1] = acc[1] + item.position.x;
      return acc;
    }, [0, 0]);

    const center = {
      latitude: props.centerLatitude || calculatedCenter[0]/bikes.length, 
      longitude: props.centerLongitude || calculatedCenter[1]/bikes.length
    };

    // this creates a new map on a given element
    // sets center and map type refer to google map docs
    const map = new google.maps.Map(document.getElementById(props.mapId), {
      zoom: 12,
      center: new google.maps.LatLng(center.latitude, center.longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // creating a new instance of the info window
    const infowindow = new google.maps.InfoWindow();
    
    // setting a marker at the requested search latitude and longitude
    const centerMarker = new google.maps.Marker({
      position: new google.maps.LatLng(center.latitude, center.longitude),
      map: map,
      icon: {
        url: config.map.markerImageSrc.blue
      }
    });

    // click event listener for center marker
    google.maps.event.addListener(centerMarker, 'click', ((marker)  => {
      return () => {
        infowindow.setContent(`Search Location lat: ${center.latitude}, lng: ${center.longitude}`);
        infowindow.open(map, marker);
      }
    })(centerMarker));

    // Following code inserts marker to the map created earlier
    locations.forEach((location, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.latitude, location.longitude),
        map: map,
        icon: {
          url: config.map.markerImageSrc.yellow
        }
      });

      // Following code ads click event listener to the marker inserted
      google.maps.event.addListener(marker, 'click', ((marker, index)  => {
        return () => {
          infowindow.setContent(locations[index].lable);
          infowindow.open(map, marker);
        }
      })(marker, index));
    });
  
  }, [props.bikes, props.centerLatitude, props.centerLongitude, props.mapId]);

  return <div id={props.mapId} className="map-container"></div>
}

// Painting Map is an expensive operation
// memo returns a memoized components
// which re-renders only when props changes
// similar to React pure component in class based components
export default memo(Map);