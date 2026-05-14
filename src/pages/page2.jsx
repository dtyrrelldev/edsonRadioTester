import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { Icon } from "leaflet";
import locationPin from "../assets/location-pin.png";
import greenLocationPin from "../assets/location-pin-green.png";
import { useState } from "react";

const markers = [
  {
    geocode: [53.4088, -117.7882],
    popUp: "Athabasca",
    channels: [215],
  },
  {
    geocode: [53.56666667, -117.5],
    popUp: "Obed",
    channels: [215],
  },
  {
    geocode: [53.51666667, -118.0166667],
    popUp: "Moberly",
    channels: [217, 215],
  },
  {
    geocode: [53.98333333, -118.1833333],
    popUp: "Huckleberry",
    channels: [205],
  },
  {
    geocode: [53.71666667, -118.5666667],
    popUp: "Adams Creek",
    channels: [230],
  },
  {
    geocode: [54.23333333, -118.4],
    popUp: "Simonette",
    channels: [205],
  },
  {
    geocode: [53.96666667, -119.2],
    popUp: "Hamell",
    channels: [238],
  },
  {
    geocode: [53.23333333, -117.1333333],
    popUp: "Yellowhead",
    channels: [241],
  },
  {
    geocode: [52.88333333, -116.9833333],
    popUp: "Grave Flats",
    channels: [251, 241],
  },
  {
    geocode: [53.55, -116.5],
    popUp: "Ansell",
    channels: [267, 208],
  },
  {
    geocode: [53.43, -115.4333333],
    popUp: "Carrot Creek",
    channels: [219],
  },
  {
    geocode: [53.91666667, -116.3166667],
    popUp: "Tom Hill",
    channels: [208],
  },
  {
    geocode: [53.85, -116.65],
    popUp: "Mayberne",
    channels: [208],
  },
  {
    geocode: [54.08333333, -117.3833333],
    popUp: "Berland",
    channels: [211],
  },
  {
    geocode: [53.043006, -117.321816],
    popUp: "Cadomon",
    channels: [239],
  },
];

const customIcon = new Icon({
  iconUrl: locationPin,
  iconSize: [38, 38],
});

const greenIcon = new Icon({
  iconUrl: greenLocationPin,
  iconSize: [38, 38],
});

export function Page2() {
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState({});
  const [correctMarkers, setCorrectMarkers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showWinPopup, setShowWinPopup] = useState(false);

  function checkGuess(markerName, correctChannels) {
    const userGuess = Number(guesses[markerName]);

    if (correctMarkers[markerName]) {
      return;
    }

    if (correctChannels.includes(userGuess)) {
      const newScore = score + 1;

      setScore(newScore);

      setCorrectMarkers({
        ...correctMarkers,
        [markerName]: true,
      });

      setFeedback({
        ...feedback,
        [markerName]: "Correct!",
      });

      if (newScore === markers.length) {
        setShowWinPopup(true);
      }
    } else {
      setFeedback({
        ...feedback,
        [markerName]: "Wrong, try again.",
      });
    }
  }

  return (
    <div className="map-page">
      <div className="score-card">
        <p className="score-label">Correct channels guessed</p>
        <h2 className="score-number">
          {score} / {markers.length}
        </h2>
      </div>

          {showWinPopup && (
      <div className="win-overlay">
        <div className="win-card">
          <h2>Congratulations!</h2>
          <p>You correctly guessed all {markers.length} radio channels.</p>

          <button onClick={() => setShowWinPopup(false)}>
            Close
          </button>
        </div>
      </div>
    )}

      <MapContainer
        className="map"
        center={[53.4, -117.59]}
        zoom={8}
        minZoom={7}
        maxZoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {markers.map((marker) => (
            <Marker
              key={marker.popUp}
              position={marker.geocode}
              icon={correctMarkers[marker.popUp] ? greenIcon : customIcon}
            >
              <Popup>
                <div className="popup-card">
                  <h3 className="popup-title">{marker.popUp}</h3>

                  {correctMarkers[marker.popUp] ? (
                    <p className="popup-correct">
                      Correct! Channels: {marker.channels.join(", ")}
                    </p>
                  ) : (
                    <p className="popup-instructions">
                      Enter the radio channel for this tower.
                    </p>
                  )}

                  <input
                    className="channel-input"
                    type="number"
                    inputMode="numeric"
                    placeholder="Channel"
                    value={guesses[marker.popUp] || ""}
                    disabled={correctMarkers[marker.popUp]}
                    onChange={(event) =>
                      setGuesses({
                        ...guesses,
                        [marker.popUp]: event.target.value,
                      })
                    }
                  />

                  <button
                    className="guess-button"
                    disabled={correctMarkers[marker.popUp]}
                    onClick={() => checkGuess(marker.popUp, marker.channels)}
                  >
                    {correctMarkers[marker.popUp] ? "Correct" : "Guess"}
                  </button>

                  {feedback[marker.popUp] && (
                    <p
                      className={
                        correctMarkers[marker.popUp]
                          ? "feedback-correct"
                          : "feedback-wrong"
                      }
                    >
                      {feedback[marker.popUp]}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}