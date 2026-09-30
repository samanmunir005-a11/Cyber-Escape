const startButton = document.querySelector("button");
const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");

const passwordInput = document.querySelector("#passwordInput");
const unlockButton = document.querySelector("#unlockButton");
const message = document.querySelector("#message");

const urlOptions = document.querySelectorAll(".url-option");

const codeInput = document.querySelector("#codeInput");
const escapeButton = document.querySelector("#escapeButton");
const codeMessage = document.querySelector("#codeMessage");

const livesDisplay = document.querySelector("#lives");
const scoreDisplay = document.querySelector("#score");

const gameOverScreen = document.querySelector("#gameOverScreen");
const restartButton = document.querySelector("#restartButton");

const victoryScreen = document.querySelector("#victoryScreen");
const finalScore = document.querySelector("#finalScore");

const playAgainButton = document.querySelector("#playAgainButton");

let lives = 3;
let score = 0;


// START GAME
startButton.addEventListener("click", function() {

    startButton.style.display = "none";
    level1.style.display = "block";

});


// LEVEL 1 — PASSWORD
unlockButton.addEventListener("click", function() {

    const password = passwordInput.value;

    if (password === "cyber123") {

        score = score + 100;
        scoreDisplay.textContent = "Score: " + score;

        message.textContent = "✅ Access Granted!";

        level1.style.display = "none";
        level2.style.display = "block";

    } else {

        lives = lives - 1;
        livesDisplay.textContent = "❤️ ".repeat(lives);

        passwordInput.classList.remove("shake");
        void passwordInput.offsetWidth;
        passwordInput.classList.add("shake");

        if (lives === 0) {

            gameOverScreen.style.display = "flex";

            unlockButton.disabled = true;
            passwordInput.disabled = true;

        } else {

            message.textContent = "❌ Wrong Password!";

        }

    }

});


// LEVEL 2 — PHISHING
urlOptions.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent.includes("paypal-security-login")) {

            score = score + 150;
            scoreDisplay.textContent = "Score: " + score;

            level2.style.display = "none";
            level3.style.display = "block";

        } else {

            lives = lives - 1;
            livesDisplay.textContent = "❤️ ".repeat(lives);

            button.classList.remove("shake");
            void button.offsetWidth;
            button.classList.add("shake");

            if (lives === 0) {

                gameOverScreen.style.display = "flex";

            } else {

                alert("❌ Wrong! This website is safe.");

            }

        }

    });

});


// LEVEL 3 — HIDDEN CODE
const restoreScreen = document.querySelector("#restoreScreen");
const escapeResult = document.querySelector("#escapeResult");
const progress = document.querySelector("#progress");
const restoreText = document.querySelector("#restoreText");
escapeButton.addEventListener("click", function() {

    const code = codeInput.value;

    if (code === "ESC-742") {

        score = score + 200;
        scoreDisplay.textContent = "Score: " + score;

        level3.style.display = "none";

        finalScore.textContent = "Final Score: " + score;

        victoryScreen.style.display = "flex";

    } else {

        lives = lives - 1;
        livesDisplay.textContent = "❤️ ".repeat(lives);

        codeInput.classList.remove("shake");
        void codeInput.offsetWidth;
        codeInput.classList.add("shake");

        if (lives === 0) {

            gameOverScreen.style.display = "flex";

        } else {

            codeMessage.textContent = "❌ Incorrect Code! Try Again.";

        }

    }

});


// RESTART AFTER GAME OVER
restartButton.addEventListener("click", function() {

    lives = 3;
    score = 0;

    livesDisplay.textContent = "❤️ ❤️ ❤️";
    scoreDisplay.textContent = "Score: 0";

    gameOverScreen.style.display = "none";

    level1.style.display = "block";
    level2.style.display = "none";
    level3.style.display = "none";

    passwordInput.disabled = false;
    unlockButton.disabled = false;

    passwordInput.value = "";
    message.textContent = "";

});


// PLAY AGAIN AFTER WINNING
playAgainButton.addEventListener("click", function() {

    location.reload();

});