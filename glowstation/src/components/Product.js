import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";

const Product = (props) => {
  let {
    brand,
    name,
    description: { smallDes },
    imageLinks: { img1 },
  } = props.product;
  return (
    // link to individual product page, link would be props.product Link to
    <Link
      to={{
        pathname: "/product",
        state: {
          product: props.product
        },
      }}
    >
      <div className="imgCont">
        <img className="displayPics" src={img1} alt="products" />
        <h3> {brand}</h3>
        <h2> {name}</h2>
        <h4> {smallDes}</h4>
      </div>
    </Link>
  );
};
export default Product;
