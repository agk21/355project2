var buttons = document.querySelector("#choice");

buttons.addEventListener('click',()=>{
    buttons
});

let timeLeft = 15; // seconds
const timerBar = document.getElementById("timer-bar");
const timerText = document.getElementById("timer-text");

const totalTime = 15;

const countdown = setInterval(() => {
  timeLeft--;
  timerText.textContent = `Time: ${timeLeft}s`;
  timerBar.style.width = `${(timeLeft / totalTime) * 100}%`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.querySelector(".answer-form").submit(); // auto-submit
  }
}, 1000);
