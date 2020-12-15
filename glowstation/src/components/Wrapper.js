import React from "react";
import "../css/Wrapper.css";
import { Link } from "react-router-dom";
import QuizContainer from "./QuizContainer";

const Wrapper = (props) => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div className="Wrapper">
        <h1 style={{ textTransform: "capitalize" }}>
          {props.name}'s Routine Builder
        </h1>
        <h2>Answer these questions as accurately as possible</h2>
        <button className="startButton" type="submit">
          Lets Glow!
        </button>
      </div>
    </div>
  );
};
export default Wrapper;
