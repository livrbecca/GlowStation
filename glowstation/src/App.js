import React, { useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import data from "./models/products.json";
import Shop from "./components/Shop";
import Product from "./components/Product";
import QuizIntro from "./components/QuizIntro";
import Loading2 from "./components/Loading2";
import ProductPage from "./components/ProductPage";
import Sidebar from "./components/Sidebar";


function App() {
  const [name, setName] = useLocalStorage("", "");
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

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
        path="/loading2"
        render={() => (
          <>
            <Loading2 />
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
              <Sidebar />
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/quiz"
        render={() => (
          <>
            <QuizIntro name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/product"
        render={() => (
          <>
            <Navbar />
            
            <ProductPage />
            
          </>
        )}
      />
      <Route
        exact
        path="/wishlist"
        render={() => (
          <>
            <Navbar />
          
            
            
          </>
        )}
      />
    </Router>
  );
}

export default App;
