import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
    <div className="location__size">{location.sqft}</div>
    <div className="location__accessibility">{location.accessibility}</div>
  </section>
);
