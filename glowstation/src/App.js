import React, { useEffect, useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Navbar from "./components/Nav";
//import data from "./models/products.json";
import Shop from "./components/Shop";
import Product from "./components/Product";
import ProductPage from "./components/ProductPage";
import Sidebar from "./components/Sidebar";
import Wishlist from "./components/Wishlist";
import axios from "axios";
import CartScreen from "./components/CartScreen";
import Wrapper from "./components/Wrapper";
import Quiz from "./components/Quiz";
import ResultsScreen from "./components/ResultsScreen";
import SkinEducation from "./components/SkinEducation";

function App() {
  // search


  async function SearchBar(value) {
    const results = await fetch(
      `http://localhost:5000/products/search?q=${value}`
    ).then((res) => res.json());
    if (!results.error) {
      setProducts(results.data);
    }
  }

  // https://localhost:5000/products/search?q={}

  // routine builder variables
  const [moisturiser, setMoisturiser] = useState([]);
  const [SPF, setSPF] = useState([]);
  const [cleanser, setCleanser] = useState([]);
  const [mask, setMask] = useState([]);
  const [mist, setMist] = useState([]);
  const [oil, setOil] = useState([]);
  const [serum, setSerum] = useState([]);
  const [exfoliator, setExfoliator] = useState([]);
  const [toner, setToner] = useState([]);

  const [products, setProducts] = useState([]);

  // add to cart functionality
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    product.qty += quantity;
    console.log(product);
    console.log(quantity);
    setCart([...cart, product]);
  };

  // filter products functionality
  const filterBy = async (code, topic) => {
    let response = await axios.get(
      `http://localhost:5000/products/${code}/${topic}`
    );
    console.log(response);

    setProducts(response.data.data);
  };

  const getAllProducts = async () => {
    let response = await axios.get(`http://localhost:5000/products`);
    console.log(response);

    setProducts(response.data.products);
  };

  // displaying all products on shop page

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`http://localhost:5000/products`);

      return response.data;
    };
    const dataResults = async () => {
      let res = await fetchData();

      setProducts(res.products);
    };

    dataResults();
  }, []);

  // name props

  const [name, setName] = useLocalStorage("", "");

  // wishlist functionality

  const [wishlist, setWishlist] = useState([]);

  function addProduct(id) {
    const chosenProduct = products.filter((product) => product.id === id);
    setWishlist([...wishlist, ...chosenProduct]);
  }

  function removeProduct(id) {
    const productRemoved = wishlist.filter((product) => product.id !== id);
    setWishlist(productRemoved);
  }

  // local storage for 'name'

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
            <Loading redirect="/home" />
          </>
        )}
      />
      <Route
        exact
        path="/loading2"
        render={() => (
          <>
            <Loading redirect="/quiz" />
          </>
        )}
      />
      <Route
        exact
        path="/loading3"
        render={() => (
          <>
            <Loading redirect="/results" />
          </>
        )}
      />
      <Route
        exact
        path="/cart"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />
            <CartScreen cart={cart} />
          </>
        )}
      />
      <Route
        exact
        path="/home"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />
            <Home name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/shop"
        render={() => (
          <>
            <Navbar SearchBar={SearchBar} wishlist={wishlist} cart={cart} />
            <Shop filterBy={filterBy} getAllProducts={getAllProducts} />
            <div className="shopBorder">
              <Sidebar filterBy={filterBy} />

              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                  addToCart={addToCart}
                  wishlist={wishlist}
                  removeProduct={removeProduct}
                />
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
            <Wrapper name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/routinebuilder"
        render={() => (
          <>
            <Quiz
              setMoisturiser={setMoisturiser}
              setSPF={setSPF}
              setCleanser={setCleanser}
              setMask={setMask}
              setMist={setMist}
              setOil={setOil}
              setSerum={setSerum}
              setExfoliator={setExfoliator}
              setToner={setToner}
            />
          </>
        )}
      />
      <Route
        exact
        path="/results"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />
            <ResultsScreen
              name={name}
              moisturiser={moisturiser}
              SPF={SPF}
              cleanser={cleanser}
              mask={mask}
              mist={mist}
              oil={oil}
              serum={serum}
              exfoliator={exfoliator}
              toner={toner}
              addProduct={addProduct}
              addToCart={addToCart}
              wishlist={wishlist}
            />
          </>
        )}
      />
      <Route
        exact
        path="/product/:name"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />

            <ProductPage cart={cart} addToCart={addToCart} />
          </>
        )}
      />
      <Route
        exact
        path="/wishlist"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />
            <div>
              <Wishlist
                name={name}
                removeProduct={removeProduct}
                wishlist={wishlist}
                addToCart={addToCart}
              />
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/skineducation"
        render={() => (
          <>
            <Navbar wishlist={wishlist} cart={cart} />
            <SkinEducation />
          </>
        )}
      />
    </Router>
  );
}

export default App;
