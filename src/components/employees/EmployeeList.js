import React, { useContext, useState } from "react";
import { LocationContext } from "../locations/locationProvider";
import { EmployeeContext } from "./employeeProvider";
import Employee from "./Employee";

export default () => {
  const { locations } = useContext(LocationContext);
  const { employees } = useContext(EmployeeContext);

  return (
    <>
      <h2>Employees</h2>
      <div className="employees">
        {employees.map((employee) => {
          const location = locations.find(
            (loc) => loc.id === employee.locationId
          );
          return (
            <Employee key={employee.id} employee={employee} loc={location} />
          );
        })}
      </div>
    </>
  );
};
