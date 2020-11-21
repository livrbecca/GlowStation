import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Button from "../stories/Button/Button.js";

const Product = (props) => {
  let {
    brand,
    name,
    priceRange,
    ingredientList,
    description: { smallDes, largeDes },
    soldAt,
    imageLinks: { img1, img2, img3 },
  } = props.product;
  return (
    <Link
      to={{
        pathname: "/product",
        state: {
          product: props.product,
        },
      }}
    >
      <div className="imgCont">
        <img className="displayPics" src={img1} alt="products" />
        <h3> {brand}</h3>
        <h2> {name}</h2>
        <h4> {smallDes}</h4>
        <Button
        backgroundColor="#F2E6FF"
        label="View Product"
        size="medium"
      />
      </div>
    </Link>
  );
};
export default Product;
