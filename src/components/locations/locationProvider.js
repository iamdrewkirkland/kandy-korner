import React, { useState, useEffect } from "react";

//Establish context for location data
export const LocationContext = React.createContext();

export const LocationProvider = (props) => {
  //Initialize state variable (locations) and function (setLocations) names
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then(setLocations);
  };

  const addLocation = (location) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    }).then(getLocations);
  };

  //Load all locations when component is mounted, set empty array to prevent infinite loop on state change.
  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    console.log("**LOCATION APPLICATION STATE CHANGE***");
  }, [locations]);

  return (
    <LocationContext.Provider
      value={{
        locations,
        addLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
