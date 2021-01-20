import React from "react";
import "./Shop.css";
// import ProductPage from "./ProductPage.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddWishlist from "../Wishlist/AddWishlist";
import FadeIn from "react-fade-in";
import Rating from "./Rating";
import RemoveWishlist from "../Wishlist/RemoveWishlist";
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
    imageLinks: { img1 },
  } = props.product;

  const slugEncoded = encodeURIComponent(slug);

  const wishlistId = props.wishlist.map((_) => _.id);
  const showHeartButton = wishlistId.includes(id);

  return (
    <>
      <FadeIn transitionDuration={800}>
        <div className="imgCont">
          {!showHeartButton ? (
            <AddWishlist id={id} name={name} addProduct={props.addProduct} />
          ) : (
            <RemoveWishlist removeProduct={props.removeProduct} id={id} />
          )}

          <Link
            to={{
              pathname: `/product/${slugEncoded}`,
              state: {
                product: props.product,
              },
            }}
          >
            <Card.Img
              variant="top"
              className="displayPics"
              src={img1}
              alt="products"
            />
            <Card.Body>
              <Card.Subtitle>{brand}</Card.Subtitle>
              <Card.Title> {name}</Card.Title>
              <Card.Subtitle>
                <b>£{price.toFixed(2)}</b>
              </Card.Subtitle>

              <Rating rating={rating} numReviews={numReviews} />
            </Card.Body>
          </Link>
          <button
            className="addCart"
            onClick={() => props.addToCart(props.product, 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="basket"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
        </div>
      </FadeIn>
    </>
  );
};
export default Product;
