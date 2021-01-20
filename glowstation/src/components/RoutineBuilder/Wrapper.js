import React from "react";
import "./Wrapper.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";



const Wrapper = (props) => {
  return (
    <div>
      <Link to="/home">
        <button className="miniButton">Home</button>
      </Link>
      <div className="Wrapper">
        <h1 className="aboard">
        <Typewriter delay={80} string="All Aboard the Glow Station Train! " />
        </h1>
        <h1 className="quiztitle" style={{ textTransform: "capitalize" }}>
         {props.name}'s Routine Builder
        </h1>
        <h2 className="quiztitle">Answer these questions as accurately as possible</h2>
        <Link to="/routinebuilder">
        <button className="startButton" type="submit">
          Lets Glow!
        </button>
        </Link>
      </div>
      <div className="train"></div>
    </div>
  );
};
export default Wrapper;
