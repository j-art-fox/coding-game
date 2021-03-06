var questions = [
    {
        question: "Select the correct syntax for calling an external javascript file.",
        answers: [{ value: "true", text: '<script type="text/javascript" src="javascript.js"> </script>' }, { value: "false", text: "bacon" }, { value: "false", text: "cheese" }, { value: "false", text: "lettuce" }],
        solution: '<script type="text/javascript" src="javascript.js"> </script>'
    },
    {
        question: "Select the correct statement among the three false statements.",
        answers: [{ value: "true", text: "javascript is case-sensitive." }, { value: "false", text: "javascript is cheese." }, { value: "false", text: "javascript is bacon." }, { value: "false", text: "javascript is letuce." }],
        solution: 'javascript is case-sensitive.'
    },
    {
        question: "Select the correct definition of HTML",
        answers: [{ value: "false", text: "hicks think me lazy" }, { value: "false", text: "hyper ticklish male lemers" }, { value: "true", text: "Hypertext Markup Language" }, { value: "false", text: "hello there my love" }],
        solution: 'Hypertext Markup Language'
    },
    {
        question: "Select the correct definition of CSS",
        answers: [{ value: "false", text: "computer selection service" }, { value: "false", text: "can't sleep soundly" }, { value: "false", text: "camera shutters suck" }, { value: "true", text: "cascading styling sheets" }],
        solution: 'cascading styling sheets'
    },
    {
        question: "Select the correct syntax for creating a conditional in Javascript",
        answers: [{ value: "true", text: "if" }, { value: "false", text: "function" }, { value: "false", text: "var" }, { value: "false", text: "const" }],
        solution: 'if'
    },
    {
        question: "What is an Array?",
        answers: [{ value: "false", text: "a css styling specification" }, { value: "false", text: "a combination of html elements" }, { value: "false", text: "a scheduled software release" }, { value: "true", text: "a data structure consisting of a collection of elements" }],
        solution: 'a data structure consisting of a collection of elements'
    },
    {
        question: "What is a string value?",
        answers: [{ value: "false", text: "a number" }, { value: "false", text: "a true or false value" }, { value: "false", text: "a thread" }, { value: "true", text: "any alphanumeric text marked by quotes" }],
        solution: 'any alphanumeric text marked by quotes'
    },
    {
        question: "Select the correct definition of boleen value",
        answers: [{ value: "false", text: "a number" }, { value: "true", text: "a true or false value" }, { value: "false", text: "a thread" }, { value: "false", text: "any alphanumeric text" }],
        solution: 'a true or false value'
    },
    {
        question: "What allows for a programmer to iterate the same method over an array in Javascript?",
        answers: [{ value: "true", text: "a for loop" }, { value: "false", text: "an confideration" }, { value: "false", text: "a conspideration" }, { value: "false", text: "a unconstafinitilizationizer" }],
        solution: 'a for loop'
    },
    {
        question: "What's the capital of Ireland?",
        answers: [{ value: "false", text: "Lafferty" }, { value: "true", text: "Dublin" }, { value: "false", text: "Ireland City" }, { value: "false", text: "London" }],
        solution: 'Dublin'
    },

];

var startQuizBtn = document.querySelector("#start-button");
var gameCardCont = document.querySelector(".game-card");
var timeEl = document.querySelector(".timer");
var timeLeft = questions.length * 15;
var startWindowEl = document.querySelector(".start-window");
var questContEl = document.getElementById("quest-cont");
var shuffledQuestions;
var currentQuestionIndex = 0;
var currentScore = 0;

function startQuiz() {
    startWindowEl.setAttribute("style", "display:none;");
    gameCardCont.setAttribute("style", "display:flex;");
    setTime();
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
    showQuestionNum(shuffledQuestions[currentQuestionIndex]);
};

startQuizBtn.addEventListener("click", startQuiz);

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds remaining";
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            endGame();
            console.log("time has hit 0.");
        }
    }, 1000)
};

function sendMessage() {
    timeEl.textContent = "Game Over";
};

function addToScore() {
    console.log("check");
    currentScore = currentScore + 15;
    scoreEl.textContent = currentScore;
};

var potentAnsEl1 = document.getElementById("q1cont");
var potentAnsEl2 = document.getElementById("q2cont");
var potentAnsEl3 = document.getElementById("q3cont");
var potentAnsEl4 = document.getElementById("q4cont");

function minusTimeLeft() {
    timeLeft -= 15;
    timeLeft = timeLeft < 0 ? 0 : timeLeft;
}

var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");

function setNextSolutions(event) {
    //event.target is the current button that was clicked or pressed
    //this is like the same but more reliable
    var target = event.target;
    if (target.textContent === questions[currentQuestionIndex].solution) {
        // addTimeLeft();
        console.log("correct");
        incorrectEl.setAttribute("style", "display:none;")
        correctEl.setAttribute("style", "display:flex;");
        addToScore();
    } else {
        console.log("wrong");
        minusTimeLeft();
        correctEl.setAttribute("style", "display:none;");
        incorrectEl.setAttribute("style", "display:flex;")
    }
    if (currentQuestionIndex === questions.length - 1) {
        endGame();
    } else {
        currentQuestionIndex++;
        setNextQuestion();
        showQuestionNum(shuffledQuestions[currentQuestionIndex]);
    }
};



function showQuestionNum() {
    //shows the question counter
    var questNum = document.getElementById("quest-remaining-value");
    questNum.textContent = currentQuestionIndex + 1;
};

function setNextQuestion() {
    questContEl.textContent = questions[currentQuestionIndex].question;
    potentAnsEl1.textContent = questions[currentQuestionIndex].answers[0].text;
    potentAnsEl2.textContent = questions[currentQuestionIndex].answers[1].text;
    potentAnsEl3.textContent = questions[currentQuestionIndex].answers[2].text;
    potentAnsEl4.textContent = questions[currentQuestionIndex].answers[3].text;
    // correctEl.setAttribute("style","display:none");
    
};

potentAnsEl1.addEventListener("click", setNextSolutions);
potentAnsEl2.addEventListener("click", setNextSolutions);
potentAnsEl3.addEventListener("click", setNextSolutions);
potentAnsEl4.addEventListener("click", setNextSolutions);

///-----------------------------SAVING SCORES----------------------------//
var scores = [];

function endGame() {
    var finalScoreEl = document.getElementById("final-score");
    endWinEl.setAttribute("style", "display:flex;");
    gameCardCont.setAttribute("style", "display:none;");
    finalScoreEl.textContent = currentScore;
    
};

var scoreEl = document.getElementById("score");
var endWinEl = document.querySelector(".end-window");
var playerName = document.getElementById("player-name");
var highScoresList = document.getElementById("high-scores");
var nameInput = document.getElementById("player-name-input");
var submitBtnEl = document.getElementById("submit-button");


submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("submit button has been pushed.")
    var savedUser = nameInput.value.trim();
    if (savedUser === ""){
        return;
    }
   
    scores.push(savedUser+ " | SCORE: "+currentScore);
    nameInput.value = "";
   
    saveScore();
    renderHighScores();
    hideSubmit();
});    

function hideSubmit(){
 submitBtnEl.setAttribute("style","display:none;");
 nameInput.setAttribute("style","display:none;")

};


function renderHighScores() {
    highScoresList.innerHTML = "";
    
    for (let i = 0; i < scores.length; i++) {
        var highScore = scores[i];
        
        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);
        
        highScoresList.appendChild(li);
    }
};

function init() {
    var storedHighScores = JSON.parse(localStorage.getItem('scores'));
    if (storedHighScores !== null) {
        scores = storedHighScores;
    }
    renderHighScores();
}

function saveScore() {
    if (scores === null) {
        scores = {}
    }
    
    scores[nameInput] = currentScore;
    localStorage.setItem('scores', JSON.stringify(scores))
};

init();

//--------------------restart game----------------------------------//
restartEl = document.getElementById("restart-button");
restartEl.addEventListener("click", restart);

function restart() {
    window.location.href = window.location.href;
};