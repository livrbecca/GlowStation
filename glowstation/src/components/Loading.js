import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/loading.css";
import { Redirect } from "react-router-dom";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const Loading = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 4000);
  }, [redirect]);

  return (
    <div className="loadingP">
      <img src="../loading2.jpg" className="App-logo" alt="logo" />
      <Spinner
        className="cirlce"
        animation="grow"
        variant="primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h1 className="glow">
        <Typewriter delay={280} string="Loading..." />
      </h1>
      {redirect && <Redirect to="/home" />}
    </div>
  );
};

export default Loading;
