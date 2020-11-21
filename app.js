//create an opening page to the quiz with a button to start quiz
//create a timer that starts at 30 seconds 
//when button is clicked make first question to the quiz appear
//when answer is clicked make question dissaper
//figure out how to take 5 seconds off timer for every incorrect answer
//create a high score page with prompt to enter initials
//store scores to local computer
var currentQuestion = 0;
var timeLeft = 60;
var elem = document.getElementById("timer");
var possibleAnswers = document.getElementById("possibleAnswers")
var startBtn = document.getElementById("button");
 var incorrect = 0;

startBtn.addEventListener("click", function () {
// render the current question
renderQuestion(currentQuestion)
setInterval(countdown, 1000)
startBtn.style.display = 'none'

});

 function selectedAnswer (event) {
  var answerChoice = event.currentTarget.textContent;
  if(answerChoice === myQuestions[currentQuestion].correctAnswer) {
    alert('correct')
  } else {
    alert('incorrect')
    incorrect++
  }
  currentQuestion++
  renderQuestion(currentQuestion)
  alert(incorrect)
}

function renderQuestion(num) {
  var questionSection = document.getElementById("p1");
  questionSection.innerHTML = ""
  questionSection.innerHTML = myQuestions[num].question


  
  possibleAnswers.innerHTML = "<li onclick='selectedAnswer(event)'>" + myQuestions[num].choices[0] + "</li>"
  possibleAnswers.innerHTML += "<li onclick='selectedAnswer(event)'>" + myQuestions[num].choices[1] + "</li>"
  possibleAnswers.innerHTML += "<li onclick='selectedAnswer(event)'>" + myQuestions[num].choices[2] + "</li>"
  possibleAnswers.innerHTML += "<li onclick='selectedAnswer(event)'>" + myQuestions[num].choices[3] + "</li>"
}

myQuestions = [
  {
    question: "What are the 4 main ingredients in beer?",
    choices: [
      "carrots, potatoes, corn, and broccoli",
      "soda, rice, chips, and salt",
      "popcorn, peanuts, dirty socks, and coffee beans",
      "Water, malt, hops, and yeast"
    ],
    correctAnswer: "Water, malt, hops, and yeast"
  },
  {
    question: "What beer was currently awarded best craft beer in America for the year 2020",
    choices: [
      "Dogfish Head 60 Minute IPA",
      "Pliney The Elder",
      "Bells Two Hearted Ale",
      "Bud Lite"
    ],
    correctAnswer: "Bells Two Hearted Ale"
  },
  {
    question: "Which city has the most craft breweries per capita",
    choices: [
      "Portland, Maine",
      "Chicago, Illanois",
      "Boston, Massachusetts",
      "Boulder, Colorado"
    ],
    correctAnswer: "Portland, Maine"
  },
];

function countdown() {
  //  starting timer


    if (timeLeft == -1) {
      clearInterval(countdown);
    } else {
      elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }

  console.log('timer')
 
}
