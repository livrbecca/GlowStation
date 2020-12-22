import React, { useRef } from "react";
import "../css/Quiz.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";
// import axios from "axios";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Quiz = () => {
  //scroll functionality
  const myRef = useRef(null);
  let executeScroll = () => scrollToRef(myRef);

  const myRef1 = useRef(null);
  let executeScroll1 = () => scrollToRef(myRef1);

  const myRef3 = useRef(null);
  let executeScroll3 = () => scrollToRef(myRef3);

  //routine builder results

  //PLAN.

  // need to set up Routes on server.js that allow for category/somethingElse other than category/category

  // const [results, setResults] = useState([]), will need to pass setResults={setResults} to the results page so products render there

  // const calculateResults = async (topic) => {
  //   let response = await axios.get(

  // to get categories
  //     `http://localhost:5000/products/category/Cleanser`
  //      `http://localhost:5000/products/category/Moisturisers`
  //      `http://localhost:5000/products/category/SPF`
  //   );
  //   console.log(response);

  //   setResults(response.data.data);
  // };

  return (
    <>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div className="questions">
        <div onClick={executeScroll} className="toggleOne">
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
              {/* const cleasner = product pulled from link
                  const moisturiser =
                  cosnt SPF = 
              */}
              {/* Cleanser/Oily, Moisturisers/Oily, SPF/Oily */}
              Oily
            </button>
            <button onClick={() => {}} className="selectionBtn">
              {/* Cleanser/Dry, Moisturisers/Dry, SPF/Dry */}
              Dry
            </button>
            <button onClick={() => {}} className="selectionBtn">
              {/* Cleanser/Combination, Moisturisers/Combination, SPF/Combination */}
              Combination
            </button>
            <button onClick={() => {}} className="selectionBtn">
              {/* Cleanser/Sensitive, Moisturisers/Sensitive, SPF/Sensitive */}
              Sensitive
            </button>
          </div>
        </div>
        <div ref={myRef}></div>
        <div onClick={executeScroll1} className="toggleTwo">
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
              {/* const serums = Serums/Texture etc*/}
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
        <div ref={myRef1}></div>
        <div onClick={executeScroll3} className="toggleThree">
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
              Brightening & Hyperpigmentation
            </button>
            <button onClick={() => {}} className="selectionBtn">
              Lines & Wrinkles
            </button>
            <button onClick={() => {}} className="selectionBtn">
              {/* const exfoliators =  products/Exfoliators/Redness*/}
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
        <div ref={myRef3}></div>
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
              {/* const toners =  products/Toners&Essense/Hydration*/}
              Hydration
            </button>
          </div>
        </div>
      </div>

      <div className="loading3">
        <Link to="/loading3">
          {/* button to be disabled until final question answered */}
          <button className="resultsBtn">Get Results</button>
        </Link>
      </div>
    </>
  );
};
// using [results, setResults] = useState([]) from above
// let { cleanser, toner, exfoliator, serum, moisturiser, SPF } = results
//setResults(results) - pass this to the results page
// setResults={setResults}

export default Quiz;
