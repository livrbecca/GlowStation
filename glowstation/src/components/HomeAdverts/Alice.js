import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Alice = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Alice;
