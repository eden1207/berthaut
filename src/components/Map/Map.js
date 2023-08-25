/**
 * Component made for map creation on the contact page
 * 
 * You can create a free map thanks to Bing Maps (https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api)
 * You can follow the tutorial https://www.npmjs.com/package/react-bingmaps-plus
 * 
 * You need a API key. To do so, on the home page, go to your account to create your key
 * Choose one key for one project
 * 
 * Enter the key in API_KEY
 * 
 * In the component, lng and lat are the center of your map coordinates.
 * 
 * You can choose your zoom value with 'zoom'
 * 
 * pushPins is made to create a cursor
 */

import React, { useState } from 'react';
import './styles/Map.css'
import { ReactBingmaps } from 'react-bingmaps';


export default function ContactMap(){
      const [lng] = useState(-1.666);
      const [lat] = useState(48.1106);
      const [cursor_lng] = useState(-1.7183);
      const [cursor_lat] = useState(48.1148);
      const [zoom] = useState(11.4);
      const [API_KEY] = useState(process.env.REACT_APP_MAP_API_KEY);
      return (
        <div className="Map-wrap" >
          <ReactBingmaps 
            bingmapKey = {API_KEY}
            center = {[lat, lng]}
            zoom = {zoom}
            pushPins = {
              [
                {
                  "location":[cursor_lat, cursor_lng], 
                  "option":{ color: 'red' },
                }
              ]
            }
          > 
          </ReactBingmaps>
        </div>
      );
}