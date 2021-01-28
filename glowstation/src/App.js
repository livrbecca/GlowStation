import React, { useEffect, useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/HomeAdverts/Home";
import Navbar from "./components/Navbar/Nav";
//import data from "./models/products.json";
import Shop from "./components/ShopAndProducts/Shop";
import Product from "./components/ShopAndProducts/Product";
import ProductPage from "./components/ShopAndProducts/ProductPage";
import Sidebar from "./components/ShopSideBar/Sidebar";
import Wishlist from "./components/Wishlist/Wishlist";
import axios from "axios";
import CartScreen from "./components/CartAndCheckout/CartScreen";
import Wrapper from "./components/RoutineBuilder/Wrapper";
import Quiz from "./components/RoutineBuilder/Quiz";
import ResultsScreen from "./components/RoutineBuilder/ResultsScreen";
import SkinEducation from "./components/SkinEducation/SkinEducation";
import Checkout from "./components/CartAndCheckout/Checkout";
import SearchResults from "./components/Search/SearchResults";
import Countdown from "./components/HomeAdverts/Countdown";

function App() {
  // search

  let [searchResults, setSearchResults] = useState([]);
  let [value, setValue] = useState("");

  async function SearchBar(val) {
    searchResults = await fetch(
      `http://localhost:5000/products/search?q=${val}`
    ).then((res) => res.json());
    if (!searchResults.error) {
      setSearchResults(searchResults.data);
      setValue((value = val));
    }
  }

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

  // add to cart states
  const [cart, setCart] = useState([]);

  //remove from cart
  const removeFromCart = (id) => {
    const removed = cart.filter((product) => product.id !== id);
    window.sessionStorage.setItem("cartItems", JSON.stringify(removed));
    setCart(removed);
  };

  const addToCart = (product, quantity) => {
    product.qty += quantity;
    let tempval = [...cart, product];

    if ("cartItems" in window.sessionStorage) {
      let cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));

      cartItems.map((item) => {
        if (item.id === product.id) {
          item.qty += quantity;
        }
        return item;
      });

      if (cartItems.find((item) => item.id === product.id)) {
        tempval = cartItems;
      } else {
        tempval = [...cartItems, product];
      }
    }

    window.sessionStorage.setItem("cartItems", JSON.stringify(tempval));
    setCart([...tempval]);
  };

  useEffect(() => {
    const storageCart = window.sessionStorage.getItem("cartItems")
    if (storageCart) {
     
      setCart(JSON.parse(storageCart))
    }     

    // setCart(storageCart);
  }, []);

  const filterBy = async (code, topic) => {
    let response = await axios.get(
      `http://localhost:5000/products/${code}/${topic}`
    );

    setProducts(response.data.data);
  };

  const getAllProducts = async () => {
    let response = await axios.get(`http://localhost:5000/products`);

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

  return (
    <Router>
      <Route
        exact
        path="/search"
        render={() => (
          <>
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <SearchResults searchResults={searchResults} value={value} />
          </>
        )}
      />

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
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <CartScreen removeFromCart={removeFromCart} cart={cart} />
          </>
        )}
      />
      <Route
        exact
        path="/home"
        render={() => (
          <>
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <Home name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/sale"
        render={() => (
          <>
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <Countdown />
          </>
        )}
      />
      <Route
        exact
        path="/shop"
        render={() => (
          <>
            <Navbar
              SearchBar={SearchBar}
              wishlist={wishlist}
              cart={cart}
              name={name}
            />
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
            <Navbar
              SearchBar={SearchBar}
              wishlist={wishlist}
              cart={cart}
              name={name}
            />
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
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
              addToCart={addToCart}
            />
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
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />

            <ProductPage
              cart={cart}
              addToCart={addToCart}
              products={products}
              searchResults={searchResults}
              value={value}
            />
          </>
        )}
      />
      <Route
        exact
        path="/wishlist"
        render={() => (
          <>
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
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
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <SkinEducation />
          </>
        )}
      />
      <Route
        exact
        path="/checkout"
        render={() => (
          <>
            <Navbar
              wishlist={wishlist}
              cart={cart}
              name={name}
              SearchBar={SearchBar}
            />
            <Checkout />
          </>
        )}
      />
    </Router>
  );
}

export default App;
