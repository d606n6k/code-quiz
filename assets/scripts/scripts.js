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