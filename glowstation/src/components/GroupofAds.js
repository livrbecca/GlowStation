import React from "react";
import "../css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const groupOfAds = () => {
    return (
        <div className="groupOfAds">
          <AliceCarousel
            animationDuration="600"
            autoPlay
            disableButtonsControls="true"
            autoPlayInterval="2000"
            animationType="fadeout"
            infinite="true"
          >
            <Link to="/loading2">
              <img className="advert1" src="advert2.png" alt="advert" />
            </Link>
            <Link to="/loading2">
              <img className="advert1" src="advert.png" alt="advert" />
            </Link>
            <Link to="/loading2">
              <img className="advert1" src="advert3.png" alt="advert" />
            </Link>
          </AliceCarousel>

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
          <div className="shopAd5">
            <Link to="/loading2">
              <img
                className="advert6"
                src="advert7.png"
                alt="RB advert"
              />
            </Link>
          </div>
          <div className="shopAd4">
            <Link to="/skineducation">
              <img
                className="advert5"
                src="educationAd.png"
                alt="skin education advert"
              />
            </Link>
          </div>
        </div>
    )
}

export default groupOfAds;