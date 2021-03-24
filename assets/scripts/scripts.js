// USER STORY
// GIVEN I am taking a code quiz
// WHEN I click the start button
// - I will need a start button in my html - DONE
//  - will I need to store all cards in an Object?
// THEN a timer starts and I am presented with a question
// - I will need to start the timer AND swap data-cards
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// FIRST PASS/ITERATION PSEUDO-CODE
// Pseudo-Code
// start page html
// - start div with the following elements
// -- title
// -- start quiz btn
// -- directions
// - time: 0
// - view high scores link
// add a little css don't make it perfect yet
// quiz js
// create variables for referencing els
// - start div
// - high scores link
// - time
// - start btn
// vars for values
// - timeRemaining
// - highScores
// - questions: Array of questions
// Question Object
// - question: String
// - options: String[]
// - answer: String (one of the options)

// Global Variable Handles
var cardContainer = document.getElementById("#code-card-swapper");
var cardStart = document.getElementById("card-start");
var question = document.querySelector("card"); 
var quizBtn = document.getElementById("quiz-start-btn");
var time = 90;
var timer = document.getElementById("time-span");
var startTimer;
var rightAnswers = {
  question1: "b",
  question2: "a",
  question3: "c",
  question4: "d",
  question5: "a"
}

quizBtn.onclick = function(){quizStart();};

function quizStart(){
    // console.log("This function has worked when the button was clicked!");
      // start the timer
      startTimer = setInterval(clock, 1000);
      timer.textContent = time;

    // remove the starter card
    cardStart.classList.add("hidden");
    document.getElementById("q1").classList.remove("hidden");
    // for (let i = 0; i < 5; i++) {
    //   document.getElementById(`q${i}`).classList.remove("hidden");
    //   document.getElementById(`q${i-1}`).classList.add("hidden");
    // }
    
};

// Clicked Answer Button
document.querySelectorAll('#orderlist > [data-answer]').forEach(el => {
  el.addEventListener('click', function () {
      if (this.dataset.answer === "right") {
          q1.classList.add('hidden')
          q2.classList.remove('hidden')
          // store this answer in local storage
      } else {
          q1.classList.add('hidden')
          q2.classList.remove('hidden')
          // seconds get taken away 
          // check if timer is less than 0. Do not show next
          // store this answer in local storage
      }
  })
});

// timer function
function clock(){
  time--;
  timer.textContent = time;
  if (time <= 0){
    quizEnd();
  }
};

// Quiz End
function quizEnd(){
  document.getElementById("q1").classList.add("hidden");
  document.getElementById("gameover").classList.remove("hidden");
  clearInterval(startTimer);
};
// Clear HighScore and Start The Questions Over