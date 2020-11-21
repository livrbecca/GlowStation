import React from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";

const ProductPage = (props) => {
    let location = useLocation();
  const { product } = location.state;
  return (
    <div className="shopContainer">
      <Product product={product} />
      <h2 className="name">{product.name}</h2>
      <h2>{product.brand}</h2>
      <h2>{product.priceRange}</h2>
      <h2>{product.ingredientList}</h2>
      <h4>{product.largeDes}</h4>
      <p>{product.soldAt}</p>
      <img src={product.img1} alt="products" />
      <img src={product.img2} alt="products" />
      <img src={product.img2} alt="products" />



    </div>
  );
};

export default ProductPage;
