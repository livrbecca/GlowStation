import React from "react";
import "./Home.css";

import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const groupOfAds = () => {
  return (
    <>
      <Link to="/shop">
        <h2 className="shopHeader">Shop</h2>
      </Link>
      <div className="groupOfAds">
        <Link to="/shop">
          <img className="advert2" src="advert4.png" alt="snail mucin" />
        </Link>
        <Link to="/shop">
          <img
            className="advert3"
            src="advert5.png"
            alt="Allies of Skin Cleanser"
          />
        </Link>
        <br />
        <Link to="/shop">
          <img className="advert4" src="advert6.png" alt="Serums" />
        </Link>
        <Link to="/loading2">
          <img className="advert6" src="advert7.png" alt="RB advert" />
        </Link>
    
      </div>
    </>
  );
};

export default groupOfAds;
