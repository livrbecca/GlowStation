import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Product from "./Product";
import "./ProductPage.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Collapsible from "react-collapsible";

const ProductPage = (props) => {
  const [qty] = useState(1);
  let location = useLocation();

  let { product } = location.state;

  // const dummyProduct = {
  //   name: "productname",
  //   slug: "productslug",
  //   imageLinks: {img1 : ""}
  // }

  let allProducts = props.products;

  console.log("showing all products", allProducts);

  const filteredProducts = allProducts
    .filter((i) => {
      // console.log(i.category);
      return i.category[0] === product.category[0];
    })
    .filter((x) => x.id !== product.id);
  console.log("showing filtered products ONE", filteredProducts);

  const randomProduct =
    filteredProducts[Math.floor(Math.random() * filteredProducts.length)];

  // const randomProduct = dummyProduct
    
  console.log("showing filtered products TWO",filteredProducts);

  const slugEncoded = encodeURIComponent(randomProduct && randomProduct.slug);

  return (
    <>
      <Link className="backtoshop" to="/shop">
        Back to Shop
      </Link>
      <h2 className="name">{product.name}</h2>
      <Container>
        <Row className="white">
          <Col className="carouselblock">
            <div className="carousel">
              <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
                <img
                  className="sliderimg"
                  src={product.imageLinks.img1}
                  alt="products"
                />

                <img
                  className="sliderimg"
                  src={product.imageLinks.img2}
                  alt="products"
                />

                <img
                  className="sliderimg"
                  src={product.imageLinks.img3}
                  alt="products"
                />
              </AliceCarousel>
            </div>
            <div>
              <p className="ingredients">
                <b>
                  <u>Ingredient List</u>
                </b>{" "}
                <br /> {product.ingredientList.join(", ")}
              </p>
            </div>
          </Col>
          <Col className="descol">
            <h3 className="priceRange">£{product.price.toFixed(2)}</h3>
            <h2 className="brand">{product.brand}</h2>
            <div className="status">Status: </div>
            <div>
              {product.countInStock > 0 ? (
                <span className="success">In Stock</span>
              ) : (
                <span className="danger">Out of Stock</span>
              )}
            </div>
            <div className="infoArea">
              <button
                disabled={!product.countInStock}
                className="addToCart"
                onClick={() => props.addToCart(product, qty)}
              >
                Add to Cart{" "}
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
            <div className="descriptionDiv">
              <p className="description">{product.description.smallDes}</p>
              <Collapsible trigger="More Info >">
                <p className="description">{product.description.largeDes}</p>
              </Collapsible>
              <Collapsible trigger="How to use >">
                <p className="description">{product.howTo}</p>
              </Collapsible>
            </div>
          </Col>
          <Link
            to={{
              pathname: `/product/${slugEncoded}`,
              state: {
                product: randomProduct,
              },
            }}
          >
            <div className="mightLike">
              <h3 className="mTag">You Might Like</h3>
              <div>
                <Card.Title className="mLike">{randomProduct && randomProduct.name}</Card.Title>
                <Card.Img
                  variant="top"
                  className="mPic"
                  src={randomProduct && randomProduct.imageLinks.img1}
                  alt="products"
                />
              </div>
            </div>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
