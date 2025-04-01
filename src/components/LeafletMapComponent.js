import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LeafletMapComponent.css'; // Import a CSS file for better styling

function LeafletMapComponent() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: -17.866312, lng: 31.109771 });

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('myMap', {
        center: markerPosition,
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      setMap(mapRef.current);
    } else if (map) {
      map.setView(markerPosition, 13);
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [markerPosition, map]);

  useEffect(() => {
    if (map) {
      L.marker(markerPosition).addTo(map)
        .bindPopup("SW HeadQuarters")
        .openPopup();
    }
  }, [map, markerPosition]);

  const handleMoveMarker = () => {
    const newLat = markerPosition.lat + 0.01;
    const newLng = markerPosition.lng + 0.01;
    setMarkerPosition({ lat: newLat, lng: newLng });

    if (map) {
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          layer.setLatLng({ lat: newLat, lng: newLng });
        }
      });
    }
  };

  return (
    <div className="map-container">
      <h2>Scott's CyberWorld Location</h2>
      <div id="myMap"/>
      <button onClick={handleMoveMarker} className='btn btn-primary'>Move Marker</button>
    </div>
  );
}

export default LeafletMapComponent;
