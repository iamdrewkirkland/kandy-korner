import React, { useState, useEffect } from "react";

//Establish context for location data
export const EmployeeContext = React.createContext();

export const EmployeeProvider = (props) => {
  //Initialize state variable (employees) and function (setemployees) names
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employee) => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(getEmployees);
  };

  //Load all employees when component is mounted, set empty array to prevent infinite loop on state change.
  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    console.log("**EMPLOYEE APPLICATION STATE CHANGE***");
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
