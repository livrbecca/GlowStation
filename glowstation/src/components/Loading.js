import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/loading.css";
import { Redirect } from "react-router-dom";

const Loading = () => {
  const [redirect, setRedirect] = useState(false);
  console.log(redirect);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 4000);
    console.log(redirect);
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
      <h1 className="glow">Loading.....</h1>
      {redirect && <Redirect to="/home" />}
    </div>
  );
};

export default Loading;
