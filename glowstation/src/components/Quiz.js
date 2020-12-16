import React from "react";
import "../css/Quiz.css";

const Quiz = () => {
  return (
    <>
      <div className="questions">
        <div className="toggleOne">
          <div className="box">
            <h1 className="Q1">What is your skin type?</h1>
            <h4 className="one">Select One.</h4>
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
        {/* <div className="toggleTwo">
          <div className="box">
            <div className="Q2">
              Select <b>primary</b> a skin concern. You'll have the chance to
              select <b>2</b> more in upcoming questions.
            </div>
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
            <div className="Q3">
              Select <b>secondary</b> a skin concern. You'll have the chance to
              select <b>1</b> more in upcoming questions.
            </div>
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
            <div className="Q4">
              Select a final skin concern you would like to address.
            </div>
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
        </div> */}
        <div className="next">
          <button className="nextBtn">Next</button>
        </div>
      </div>

      <div className="results">
        <button className="resultsBtn">Get Results</button>
      </div>
    </>
  );
};

export default Quiz;
