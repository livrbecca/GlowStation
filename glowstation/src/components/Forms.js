import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const Forms = (props) => {
  const [setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="train2"></div>

      <div className="formP">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <h1 className="siteName">
              <Typewriter stopBlinkinOnComplete="true" string="Welcome to " />
              <i className="glow">Glow Station</i>
            </h1>
            <Typewriter className="smallName" string="What's your name?" />
            <br />
            <input
              className="inputB"
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </label>
          <Link to="/loading">
            <button
              className="submitb"
              type="submit"
              value="submit"
              disabled={!props.name}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Forms;
