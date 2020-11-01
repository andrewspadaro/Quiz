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
});
    
    
    
    


myQuestions = [
    {
        question: "is this question 1",
         incorrect: [
          "2",
          "2",
          "2",
      ],
        correctAnswer: "question 1"
  },
  {
    question: "is this question 2",
     incorrect: [
      "1",
      "1",
      "1",
  ],
    correctAnswer: "question 2"
},
        {
          question: "is this question 3",
           incorrect: [
            "2",
            "2",
            "2",
        ],
          correctAnswer: "question 3"
    }
      ];

