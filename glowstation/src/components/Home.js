import React from "react";
import "../css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
     

      <div className="welcomeMessage">
            
        <h1 style={{ textTransform: "capitalize" }}>Welcome {props.name}</h1>
        <Link to="/loading2">
          <AliceCarousel
            animationDuration="600"
            autoPlay
            disableButtonsControls="true"
            autoPlayInterval="2000"
            animationType="fadeout"
            infinite="true"
          >
            <img className="advert1" src="advert2.png" alt="advert" />
            <img className="advert1" src="advert.png" alt="advert" />
            <img className="advert1" src="advert3.png" alt="advert" />
          </AliceCarousel>
        </Link>
        <div className="shopAd">
          <Link to="/shop">
            <img className="advert2" src="advert4.png" alt="snail mucin" />
          </Link>
        </div>
        <div className="shopAd2">
          <Link to="/shop">
            <img
              className="advert3"
              src="advert5.png"
              alt="Allies of Skin Cleanser"
            />
          </Link>
        </div>
        <div className="shopAd3">
          <Link to="/shop">
            <img className="advert4" src="advert6.png" alt="Serums" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
