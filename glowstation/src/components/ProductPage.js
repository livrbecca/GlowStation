import React from "react";
import { useLocation } from "react-router-dom";
// import Product from "./Product";
import "../css/ProductPage.css";

const ProductPage = (props) => {
    let location = useLocation();
  let { product } = location.state;
  return (
    <div className="shopContainer">
      {/* <Product product={product} /> */}
      <h2 className="name">{product.name}</h2>
      <h2>{product.brand}</h2>
      <h2>{product.priceRange}</h2>
      <h2>{product.ingredientList}</h2>
      <h4>{product.description.largeDes}</h4>
      <p>{product.soldAt}</p>
      <img src={product.imageLinks.img1} alt="products" />
      <img src={product.imageLinks.img2} alt="products" />
      <img src={product.imageLinks.img3} alt="products" />



    </div>
  );
};

export default ProductPage;
