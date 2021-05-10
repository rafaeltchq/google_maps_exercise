import React, { useCallback, useRef } from "react";
import { useSelector } from 'react-redux';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import SearchBox from "../Searcher/SearchBox";

const GoogleMapWrapper = () => {

  const markersPos = useSelector((state) => state.markersPos);
  
  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);


  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  },[]);

  const center = {
    lat: 41.385251760995985,
    lng: 2.1689619107290565,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: [process.env.REACT_APP_GOOGLE_MAP_LIB],
  });

  if (loadError) return "Map loading error...";
  if (!isLoaded) return "Loading map...";

  return (
    <>
      <SearchBox panTo={panTo} />
      <GoogleMap
      mapContainerClassName="mapWrapper"
        zoom={10}
        center={center}
        onLoad={onMapLoad}
      >
        {markersPos.map((m, i) => 
          <Marker key={i} position={m} />
        )}
      </GoogleMap>
    </>
  );
};
export default GoogleMapWrapper;
