import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Button from "../stories/Button/Button.js";
import Card from "react-bootstrap/Card";
import AddWishlist from "./AddWishlist";
import FadeIn from "react-fade-in";
import Rating from "./Rating";

const Product = (props) => {
  let {
    id,
    brand,
    name,
    price,
    rating,
    numReviews,
    ingredientList,
    description: { largeDes },
    soldAt,
    imageLinks: { img1, img2, img3 },
  } = props.product;

  return (
    <>
      <FadeIn delay={300} transitionDuration={3000}>
        <div className="imgCont">
          <AddWishlist id={id} name={name} addProduct={props.addProduct} />
          <Card.Img
            variant="top"
            className="displayPics"
            src={img1}
            alt="products"
          />

          <Link
            to={{
              pathname: "/product",
              state: {
                product: props.product,
              },
            }}
          >
            <Card.Body>
              <Card.Subtitle>{brand}</Card.Subtitle>
              <Card.Title> {name}</Card.Title>

              <Button
                backgroundColor="#F2E6FF"
                label="View Product"
                size="medium"
              />

              <br />
              <Rating rating={rating} numReviews={numReviews} />
            </Card.Body>
          </Link>
        </div>
      </FadeIn>
    </>
  );
};
export default Product;
