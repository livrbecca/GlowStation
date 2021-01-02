import React from "react";
import "../css/ResultScreen.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

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
      <h2 style={{ textTransform: "capitalize" }} className="nameTitle">
        {name}
        <Typewriter
          stopBlinkinOnComplete="true"
          string="'s Routine Builder results."
        />
      </h2>
      <p className="intro">
        The order you layer your skincare products is important. The wrong order
        can lead to either pilling (where your products don't absorb and roll up
        into little gritty balls), or the products become ineffective becasue
        they're not being used as intended or absorbed by the skin correctly.
        Follow this custom routine built just for you to layer your products
        correctly and have the perfect routine for your needs. The Routine
        Builder gives you your ideal AM (morning) and PM (night-time) routine.
        As well as products that aren't <i>necessary</i> but complementary in
        the Optional box. These products can also aid in meeting your skincare
        goals so be use to check them out.
      </p>
      <div className="resultDivs">
        <div className="resultBox">
          <p>{cleanser.data[0].name}</p>
          <p>{cleanser.data[0].price}</p>
          <img
            className="productpic"
            src={cleanser.data[0].imageLinks.img1}
            alt={cleanser.data[0].name}
          />
        </div>
        <div className="resultBox">
          {" "}
          <p>{mask.data[0].name}</p>
          <p>{mask.data[0].price}</p>
          <img
            className="productpic"
            src={mask.data[0].imageLinks.img1}
            alt={mask.data[0].name}
          />
        </div>
        <div className="resultBox">
          {/* <p>{toner.data[0].name}</p>
            <p>{toner.data[0].price}</p>
            <img className="productpic" src={toner.data[0].imageLinks.img1}
              alt={toner.data[0].name}
            /> */}
        </div>
        <div className="resultBox">
          <p>{exfoliator.data[0].name}</p>
          <p>{exfoliator.data[0].price}</p>
          <img
            className="productpic"
            src={exfoliator.data[0].imageLinks.img1}
            alt={exfoliator.data[0].name}
          />
        </div>
        <div className="resultBox">
          <p>{mist.data[0].name}</p>
          <p>{mist.data[0].price}</p>
          <img
            className="productpic"
            src={mist.data[0].imageLinks.img1}
            alt={mist.data[0].name}
          />
        </div>
        <div className="resultBox">
          <p>{serum.data[0].name}</p>
          <p>{serum.data[0].price}</p>
          <img
            className="productpic"
            src={serum.data[0].imageLinks.img1}
            alt={serum.data[0].name}
          />
        </div>
        <div className="resultBox">
          <p>{moisturiser.data[0].name}</p>
          <p>{moisturiser.data[0].price}</p>
          <img
            className="productpic"
            src={moisturiser.data[0].imageLinks.img1}
            alt={moisturiser.data[0].name}
          />
        </div>
        <div className="resultBox">
          <p>{oil.data[0].name}</p>
          <p>{oil.data[0].price}</p>
          <img
            className="productpic"
            src={oil.data[0].imageLinks.img1}
            alt={oil.data[0].name}
          />
        </div>
        <div className="resultBox">
          <p>{SPF.data[0].name}</p>
          <p>{SPF.data[0].price}</p>
          <img
            className="productpic"
            src={SPF.data[0].imageLinks.img1}
            alt={SPF.data[0].name}
          />
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;
