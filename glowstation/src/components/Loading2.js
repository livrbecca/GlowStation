import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/loading.css";
import { Redirect } from "react-router-dom";

const Loading2 = () => {
  const [redirect, setRedirect] = useState(false);
 

  useEffect(() => {
    setTimeout(() => setRedirect(true), 6000);
    
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
      <h1 className="glow">Loading Personalised Quiz...</h1>
      <br />
      <h1 className="glow">Formulating Questions...</h1>
      {redirect && <Redirect to="/quiz" />}
    </div>
  );
};

export default Loading2;
