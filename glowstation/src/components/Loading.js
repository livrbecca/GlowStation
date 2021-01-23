import React, { useEffect, useState } from "react";
import "./loading.css";
import { Redirect } from "react-router-dom";
import "react-typewriting-effect/dist/index.css";

const Loading = (props) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 2000);
  }, [redirect]);

  return (
    <div className="loadingP">
      <img src="../loading2.jpg" className="App-logo" alt="logo" />
      {redirect && <Redirect to={props.redirect} />}
    </div>
  );
};

// "/home"

export default Loading;
