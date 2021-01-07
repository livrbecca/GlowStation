import React from "react";
import "../css/ResultScreen.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";

const ResultsScreen = ({
  name,
  cleanser,
  moisturiser,
  SPF,
  mask,
  mist,
  oil,
  serum,
  exfoliator,
  toner,
}) => {
  console.log(toner.data);
  return (
    <>
      <Link to="/routinebuilder">
        <button className="miniButton">Re-take</button>
      </Link>
      <h2 style={{ textTransform: "capitalize" }} className="nameTitle">
        {name}
        <Typewriter string="'s Routine." /> &darr;
      </h2>

      <div className="resultDivs">
        <div className="resultBox">
          <p>STEP ONE</p>
          <p>{cleanser.data[0].name}</p>
          <p>£{cleanser.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={cleanser.data[0].imageLinks.img1}
            alt={cleanser.data[0].name}
          />
          <p className="iconDes">{cleanser.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP TWO - Optional</p>
          <p>{mask.data[0].name}</p>
          <p>£{mask.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={mask.data[0].imageLinks.img1}
            alt={mask.data[0].name}
          />
          <p className="iconDes">{mask.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP THREE</p>
          <p>{toner.data[0].name}</p>
          <p>£{toner.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={toner.data[0].imageLinks.img1}
            alt={toner.data[0].name}
          />
          <p className="iconDes">{toner.data[0].description.smallDes}</p>

          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP FOUR</p>
          <p>{exfoliator.data[0].name}</p>
          <p>£{exfoliator.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={exfoliator.data[0].imageLinks.img1}
            alt={exfoliator.data[0].name}
          />
          <p className="iconDes">{exfoliator.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP FIVE - Optional</p>
          <p>{mist.data[0].name}</p>
          <p>£{mist.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={mist.data[0].imageLinks.img1}
            alt={mist.data[0].name}
          />
          <p className="iconDes">{mist.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP SIX</p>
          <p>{serum.data[0].name}</p>
          <p>£{serum.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={serum.data[0].imageLinks.img1}
            alt={serum.data[0].name}
          />
          <p className="iconDes">{serum.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP SEVEN</p>
          <p>{moisturiser.data[0].name}</p>
          <p>£{moisturiser.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={moisturiser.data[0].imageLinks.img1}
            alt={moisturiser.data[0].name}
          />
          <p className="iconDes">{moisturiser.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>OPTIONAL</p>
          <p>{oil.data[0].name}</p>
          <p>£{oil.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={oil.data[0].imageLinks.img1}
            alt={oil.data[0].name}
          />
          <p className="iconDes">{oil.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>RECOMMENDED FOR AM USE.</p>
          <p>{SPF.data[0].name}</p>
          <p>£{SPF.data[0].price.toFixed(2)}</p>
          <img
            className="productpic"
            src={SPF.data[0].imageLinks.img1}
            alt={SPF.data[0].name}
          />
          <p className="iconDes">{SPF.data[0].description.smallDes}</p>
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;
