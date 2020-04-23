import React from "react";
import LocationList from "./components/locations/LocationList";
import { LocationProvider } from "./components/locations/locationProvider";

export default () => (
  <>
    <header className="header">
      <h2 className="siteTitle">Welcome to the Kandy Korner</h2>
    </header>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>
);
