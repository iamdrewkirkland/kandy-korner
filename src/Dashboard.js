import React from "react";
import LocationList from "./components/locations/LocationList";
import { LocationProvider } from "./components/locations/locationProvider";
import { ProductProvider } from "./components/products/productProvider";
import { ProductTypeProvider } from "./components/products/productTypeProvider";
import ProductList from "./components/products/ProductList";

export default () => (
  <>
    <header className="header">
      <h2 className="siteTitle">Welcome to the Kandy Korner</h2>
    </header>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
    <ProductProvider>
      <ProductTypeProvider>
        <ProductList />
      </ProductTypeProvider>
    </ProductProvider>
  </>
);
