import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Countdown = (props) => {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    let difference = +new Date(`02/29/2022`) - +new Date();

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

  Object.keys(timeLeft).forEach((interval, id) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={id}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>
      <div className="countDownWrapper">
        <Link to="/shop">
          <h2 className="countdownHeader">Sale</h2>
        </Link>
        <h1 className="C1">2021 Easter Sale Countdown!</h1>
        <h1 className="C1">HUGE 70% off ALL items</h1>
        <p>T&C's apply.</p>
        <div className="count">
          <h2 className="C2">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </h2>
          <h4 className="wishLink">
            <i>
              Need inspiration?
              <Link to="/shop">
                {" "}
                Browse the <b>shop</b>
              </Link>{" "}
              and add items to your wishlist.
            </i>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Countdown;
