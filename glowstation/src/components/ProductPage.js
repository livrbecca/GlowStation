import React from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";

const ProductPage = (props) => {
    let location = useLocation();
  const { product } = location.state;
  return (
    <div className="shopContainer">
      <Product product={product} />
    </div>
  );
};

export default ProductPage;
