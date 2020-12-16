// //import Quiz from "react-quiz-component";
// // import { Link } from "react-router-dom";
// // import React from "react";

// export const skinquiz = {
//   // quizTitle:
//   //   "Routine Builder. Find the perfect skincare routine right for you!",
//   // quizSynopsis:
//   //   "Are you unsure of what products you should be using? Or what products suit your skin type and concerns? Take the Routine Builder and findOne out!",
//   questions: [
//     {
//       question: "What is your skin type?",
//       answers: ["Oily", "Dry", "Combination", "Sensitive"],
//       correctAnswer: ,
//       point: "20",
//       // should generate a cleanser, moisturiser and SPF that matches the skin type, be stored in a variable ready to be displayed at the end
//       // the filter command in Mongodb would be:
//       // db.products.findOne({$and:[{"category":"Cleansers"},{"skinType":"Dry"}]});
//       // db.products.findOne({$and:[{"category":"Moisturisers"},{"skinType":"${case}"}]});
//       // db.products.findOne({$and:[{"category":"SPF"},{"skinType":"${case}"}]});
//       // http://localhost:5000/products?category=SPF&skinType=Oily
//       // http://localhost:5000/products?category=SPF,Cleanesers, Mosterisure&skinType=Oily


//     },
//     {
//       question:
//         "Select primary a skin concern. You'll have the chance to select 2 more in upcoming questions.",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: [
//         "Acne & Blackheads",
//         "Texture",
//         "Eye Concerns",
//         "Brightening & Hyperpigmentation",
//         "Lines & Wrinkles",
//         "Redness",
//         "Visible Pores",
//         "Hydration",
//       ],
//       correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
//       point: "10",
//       // answer should be stored in a variable
//       // serums, toner, exfoliator
//       // db.products.findOne({$and:[{"category":"Serums"},{"skinConcern":"Acne & Blackheads"}]});
   
//     },
//     {
//       question:
//         "Select secondary a skin concern. You'll have the chance to select 1 in the next question.",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: [
//         "Acne & Blackheads",
//         "Texture",
//         "Eye Concerns",
//         "Brightening & Hyperpigmentation",
//         "Lines & Wrinkles",
//         "Redness",
//         "Visible Pores",
//         "Hydration",
//       ],
//       correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
//       point: "10",
//       // answer should be stored in a variable
//       // serums, toner, exfoliator
//       // db.products.findOne({$and:[{"category":"Toners & Mists"},{"skinConcern":"Acne & Blackheads"}]});
      
//     },
//     {
//       question: "Select a final skin concern you would like to address.",
//       questionType: "text",
//       answerSelectionType: "single",
//       answers: [
//         "Acne & Blackheads",
//         "Texture",
//         "Eye Concerns",
//         "Brightening & Hyperpigmentation",
//         "Lines & Wrinkles",
//         "Redness",
//         "Visible Pores",
//         "Hydration",
//       ],
//       correctAnswer: [1, 2, 3, 4, 5, 6, 7, 8],
//       point: "10",
//       // answer should be stored in a variable
//       // serums, toner, exfoliator
//       // db.products.findOne({$and:[{"category":"Exfoliators"},{"skinConcern":"Brightening & Hyperpigmentation"}]});
      
//     },
//   ],
//   appLocale: {
//     landingHeaderText: "Click begin once you have read this disclaimer: For serious and/or medical skin concerns please speak to your doctor or dermatologist, aviod self-diagnosing online. Skincare should be fun and safe! ",
//     question: "Question",
//     startQuizBtn: "Begin.",
//     resultFilterAll: "All",
//     nextQuestionBtn: "Next",
//     resultPageHeaderText:
//       "Next Stop - Your results!",
//   },
// };

