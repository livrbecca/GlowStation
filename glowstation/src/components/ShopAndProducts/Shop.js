import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = (props) => {
  let code = "category";
  let topic = ["Cleansers", "Serums", "Moisturisers", "Masks"];
  return (
    <div>
      <Link to="loading2">
      <img className="moneyOff" src="percentOff.png" alt="money off"/>
      </Link>
      <div className="togetherIntro">
        <h2 className="skincareCaps">
          <i>SKINCARE.</i>
        </h2>
        <img
          className="maleSkincare"
          src="https://beautynews.com.au/wp-content/uploads/2018/10/28-Skincare-for-men.png"
          alt="mens skincare"
        />
        <p className="introText">
          Rule one in beauty is that you can own the best make up in the world,
          but it won't look good unless your skin is happy, healthy and
          nourished. Skin care can be a tricky category to navigate - buried in
          confusing pseudo-science and baffling beauty marketing - so we've
          focused on curating a selection of the best skin care products that
          work quickly, presented in plain-speaking terms that help cut through
          the hyperbole.
        </p>
        <p className="introText">
          We've something for every complexion. Here at Glow Station, skincare
          is for <b>all</b>.
        </p>
      </div>
      <div className="circleAds">
        <img
          className="miniCircle"
          src="https://i.pinimg.com/originals/05/1f/a7/051fa701556a73d25960dfa611b64af2.gif"
          alt="shop all"
          onClick={() => {
            props.getAllProducts();
          }}
        />
        <h4 className="circleText">All</h4>
        <br />
        <img
          className="miniCircle"
          src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/08/Fresh-Soy-Face-Cleanser.gif"
          alt="cleanser"
          onClick={() => {
            props.filterBy(code, topic[0]);
          }}
        />
        <h4 className="circleText">Cleansers</h4>
        <img
          className="miniCircle"
          src="https://www.byrdie.com/thmb/VfYpPPpfSj1gOTNdk751skw4arI=/1200x800/filters:fill(auto,1)/face-serums-411bd441de0241ee90b1904c0f7e4147-3382b7142e674689960c52322af7c358.gif"
          alt="serum"
          onClick={() => {
            props.filterBy(code, topic[1]);
          }}
        />
        <h4 className="circleText">Serums</h4>
        <img
          className="miniCircle"
          src="https://i.pinimg.com/originals/a8/62/08/a86208d2364fb26c5118616ba6170455.gif"
          alt="moisturisers"
          onClick={() => {
            props.filterBy(code, topic[2]);
          }}
        />
        <h4 className="circleText">Moisturisers</h4>
        <img
          className="miniCircle"
          src="https://media0.giphy.com/media/2xPPDc9lh6PNDXppi9/source.gif"
          alt="face masks"
          onClick={() => {
            props.filterBy(code, topic[3]);
          }}
        />
        <h4 className="circleText">Face Masks</h4>
      </div>
      <div className="shopContainer">{props.products}</div>
    </div>
  );
};
export default Shop;
