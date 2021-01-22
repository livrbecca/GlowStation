import React from "react";
//import { Link } from "react-router-dom";
import "./Home.css";
import Countdown from "./Countdown";
import GroupofAds from "./GroupofAds";
import RBadvert from "./RBadvert";
import EntanceAd from "./EntanceAd";
import EdAds from "./EdAds";


const Home = (props) => {


  return (
    <>
      <div className="marginContainer">
        <EntanceAd name={props.name}  />
        <RBadvert />
        <Countdown />
        <GroupofAds />
        <EdAds />
      </div>
    </>
  );
};
export default Home;
