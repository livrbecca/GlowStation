import React, { useEffect, useState } from "react";
import "../css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    let difference = +new Date(`04/05/2021`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <>
      <div className="welcomeMessage">
        <h1 style={{ textTransform: "capitalize" }}>Hey there {props.name}!</h1>
        <br />
        <h1 style={{ textTransform: "capitalize" }}>
          welcome to Glow Station.
        </h1>
      </div>
      <div className="together">
        <h2 className="largeTextAd">
          Take the Routine <br /> Builder <br /> Today
        </h2>
        <h3 className="miniTextAd">
          Dry skin? <br /> Oily skin? <br /> Dark marks or texture? <br /> We
          got you.
        </h3>
        <button className="adButton">Routine Builder</button>
        <img className="landing" src="landingpic.png" alt="collage" />
      </div>

      <div className="countDownWrapper">
        <h1 className="C1">2021 Easter Sale Countdown!</h1>
        <h1 className="C1">HUGE 70% off ALL items</h1>
        <div className="count">
        <h2 className="C2">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h2>
        <h4 className="wishLink"><i>Need inspiration? Add items to your <Link to="/shop">wishlist</Link></i></h4>
        </div>
      </div>
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
        <div className="shopAd4">
          <Link to="/skineducation">
            <img className="advert5" src="educationAd.png" alt="skin education advert" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
