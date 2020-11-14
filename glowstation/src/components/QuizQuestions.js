var QuizQuestions = [
    // question #1
  { 
    question: "What are your skincare goals?",
    instruction: "Select three.",
    answers: [
      {
        type: {
          "acne": true,
          "texture": true,
          "blacheads": true,
        },
        content: "Reduce Acne and/or Blackheads",
      },
      {
        type: {
          "texture": true,
          "dullSkin": true,
        },
        content: "Improve Texture",
      },
      {
        type: {
          "hyperpigmentation": true,
          "dullSkin": true,
        },
        content: "Reduce Hyperpigmentation",
      },
      {
        type: {
          "redness": true,
        },
        content: "Reduce Redness",
      },
      {
        type: {
          "darkCirlces": true,
          "hydration": true,
          "hyperpigmentation": true,
          "dullSkin": true,
          "drySkin":true,
        },
        content: "Brighten skin",
      },
      {
        type: {
          "linesAndWrinkes": true,
          "darkCirlces": true,
          "hydration": true,
        },
        content: "Reduce Fine Lines and Wrinkes",
      },
      {
        type: {
          "oilySkin": true,
          "visiblePores": true,
          "hydration": true,
        },
        content: "Target Oily Skin and Reduce Visible Pores",
      },
      {
        type: {
          "drySkin": true,
          "hydration": true,
        },
        content: "Target Dry Skin",
      },     
    ],
  },
  //question #2
  { 
    question: "Do you have dark cirlces, fine lines or puffiness in the eye area?",
    instruction: "Select one.",
    answers: [
      {
        type: {
          "darkCircles": true,
          "linesAndWrinkles": true,
        },
        content: "Yes",
      },
      {
        type: {
          "darkCircles": false,
          "linesAndWrinkes": false,
        },
        content: "No",
      }    
    ],
  },
  //question #3
  { 
    question: "What's your skin type?",
    instruction: "Select one.",
    answers: [
      {
        type: {
          "oilySkin": true,
        },
        content: "Oily Skin",
      },
      {
        type: {
          "drySkin": true,
          
        },
        content: "Dry Skin",
      },
      {
        type: {
          "combination": true,
        },
        content: "Combination",
      }
    ],
  },
  //question #4
  { 
    question: "Do you have sensitive skin?",
    instruction: "Select one.",
    answers: [
      {
        type: {
          "sensitive": true,
        },
        content: "Yes",
      },
      {
        type: {
          "sensitive": false,
          
        },
        content: "No",
      }  
    ],
  },
];

export default QuizQuestions;
