import "../App.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import {Icon} from "leaflet";
import locationPin from "../assets/location-pin.png";
import { useState } from "react";


  // markers
  const markers = [
  {
    geocode: [53.4088, -117.7882],
    popUp: "Athabasca",
    channel: 215
  },
  {
    geocode: [53.56666667, -117.5],
    popUp: "Obed",
    channel: 215
  },
  {
    geocode: [53.51666667, -118.0166667],
    popUp: "Moberly",
    channel: 217
  },
    {
    geocode: [53.98333333, -118.1833333],
    popUp: "Huckleberry",
    channel: 205
  },
    {
    geocode: [53.71666667, -118.5666667],
    popUp: "Adams Creek",
    channel: 230
  },
    {
    geocode: [54.23333333, -118.4],
    popUp: "Simonette",
    channel: 205
  },
  {
    geocode: [53.96666667, -119.2],
    popUp: "Hamell",
    channel: 238
  },
  {
    geocode: [53.23333333, -117.1333333],
    popUp: "Yellowhead",
    channel: 241
  },
  {
    geocode: [52.88333333, -116.9833333],
    popUp: "Grave Flats",
    channel: 251
  },
  {
    geocode: [53.55, -116.5],
    popUp: "Ansell",
    channel: 267
  },
  {
    geocode: [53.43, -115.4333333],
    popUp: "Carrot Creek",
    channel: 219
  },
    {
    geocode: [53.91666667, -116.3166667],
    popUp: "Tom Hill",
    channel: 208
  },
    {
    geocode: [53.85, -116.65],
    popUp: "Mayberne",
    channel: 208
  },
    {
    geocode: [54.08333333, -117.3833333],
    popUp: "Berland",
    channel: 211
  }
  ];

  const customIcon = new Icon({
    iconUrl: locationPin,
    iconSize: [38, 38] // size of icon
  })

export function Page1() {

  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState({});

  return (
    <>
    <h1>Learn the channels:</h1>

    <MapContainer className = "map" center= {[53.40, -117.59]} zoom={10}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

      <MarkerClusterGroup>
        { markers.map(marker => (
          <Marker position ={marker.geocode} icon = {customIcon}>
            <Popup>
              <h3>{marker.popUp}</h3> 
               <h3>{marker.channel}</h3> 

            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>

    </>
  )
}