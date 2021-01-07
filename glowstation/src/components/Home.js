import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Countdown from "./Countdown";
import GroupofAds from "./GroupofAds";
import RBadvert from "./RBadvert";

const Home = (props) => {
  return (
    <>
      <div className="marginContainer">
        <div className="welcomeMessage">
          <h1 style={{ textTransform: "capitalize" }}>
            Hey there {props.name}! welcome to Glow Station.
          </h1>
          <h3>The destination for all your skincare needs.</h3>
          <br />

          <h3>
            Complete the
            <Link to="/loading2">
              <i> Routine Builder </i>
            </Link>
            and recieve
            <b>
              <i> 15%</i>
            </b>{" "}
            off your first order.
          </h3>
        </div>
        <RBadvert />
        <Countdown />
        <GroupofAds />
      </div>
    </>
  );
};
export default Home;
