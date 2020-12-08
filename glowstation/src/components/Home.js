import React from "react";
import "../css/Home.css";


const Home = (props) => {
  return (
    <div className="welcomeMessage">
          <h1 style={{ textTransform: "capitalize" }}>Welcome {props.name}</h1>
      <button>Click me</button>
    </div>
  );
};
export default Home;
