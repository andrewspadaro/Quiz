//create an opening page to the quiz with a button to start quiz
//create a timer that starts at 30 seconds 
//when button is clicked make first question to the quiz appear
//when answer is clicked make question dissaper
//figure out how to take 5 seconds off timer for every incorrect answer
//create a high score page with prompt to enter initials
//store scores to local computer


var startBtn = document.getElementById("button");
startBtn.addEventListener("click", function() {
    var timeLeft = 60;
        var elem = document.getElementById("timer");
        
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
          if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
          } else {
            elem.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
          }
        }

var questionSection = document.getElementById("p1");
questionSection.innerHTML = ""
questionSection.innerHTML = myQuestions[0].question

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var possibleAnswers = document.getElementById("possibleAnswers")
possibleAnswers.innerHTML = "<li>" + myQuestions[0].incorrect[0] + "</li>"
possibleAnswers.innerHTML += "<li>" + myQuestions[0].incorrect[1] + "</li>"
possibleAnswers.innerHTML += "<li>" + myQuestions[0].incorrect[2] + "</li>"
possibleAnswers.innerHTML += "<li>" + myQuestions[0].correctAnswer[0] + "</li>"

});


    
    
    


myQuestions = [
    {
        question: "What are the 4 main ingredients in beer?",
         incorrect: [
          "carrots, potatoes, corn, and broccoli",
          "soda, rice, chips, and salt",
          "popcorn, peanuts, dirty socks, and coffee beans",
      ],
        correctAnswer: ["Water, malt, hops, and yeast", "Bells Two Hearted Ale", "3"]
  },
  {
    question: "What beer was currently awarded best beer in america",
     incorrect: [
      "dogfish 60 minute IPA",
      "Pliney The Elder",
      "Bud Lite",
  ],
    // correctAnswer: ["question 2"]
},
        {
          question: "is this question 3",
           incorrect: [
            "2",
            "2",
            "2",
        ],
          // correctAnswer: ["question 3"]
    }
      ];

