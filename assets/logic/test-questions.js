let questions = [
  {
    questionText: "What is bootstrap?",
    answers: [
      {
        text: "Something you use on your shoes.",
        correct: false,
      },
      {
        text: "A CSS framework.",
        correct: true,
      },
      {
        text: "A backend programming language.",
        correct: false,
      },
      {
        text: "A database management system.",
        correct: false,
      },
    ],
  },
  {
    questionText: "What is hoisting?",
    answers: [
      {
        text: "When you redeclare a vaiable.",
        correct: false,
      },
      {
        text: "The authority of 'this' within a script.",
        correct: false,
      },
      {
        text:
          "When variables and functions are moved to the top of a javascript file upon compilation.",
        correct: true,
      },
      {
        text: "When a really strong person lifts something heavy.",
        correct: false,
      },
    ],
  },
  {
    questionText: "What does DOM stand for in relation to web browsers?",
    answers: [
      {
        text: "Document object model.",
        correct: true,
      },
      {
        text: "Direct object model.",
        correct: false,
      },
      {
        text: "Document object maintenance.",
        correct: false,
      },
      {
        text: "Do over method",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "When adding script tags to your HTML document, where is the safest place to put them?",
    answers: [
      {
        text: "Outside of the <html></html> tags.",
        correct: false,
      },
      {
        text: "At the very top of the document.",
        correct: false,
      },
      {
        text: "In the <head></head> tag.",
        correct: false,
      },
      {
        text: "Right before the end of the <body></body> tag.",
        correct: true,
      },
    ],
  },
  {
    questionText:
      "If you refer to 'this' in a nested function of a function within an object, what does it return? (Note: no prototype methods are used).",
    answers: [
      {
        text: "The object it is within.",
        correct: false,
      },
      {
        text: "The window object.",
        correct: true,
      },
      {
        text: "The nearest variable declaration.",
        correct: false,
      },
      {
        text: "The current class you are in.",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "What is the proper way to link a CSS file in the header of your HTML?",
    answers: [
      {
        text: '<link rel="stylesheet" href="{cssfilepath}" />',
        correct: true,
      },
      {
        text: '<link rel="css" href="{cssfilepath}" />',
        correct: false,
      },
      {
        text: '<link rel="stylesheet" href="{cssfilepath}">',
        correct: false,
      },
      {
        text: '<link rel="stylesheet" />',
        correct: false,
      },
    ],
  },
  {
    questionText: "What does the modulo operator do?",
    answers: [
      {
        text:
          "Multiplies two values and assigns the result to the first variable.",
        correct: false,
      },
      {
        text: "Returns the remainder of a two numbers.",
        correct: true,
      },
      {
        text: "Determines if a number is even or odd.",
        correct: false,
      },
      {
        text: "Tells you if a string is iterable.",
        correct: false,
      },
    ],
  },
  {
    questionText: "Which of the following is NOT an HTTP verb?",
    answers: [
      {
        text: "PATCH",
        correct: false,
      },
      {
        text: "PUT",
        correct: false,
      },
      {
        text: "GET",
        correct: false,
      },
      {
        text: "FETCH",
        correct: true,
      },
    ],
  },
  {
    questionText: "What jQuery function allows one to make API requests?",
    answers: [
      {
        text: "Webclient",
        correct: false,
      },
      {
        text: "HTTPRequests",
        correct: false,
      },
      {
        text: "AJAX",
        correct: true,
      },
      {
        text: "JSON",
        correct: false,
      },
    ],
  },
  {
    questionText:
      "Constant variables are not usually able to be modified. With constant arrays, you can concatenate them, how would you do this?",
    answers: [
      {
        text: "By using the Concat() prototype method",
        correct: false,
      },
      {
        text: "By using the dot operator.",
        correct: false,
      },
      {
        text: "By adding them together with an addition operator.",
        correct: false,
      },
      {
        text: "By using the spread/rest operator.",
        correct: true,
      },
    ],
  },
];
