import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const EntanceAd = (props) => {

  


  const locale = "en";
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 40 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="Ent">
      <div className="dateTime">
        <h2 className="firstMessage" style={{ textTransform: "capitalize" }}>
          {wish} {props.name}
        </h2>
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
      <div className="listDiv">
        <h3 className="homeQ">What would you like to do today?</h3>
        <ul className="miniLinks">
          <Link to="/loading2">
            <li>Routine Builder</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/sale">
          <li >Sale</li>
          </Link>
          <Link to="/skineducation">
            <li>Skin Education</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default EntanceAd;
