import "./App.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import {Icon} from "leaflet";
import locationPin from "./assets/location-pin.png";

export default function App() {
    // markers
    const markers = [
    {
      geocode: [53.39, -117.40],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [53.41, -117.39],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [53.37, -117.42],
      popUp: "Hello, I am pop up 3"
    }

  ];


  const customIcon = new Icon({

    iconUrl: locationPin,
    iconSize: [38, 38] // size of icon
    
  })

  return (
    <MapContainer center= {[53.40, -117.59]} zoom={10}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

      <MarkerClusterGroup>
        { markers.map(marker => (
          <Marker position ={marker.geocode} icon = {customIcon}>
            <Popup>{marker.popUp} </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}