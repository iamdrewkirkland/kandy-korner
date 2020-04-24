import React, { useState, useEffect } from "react";

//Establish context for product data
export const ProductTypeContext = React.createContext();

export const ProductTypeProvider = (props) => {
  //Initialize state variable (productTypes) and function (setproductTypes) names
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then((res) => res.json())
      .then(setProductTypes);
  };

  const addProductType = (productType) => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productType),
    }).then(getProductTypes);
  };

  //Load all productTypes when component is mounted, set empty array to prevent infinite loop on state change.
  useEffect(() => {
    getProductTypes();
  }, []);

  useEffect(() => {
    console.log("**productType APPLICATION STATE CHANGE***");
  }, [productTypes]);

  //productTypeProvider returns two functions that are availble for other components
  return (
    <ProductTypeContext.Provider
      value={{
        productTypes,
        addProductType,
      }}
    >
      {props.children}
    </ProductTypeContext.Provider>
  );
};
