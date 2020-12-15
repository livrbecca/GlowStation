// import Quiz from "react-quiz-component";
// import { Link } from "react-router-dom";
// import React from "react";

const quiz = {
  quizTitle:
    "Routine Builder. findOne the perfect skincare routine right for you!",
  quizSynopsis:
    "Are you unsure of what products you should be using? Or what products suit your skin type and concerns? Take the Routine Builder and findOne out!",
  questions: [
    {
      question: "What is your skin type?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: ["Oily", "Dry", "Combination", "Sensitive"],
      correctAnswer: [1, 2, 3, 4],
      point: "20",
      // should generate a cleanser, moisturiser and SPF that matches the skin type, be stored in a variablwe ready to be displayed at the end
      // the filter command in Mongodb would be:
      // db.products.findOne({$and:[{"category":"Cleansers"},{"skinType":"Oily"}]});
      // db.products.findOne({$and:[{"category":"Moisturisers"},{"skinType":"${case}"}]});
      // db.products.findOne({$and:[{"category":"SPF"},{"skinType":"${case}"}]});
    },
    {
      question:
        "Select primary a skin concern. You'll have the chance to select 2 more in upcoming questions.",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Acne & Blackheads",
        "Texture",
        "Eye Concerns",
        "Brightening & Hyperpigmentation",
        "Lines & Wrinkles",
        "Redness",
        "Visible Pores",
        "Hydration",
      ],
      correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
      point: "10",
      // answer should be stored in a variable
      // serums, toner, exfoliator
      // db.products.findOne({$and:[{"category":"Serums"},{"skinConcern":"Acne & Blackheads"}]});
      // db.products.findOne({$and:[{"category":"Serums"},{"skinConcern":"${case}"}]});
    },
    {
      question:
        "Select secondary a skin concern. You'll have the chance to select 1 in the next question.",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Acne & Blackheads",
        "Texture",
        "Eye Concerns",
        "Brightening & Hyperpigmentation",
        "Lines & Wrinkles",
        "Redness",
        "Visible Pores",
        "Hydration",
      ],
      correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
      point: "10",
      // answer should be stored in a variable
      // serums, toner, exfoliator
      // db.products.findOne({$and:[{"category":"Toners & Mists"},{"skinConcern":"Acne & Blackheads"}]});
      // db.products.findOne({$and:[{"category":"Toners & Mists"},{"skinConcern":"${case}"}]});
    },
    {
      question: "Select a final skin concern you would like to address.",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Acne & Blackheads",
        "Texture",
        "Eye Concerns",
        "Brightening & Hyperpigmentation",
        "Lines & Wrinkles",
        "Redness",
        "Visible Pores",
        "Hydration",
      ],
      correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
      point: "10",
      // answer should be stored in a variable
      // serums, toner, exfoliator
      // db.products.findOne({$and:[{"category":"Exfoliators"},{"skinConcern":"Brightening & Hyperpigmentation"}]});
      // db.products.findOne({$and:[{"category":"Exfoliators"},{"skinConcern":"${case}"}]});
    },
  ],
  appLocale: {
    landingHeaderText: "<questionLength> Questions",
    question: "Question",
    startQuizBtn: "Start Quiz",
    resultFilterAll: "All",
    resultFilterCorrect: "Correct",
    resultFilterIncorrect: "Incorrect",
    nextQuestionBtn: "Next",
    resultPageHeaderText:
      "Next Stop - Your results!",
  },
};

export default quiz;
