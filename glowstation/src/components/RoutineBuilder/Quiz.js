import React, { useRef } from "react";
import "./Quiz.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Axios from "axios";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Quiz = (props) => {
  //scroll functionality
  const myRef = useRef(null);
  let executeScroll = () => scrollToRef(myRef);

  const myRef1 = useRef(null);
  let executeScroll1 = () => scrollToRef(myRef1);

  const myRef2 = useRef(null);
  let executeScroll2 = () => scrollToRef(myRef2);

  const myRef3 = useRef(null);
  let executeScroll3 = () => scrollToRef(myRef2);

  let skinType = "";
  let skinConcern222 = "";

  async function setQ1(skinType) {
    const category = ["Moisturisers", "SPF", "Masks", "Oils"];

    let response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[0]}&skinType=${skinType}`
    ).then((res) => res.data);

    props.setMoisturiser(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[1]}&skinType=${skinType}`
    ).then((res) => res.data);

    props.setSPF(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[2]}&skinType=${skinType}`
    ).then((res) => res.data);

    props.setMask(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[3]}&skinType=${skinType}`
    ).then((res) => res.data);

    props.setOil(response);
    console.log(response)
  }

  async function test(skinType) {
    const category = ["Cleansers"];

    let response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[0]}&skinType=${skinType}`
    ).then((res) => res.data);
    props.setCleanser(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/results?category=${category[0]}&skinType=${skinType}`
    ).then((res) => res.data);

    props.setCleanser(response);
    console.log(response);
  }

  let encodedConcern = encodeURIComponent(skinConcern222);
  const encodedAcne = encodeURIComponent("Acne & Blackheads");
  const encodedPores = encodeURIComponent("Visible Pores");
  const encodedLines = encodeURIComponent("Lines & Wrinkles");
  const encodedBrightening = encodeURIComponent("Brightening & Hyperpigmentation");

  async function setQ2(skinConcern222) {
    const category = ["Exfoliators"];

    let response = await Axios.get(
      `http://localhost:5000/products/res?category=${category}&skinConcern222=${encodedConcern}`
    ).then((res) => res.data);

    props.setExfoliator(response);
    console.log(response)
  }

  async function setQ3(skinConcern222) {
    const encodedCategory = encodeURIComponent("Toners & Essence");

    const category = ["Serums", encodedCategory, "Mists"];

    let response = await Axios.get(
      `http://localhost:5000/products/res?category=${category[0]}&skinConcern222=${encodedConcern}`
    ).then((res) => res.data);

    props.setSerum(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/res?category=${encodedCategory}&skinConcern222=${encodedConcern}`
    ).then((res) => res.data);

    props.setToner(response);
    console.log(response)

    response = await Axios.get(
      `http://localhost:5000/products/res?category=${category[2]}&skinConcern222=${encodedConcern}`
    ).then((res) => res.data);

    props.setMist(response);
    console.log(response)
  }

  function getBothResults() {
    setQ3(skinConcern222);
    setQ2(skinConcern222);
    setQ1(skinType);
    test(skinType);
  }

  return (
    <>
      <Link to="/home">
        <button className="miniButton">Home</button>
      </Link>
      <div className="questions">
        <div onClick={executeScroll} className="toggleOne">
          <div className="box">
            <h1 className="Q1">
              <Typewriter delay={99} string="What is your skin type?" />
            </h1>
            <RadioGroup onChange={(value) => (skinType = value)} horizontal>
              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Oily"
              >
                Oily
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Dry"
              >
                Dry
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Combination"
              >
                Combination
              </RadioButton>
            </RadioGroup>
          </div>
        </div>

        <div ref={myRef}></div>
        <div onClick={executeScroll1} className="test">
          <div className="box test">
            <h1 className="test">
              <Typewriter delay={99} string="Do you have sensitive skin?" />
            </h1>
            <RadioGroup onChange={(value) => (skinType = value)} horizontal>
              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Sensitive"
              >
                Yes
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Combination"
              >
                No
              </RadioButton>
            </RadioGroup>
          </div>
        </div>

        <div ref={myRef1}></div>
        <div onClick={executeScroll2} className="toggleTwo">
          <div className="box">
            <h1 className="Q2">
              <Typewriter
                delay={180}
                string="Do you want to address any of the concerns below?"
              />
            </h1>
            <RadioGroup
              onChange={(value) => (encodedConcern = value)}
              horizontal
            >
              <RadioButton
                className="selectionBtn!"
                pointColor="purple"
                rootColor="black"
                value={encodedAcne}
              >
                Reducing Acne & Blackheads
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Texture"
              >
                Reducing Texture
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value={encodedPores}
              >
                Minimising Visible Pores
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value={encodedBrightening}
              >
                Nope
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
        <div ref={myRef2}></div>
        <div onClick={executeScroll3} className="toggleThree">
          <div className="box">
            <h1 className="Q3">
              <Typewriter delay={180} string="Select a skincare goal" />
            </h1>
            <RadioGroup
              onChange={(value) => (encodedConcern = value)}
              horizontal
            >
              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Hydration"
              >
                Fix Tight, Dehydrated Skin
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value="Redness"
              >
                Reducing Redness
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value={encodedLines}
              >
                Reduce Fine Lines and Wrinkles
              </RadioButton>

              <RadioButton
                className="selectionBtn"
                pointColor="purple"
                rootColor="black"
                value={encodedBrightening}
              >
                Brighten Skin / Reduce Dark Marks
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
        <div ref={myRef3}></div>
      </div>

      <div className="loading3">
        <Link to="/loading3">
          {/* button to be disabled until final question answered */}
          <button
            onClick={() => getBothResults(skinType, skinConcern222)}
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

export default Quiz;
