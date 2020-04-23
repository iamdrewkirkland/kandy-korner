import React, { useContext, useState } from "react";
import { LocationContext } from "./locationProvider";
import Location from "./Location";

export default () => {
  const { locations } = useContext(LocationContext);

  return (
    <>
      <h2>Locations</h2>
      <div className="locations">
        {locations.map((loc) => {
          return <Location key={loc.id} location={loc} />;
        })}
      </div>
    </>
  );
};
