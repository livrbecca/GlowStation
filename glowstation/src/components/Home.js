import React from "react";
import "../css/Home.css"


const Home = (props) => {
  return (
    <div className="welcomeMessage">
          <h1>Welcome {props.name}</h1>
    </div>
  );
};
export default Home;
