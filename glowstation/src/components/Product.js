import React from "react";
import "../css/Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddWishlist from "./AddWishlist";
import FadeIn from "react-fade-in";
import Rating from "./Rating";
import RemoveWishlist from "./RemoveWishlist";
//import axios from "axios";

const Product = (props) => {
  let {
    id,
    slug,
    brand,
    name,
    price,
    rating,
    numReviews,
    ingredientList,
    description: { largeDes },
    soldAt,
    imageLinks: { img1, img2, img3 },
    howTo,
  } = props.product;


  const wishlistId = props.wishlist.map((_) => _.id);
  const showHeartButton = wishlistId.includes(id);

  return (
    <>
      <FadeIn delay={300} transitionDuration={1100}>
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
              pathname: `/product/${slug}`,
              state: {
                product: props.product,
              },
            }}
          >
            <Card.Body>
              <Card.Subtitle>{brand}</Card.Subtitle>
              <Card.Title> {name}</Card.Title>

              <button className="newb">View Product</button>
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
