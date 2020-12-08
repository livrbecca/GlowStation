import React from "react";

import "../css/Wrapper.css";
import { Link } from "react-router-dom";

const Wrapper = (props) => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div className="Wrapper">
        <h1 style={{ textTransform: "capitalize" }}>{props.name}'s Personalised Skin Quiz</h1>
        <h2>Answer these 4 questions as accurately as possible</h2>
        <button className="startButton"  type="submit" onClick={() => {}}>Start the Glow
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-play-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Wrapper;
