import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Button from "../stories/Button/Button.js";
import Card from 'react-bootstrap/Card'




const Product = (props) => {

  let {
    brand,
    name,
    priceRange,
    ingredientList,
    description: { largeDes },
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
        <Card.Img variant="top" className="displayPics" src={img1} alt="products" />
        <Card.Body>
        <Card.Subtitle> {brand}</Card.Subtitle>
        <Card.Title> {name}</Card.Title>
        <Button
        backgroundColor="#F2E6FF"
        label="View Product"
        size="medium"
      />
      </Card.Body>
      </div>
    </Link>
  );
};
export default Product;
