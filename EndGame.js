var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Vaibhav?");



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where does Vaibhav live? ",
  answer: "Mumbai"
}, {
  question: "his favorite fruit would be? ",
  answer: "watermelon"
},
{
  question: "Where does he Study? ",
  answer: "Kirti college"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")