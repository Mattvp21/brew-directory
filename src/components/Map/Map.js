import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { formatRelative } from "date-fns";




const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  
  disableDefaultUI: true,
  zoomControl: true,
};


export default function Map({singleBeer}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  let breweryLat = singleBeer.latitude
  let breweryLon = singleBeer.longitude
  const center = {
    
    lat: Number(breweryLat),
    lng: Number(breweryLon),
    
  }
  console.log(breweryLat);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ breweryLat, breweryLon });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  if(breweryLat || breweryLon != null) {
    return (
      <div>
        
        
        
  
        <Locate panTo={panTo} />
        
  
        <GoogleMap
        
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              
            />
          ))}
  
  
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <p>{formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
  
        </GoogleMap>
      </div>
    );
  } else {
    return <h1>No map data</h1>
  }

  }

  

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
    Zoom in
    </button>
  );

  
}