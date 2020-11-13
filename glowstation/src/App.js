import React, { useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import data from "./models/products.json";
import Shop from "./components/Shop";
import Product from "./components/Product";

function App() {
  const [name, setName] = useState("");

  const [products] = useState(data);

  // async function allProducts(value) {
  //   const results = await fetch(`https://WetGrouchyQuotient.liivyylovesyou.repl.co`).then((res) => res.json());
  //   if (!results.error) {
  //     setProducts(results.items);
  //   }
  // }

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
            <Navbar />
            <Home name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/shop"
        render={() => (
          <>
            <Navbar />
            <Shop />
            <div className="shopBorder">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      />
    </Router>
  );
}

export default App;
