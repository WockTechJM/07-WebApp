let score = 0;
let timeLeft = 10;
let gameActive = true;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");

clickButton.addEventListener("click", function() {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
    }
});

function startTimer() {
    let timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            timerDisplay.textContent = "Game Over!";
        }
    }, 1000);
}

resetButton.addEventListener("click", function() {
    score = 0;
    timeLeft = 10;
    gameActive = true;
    scoreDisplay.textContent = "Score: 0";
    timerDisplay.textContent = "Time: 10";
    startTimer();
});

startTimer();