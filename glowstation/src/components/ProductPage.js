import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Product from "./Product";
import "../css/ProductPage.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Collapsible from "react-collapsible";

const ProductPage = (props) => {
  const [qty, setQty] = useState(1);
  let location = useLocation();
  let { product } = location.state;
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
            <h3 className="priceRange">£{product.price}</h3>
            <h2 className="brand">{product.brand}</h2>
            <div className="status">Status: </div>
            <div>
              {product.countInStock > 0 ? (
                <span className="success">In Stock</span>
              ) : (
                <span className="danger">Unavailable</span>
              )}
            </div>
            <div className="infoArea">
              <div className="qtyArea">
                <div className="qty">Qty:</div>
                <div>
                  <select
                    className="num"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="addToCart">Add to Cart</button>
            </div>
            <div className="descriptionDiv">
              <p className="description">{product.description.smallDes}</p>
              <Collapsible trigger="More Info >">
                <p className="description">{product.description.largeDes}</p>
              </Collapsible>
              <Collapsible trigger="How to use >">
                <p className="description">
                  {product.howTo}
                </p>
              </Collapsible>
            </div>
          </Col>
        </Row>
      </Container>
      {/* // <div className="shopContainer"> */}
      {/* <Product product={product} />
    //   <h2 className="name">{product.name}</h2>
    //   <h2>{product.brand}</h2>
    //   <h2>{product.priceRange}</h2>
    //   <h2>{product.ingredientList}</h2>
    //   <h4>{product.description.largeDes}</h4>
    //   <p>{product.soldAt}</p>
    //   <img src={product.imageLinks.img1} alt="products" />
    //   <img src={product.imageLinks.img2} alt="products" />
    //   <img src={product.imageLinks.img3} alt="products" />
    // </div> */}
    </>
  );
};

export default ProductPage;
