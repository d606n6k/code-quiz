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

// Global Variable Handles
var cardContainer = document.getElementById("#code-card-swapper");
var cardStart = document.getElementById("card-start");
var question = document.querySelector("card"); 

// Quiz Start 
document.getElementById("quiz-start-btn").onclick = function(){quizStart()};

function quizStart(){
    console.log("This function has worked when the button was clicked!");
    // start the timer
   var timer = document.getElementById("time-span");
   for (i = 0 ; i < 99; i++){
     timer++;
   }

};

// Clear HighScore and Start The Questions Over