import React from 'react'
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import numeral from 'numeral';
import './Map.css'
import ShowDta from './ShowData';

const Map = ({ countries, center, zoom ,color}) => {


    
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {ShowDta(countries, color)}
           </LeafletMap>
        </div>
    )
}
export default Map;