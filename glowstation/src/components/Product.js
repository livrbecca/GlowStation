import React, { useState } from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Button from "../stories/Button/Button.js";
import Card from "react-bootstrap/Card";
import AddWishlist from "./AddWishlist";
import FadeIn from "react-fade-in";
import Rating from "./Rating";
import RemoveWishlist from "./RemoveWishlist";

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

  console.log(props.wishlist);
  const wishlistId = props.wishlist.map((_) => _.id);
  console.log(wishlistId);
  const showHeartButton = wishlistId.includes(id);

  return (
    <>
      <FadeIn delay={300} transitionDuration={3000}>
        <div className="imgCont">
          {!showHeartButton ? (
            <AddWishlist id={id} name={name} addProduct={props.addProduct} />
          ) : (
            <RemoveWishlist removeProduct={props.removeProduct} id={id} />
          )}

          <Card.Img
            variant="top"
            className="displayPics"
            src={img1}
            alt="products"
          />

          <Link
            to={{
              pathname: `/product/${name}`,
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
