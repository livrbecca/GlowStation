import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Countdown from "./Countdown";
import GroupofAds from "./GroupofAds";
import RBadvert from "./RBadvert";


const Home = (props) => {
  return (
    <>
      <div className="marginContainer">
        <div>
          <h1 className="firstMessage" style={{ textTransform: "capitalize" }}>
            Hey there {props.name}!
          </h1>
          <RBadvert />
          <br />

          <h3 className="promoSlogan">
            Complete the
            <Link to="/loading2">
              <button className="RBButton">
                <i> Routine Builder </i>
              </button>
            </Link>
            and recieve
            <b>
              <i> 15%</i>
            </b>{" "}
            off your first order.
          </h3>
        </div>

        <Countdown />
        <GroupofAds />
      </div>
    </>
  );
};
export default Home;
