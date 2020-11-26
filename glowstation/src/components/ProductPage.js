import React from "react";
import { useLocation } from "react-router-dom";
// import Product from "./Product";
import "../css/ProductPage.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ProductPage = (props) => {
  let location = useLocation();
  let { product } = location.state;
  return (
    <>
    <h2 className="name">{product.name}</h2>
    <h2 className="priceRange">{product.priceRange}</h2>
    <Container>
      <Row className="white">
        <Col className="pink">
          <div className="carousel">
            <AliceCarousel autoPlay  autoPlayInterval="3000" infinite >
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
        </Col>
        <Col className="descol">
        <h2 className="brand">{product.brand}</h2>
        <div className="descriptionDiv">
        <h4 className="description">{product.description.largeDes}</h4>
        </div>
        </Col>
      </Row>
      <Row className="black">
        <Col className="blue"><h4 className="smallDes">{product.description.smallDes}</h4></Col>
        <Col className="green"><p>{product.ingredientList}</p></Col>
        <Col className="yellow"><p>{product.soldAt}</p></Col>
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
