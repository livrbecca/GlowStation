import React from "react";
import "../css/ResultScreen.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

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
          {cleanser.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP TWO - Optional</p>
          {mask.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP THREE</p>
          {toner.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP FOUR</p>
          {exfoliator.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP FIVE - Optional</p>
          {mist.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP SIX</p>
          {serum.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>STEP SEVEN</p>
          {moisturiser.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>OPTIONAL</p>
          {oil.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
        <div className="resultBox">
          <p>RECOMMENDED FOR AM USE.</p>
          {SPF.data.map((value, key) => {
            return (
              <Fragment key={key}>
                <p>{value.name}</p>
                <p>£{value.price.toFixed(2)}</p>
                <img
                  className="productpic"
                  src={value.imageLinks.img1}
                  alt={value.name}
                />
                <p className="iconDes">{value.description.smallDes}</p>
              </Fragment>
            );
          })}
          <button className="addButtons">Add to Wishlist</button>
          <button className="addButtons">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;
