var startQuizBtn = document.querySelector("#start-button");
var gameCardCont = document.querySelector(".game-card");
var timeEl = document.querySelector(".timer");
var timeLeft = 10;
var possAnsEl1 = document.getElementById("possible-answer1");
var possAnsEl2 = document.getElementById("possible-answer2");
var possAnsEl3 = document.getElementById("possible-answer3");
var possAnsEl4 = document.getElementById("possible-answer4");
var startWindowEl = document.querySelector(".start-window");


function startQuiz() {
    startWindowEl.setAttribute("style", "display:none;");
    gameCardCont.setAttribute("style", "display:flex;");
    setTime();
    console.log("bacon");
};

startQuizBtn.addEventListener("click", startQuiz);

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds remaining";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            console.log("time has hit 0.");
        }
    }, 1000)
}

function sendMessage(){
    timeEl.textContent = "Game Over";
}


// function showNextQuestion() { }

