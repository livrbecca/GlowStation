import React from "react";
import "../css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
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
    </div>
  );
};
export default Home;
