import React from "react";
import "../css/Home.css";
import Button from "../stories/Button/Button.js";

const Home = (props) => {
  return (
    <div className="welcomeMessage">
          <h1 style={{ textTransform: "capitalize" }}>Welcome {props.name}</h1>
      <Button
        backgroundColor="rgba(255,130,9,1)"
        label="Click me"
        onClick={() => {}}
        primary={false}
        size="large"
      />
    </div>
  );
};
export default Home;
