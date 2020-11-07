import React, { useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Home from './components/Home';

function App() {
  const [name, setName] = useState("");
  return (
    <Router>
      <Route
      exact
      path="/"
      render={() => (
        <>
        <Forms name={name} setName={setName} />
        </>
      )}
      />
      <Route
      exact
      path="/loading"
      render={() => (
        <>
      <Loading />
        </>
      )}
      />
       <Route
      exact
      path="/home"
      render={() => (
        <>
        <Header />
        <Home name={name} />
        </>
      )}
      />
    </Router>
  );
}

export default App;
