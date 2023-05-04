/**
 * Component made for map creation on the contact page
 * 
 * You can create a free map thanks to maptiler (https://www.maptiler.com/)
 * You can follow the tutorial https://docs.maptiler.com/react/maplibre-gl-js/how-to-use-maplibre-gl-js/
 * 
 * You need a API key. To do so, on the home page, go to MyCloud and the API keys to find your key
 * Choose one key for one project
 * 
 * In the component, lng and lat are the center of your map coordinates.
 * 
 * You can choose your zoom value with 'zoom'
 * 
 * The function map.current.addControl() is to create a zoom interface on your displayed map
 * 
 * new maplibregl.Marker() is a function to display the position point on your map
 */

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../../styles/Map/Map.css'

export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-1.666);
    const [lat] = useState(48.1106);
    const [zoom] = useState(10);
    const [API_KEY] = useState(process.env.REACT_APP_MAP_API_KEY);

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
          map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({color: "#FF0000"})
          .setLngLat([-1.7183,48.1148])
          .addTo(map.current);
    });

      return (
        <div className="Map-wrap">
          <div ref={mapContainer} className="Map" />
        </div>
      );
}