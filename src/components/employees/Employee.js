import React from "react";

export default ({ employee, loc }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">{loc.name}</div>
    <div className="employee__size">{employee.manager}</div>
    <div className="employee__rate">{employee.rate}</div>
  </section>
);
