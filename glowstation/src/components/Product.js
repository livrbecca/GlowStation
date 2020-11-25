import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Button from "../stories/Button/Button.js";
import Card from "react-bootstrap/Card";
import AddWishlist from "./AddWishlist";
import FadeIn from 'react-fade-in';

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
    <>
    <FadeIn delay={300} transitionDuration={3000}>
      <div className="imgCont">
        <AddWishlist />
        <Card.Img
          variant="top"
          className="displayPics"
          src={img1}
          alt="products"
        />
        <Card.Body>
          <Card.Subtitle> {brand}</Card.Subtitle>
          <Card.Title> {name}</Card.Title>
          <Link
            to={{
              pathname: "/product",
              state: {
                product: props.product,
              },
            }}
          >
            <Button
              backgroundColor="#F2E6FF"
              label="View Product"
              size="medium"
            />
          </Link>
        </Card.Body>
      </div>
      </FadeIn>
    </>
  );
};
export default Product;
