import React, { useContext, useState } from "react";
import { ProductContext } from "./productProvider";
import Product from "./Product";
import { ProductTypeContext } from "./productTypeProvider";

export default () => {
  const { products } = useContext(ProductContext);
  const { productTypes } = useContext(ProductTypeContext);

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => {
          const productType = productTypes.find(
            (productType) => productType.id === product.productTypeId
          );
          return <Product key={product.id} product={product} productType={productType} />;
        })}
      </div>
    </>
  );
};
