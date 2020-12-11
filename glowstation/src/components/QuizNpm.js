import Quiz from "react-quiz-component";
import { Link } from "react-router-dom";
import React from "react";

const quiz = {
  quizTitle: "Custom Routine Builder. Find the skincare routine right for you!",
  quizSynopsis:
    "Are you unsure of what products you should be using? Or what products suit your skin type and concerns? Take the Routine Builder and find out!",
  questions: [
    {
      question: "What is your skin type?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: ["Oily", "Dry", "Combination", "Sensitive"],
      correctAnswer: [1, 2, 3, 4],
      messageForCorrectAnswer: "",
      // switch (correctAnswer)
      // case "1"
      // return "Glow Station Information Alert! Did you know this about ${case} skin: xyz"
      // break ;

      // case "2"
      // return "Glow Station Information Alert! Did you know this about ${case} skin: xyz"
      // break ;

      // case "3"
      // return "Glow Station Information Alert! Did you know this about ${case} skin: xyz"
      // break ;

      // case "4"
      // return "Glow Station Information Alert! Did you know this about ${case} skin: xyz"
      // break ;

      messageForIncorrectAnswer: "",
      explanation: "info about finding out skin type",
      point: "20", //point: skinType.${case}, for all the products that match, randomise and pick one to return 
    },
    {
      question: "Do you have any under eye concerns?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: ["Yes", "No"],
      correctAnswer: [1, 2],
      messageForCorrectAnswer: "",
      // switch (correctAnswer)
      // case "1"
      // return "That's fine. Life gets the best of all of us. Under eye issues can be related to either a lack of sleep or plain old genetics.  We'll suggest our eye care range to help you with any and every concern."
      // break ;

      // case "2"
      // return "Whew, lucky you!"
      // break ;

      messageForIncorrectAnswer: "",
      explanation:
        "The effectiveness of eye creams is debatable for some. Soem swear by eye creams and have seen results with certain ones, others say just get under eye filler and call it a day, as they're the only thing promised to show instant results.",
      point: "20", //point:  if ( correctAnswer === 1) {"suggestEyeCreams"}//this should be a function which returns link to filtered products of eye creams// else{return ""}, or another way of returning nothing
    },
    {
      question: "ReactJS is an MVC based framework?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    },
    {
      question: "Which of the following concepts is/are key to ReactJS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "30",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      questionType: "photo",
      answerSelectionType: "single",
      answers: [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "What are the advantages of React JS?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
  ],
};

export default quiz;
