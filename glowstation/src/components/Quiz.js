import React, { useRef } from "react";
import "../css/Quiz.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Axios from "axios";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Quiz = (props) => {
  //scroll functionality
  console.log(props.setMoisturiser);
  const myRef = useRef(null);
  let executeScroll = () => scrollToRef(myRef);

  const myRef1 = useRef(null);
  let executeScroll1 = () => scrollToRef(myRef1);

  let skinType = "";

  async function resultsCat(skinType) {
    const category = ["Cleanser", "Moisturisers", "SPF"];

    // let response = await Axios.get(
    //   `localhost:5000/products/results?category=${category[0]}&skinType=${skinType}`
    // ).then((res) => res.data);
    // console.log(response)
    // setCleanser(response);

    let response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[1]}&skinType=${skinType}`
    ).then((res) => res.data);
    console.log(response.data);
    props.setMoisturiser(response);

    // response = await Axios.get(
    //   `localhost:5000/products/results?category=${category[2]}&skinType=${skinType}`
    // ).then((res) => res.data);
    // console.log(response)
    // setSPF(response);
  }

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
            <RadioGroup onChange={(value) => (skinType = value)} horizontal>
              <RadioButton rootColor="purple" value="Oily">
                {" "}
                Oily{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Dry">
                {" "}
                Dry{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Combination">
                Combination{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Sensitive">
                Sensitive{" "}
              </RadioButton>
            </RadioGroup>
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
            <RadioGroup horizontal>
              <RadioButton rootColor="purple" value="Acne & Blackheads">
                Acne & Blackheads
              </RadioButton>

              <RadioButton rootColor="purple" value="Texture">
                {" "}
                Texture{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Eye Concerns">
                Eye Concerns{" "}
              </RadioButton>

              <RadioButton
                rootColor="purple"
                value="Brightening & Hyperpigmentation"
              >
                Brightening & Hyperpigmentation
              </RadioButton>

              <RadioButton rootColor="purple" value="Lines & Wrinkles">
                Lines & Wrinkles
              </RadioButton>

              <RadioButton rootColor="purple" value="Redness">
                {" "}
                Redness{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Visible Pores">
                Visible Pores{" "}
              </RadioButton>

              <RadioButton rootColor="purple" value="Hydration">
                Hydration{" "}
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
        <div ref={myRef1}></div>
      </div>

      <div className="loading3">
        <Link to="/loading3">
          {/* button to be disabled until final question answered */}
          <button
            onClick={() => resultsCat(skinType)}
            type="submit"
            className="resultsBtn"
          >
            Get Results
          </button>
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
