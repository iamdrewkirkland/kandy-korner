import React, { useState, useEffect } from "react";

//Establish context for product data
export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  //Initialize state variable (products) and function (setProducts) names
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("http://localhost:8088/products")
      .then((res) => res.json())
      .then(setProducts);
  };

  const addProduct = (product) => {
    return fetch("http://localhost:8088/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(getProducts);
  };

  //Load all products when component is mounted, set empty array to prevent infinite loop on state change.
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("**PRODUCT APPLICATION STATE CHANGE***");
  }, [products]);

  //ProductProvider returns two functions that are availble for other components
  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
