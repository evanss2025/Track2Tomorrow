import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '1.5rem'
};

const center = {
  lat: 37.0902,
  lng: 95.7129
};

const MarkerFactory = (lat, lng, name) => {
  return {lat, lng, name}
}

/**
@type {MarkerFactory[]}
*/
const Markers = [
  MarkerFactory(40.444178, -79.9434101, "Intern - Robotics Institute"),
  MarkerFactory(42.3767074,-71.2545058, "High School Apprenticeship Challenge"),
  MarkerFactory(42.3635017,-71.0788475, "Forsyth Institute Student Scholars Summer Internship Program"),   
  MarkerFactory(38.88293061, -77.0168617, "NASA Internship Program"),
  MarkerFactory(40.7790919, -71.0736154, "Met High School Internship "),
  MarkerFactory(39.1660748, -86.5266472, "Indiana University Summer Research Program"),
  MarkerFactory(38.8883383, -77.0048127, "Library of Congress Internships "),
  MarkerFactory(41.8663547, -87.60655, "Adler Planetarium Internships "),
  MarkerFactory(37.4332361, -122.1755625, "Summer 2024 Administrative Internship at Stanford Health Care"),
  MarkerFactory(37.779379, -122.418433, "SFUSD Work Based Summer Internships"),
  MarkerFactory(36.9774511, -122.0522245, "UCSC Science Internship Program"),


]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'map',
    googleMapsApiKey: "const mySecret = process.env['googleMapsApiKey']"

    
  })
 const [map, setMap] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const hoverTimeout = useRef(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    Markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMouseOver = (marker) => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredMarker(marker);
    }, 200); // 200ms delay before showing the InfoWindow
  };

  const handleMouseOut = () => {
    clearTimeout(hoverTimeout.current);
    setHoveredMarker(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {Markers.map((marker, i) => (
        <MarkerF
          key={i}
          position={{ lat: marker.lat, lng: marker.lng }}
          onMouseOver={() => handleMouseOver(marker)}
          onMouseOut={handleMouseOut}
        />
      ))}

      {hoveredMarker && (
        <InfoWindow
          position={{ lat: hoveredMarker.lat, lng: hoveredMarker.lng }}
          onCloseClick={() => setHoveredMarker(null)}
        >
          <div>{hoveredMarker.name}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);