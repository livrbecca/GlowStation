import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Form.css";


const Forms = (props) => {
  const [setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(props.name);
  }

  return (
    <>
      <div className="formP">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <h1 className="siteName">
              Welcome to <i className="glow">Glow Station</i>
            </h1>
            <h2>What's your name?</h2>
            <input
              className="inputB"
              type="text"
              value={props.name}
              // style={{ textTransform: "capitalize" }}
              onChange={(e) => props.setName(e.target.value)}
            />
          </label>
          <Link to="/loading">
            <button
              className="submitb"
              type="submit"
              value="submit"
              disabled={!props.name}
            >Submit</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Forms;
