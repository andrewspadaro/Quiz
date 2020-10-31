//create an opening page to the quiz with a button to start quiz
//create a timer that starts at 30 seconds 
//when button is clicked make first question to the quiz appear
//when answer is clicked make question dissaper
//figure out how to take 5 seconds off timer for every incorrect answer
//create a high score page with prompt to enter initials
//store scores to local computer

var timeLeft = 30;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }