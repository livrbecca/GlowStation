import React from "react";
import "../css/Quiz.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div className="questions">
        <div className="toggleOne">
          <div className="box">
            <h1 className="Q1">
              {/* DETERMINES category: 
            Cleansers,
            Moisturisers,
            SPF
            */}
              <Typewriter delay={99} string="What is your skin type?" />
            </h1>
            <h4 className="one">
              <Typewriter string="select one." />
            </h4>
            <button onClick={() => {}} className="selectionBtn">
              Oily
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Dry
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Combination
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Sensitive
            </button>
          </div>
        </div>
        <div className="toggleTwo">
          <div className="box">
            <h1 className="Q2">
              {/* DETERMINES category: 
            Serums
            */}
              <Typewriter
                delay={180}
                string=" Select a primary skin concern."
              />
            </h1>
            <button onClick={() => {}} className="selectionBtn">
              Acne & Blackheads
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Texture
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Eye Concerns
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Brightening & Hyperpigmentation
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Lines & Wrinkles
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Redness
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Visible Pores
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Hydration
            </button>
          </div>
        </div>
        <div className="toggleThree">
          <div className="box">
            <h1 className="Q3">
              {/* DETERMINES category: 
            Exfoliators
            */}
              <Typewriter
                delay={280}
                string=" Select a secondary skin concern."
              />
            </h1>
            <button onClick={() => {}} className="selectionBtn">
              Acne & Blackheads
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Texture
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Eye Concerns
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Brightening & Hyperpigmentation
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Lines & Wrinkles
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Redness
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Visible Pores
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Hydration
            </button>
          </div>
        </div>
        <div className="toggleFour">
          <div className="box">
            <h1 className="Q4">
              {/* DETERMINES category: 
            Toners & Essence
            */}
              <Typewriter string="Select a final skin concern you would like to address." />
            </h1>
            <button onClick={() => {}} className="selectionBtn">
              Acne & Blackheads
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Texture
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Eye Concerns
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Brightening & Hyperpigmentation
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Lines & Wrinkles
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Redness
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Visible Pores
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Hydration
            </button>
          </div>
        </div>
        <div className="next"></div>
      </div>

      <div className="results">
        <button className="resultsBtn">Get Results</button>
      </div>
    </>
  );
};

export default Quiz;
