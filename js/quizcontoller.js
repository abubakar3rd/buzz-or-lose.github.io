// Number of time you click confirm answer;
let clickCount = 0;

// Number of time confirm button display;
let countMe = 0;

// Game Total Scores
let teamOneTotalScore = 0;
let teamTwoTotalScore = 0;


let turn = true;
if (turn) {
    document.getElementById("myDiv").classList.add("active");
}
function myFunction() {
    if (!turn) {
        document.getElementById("myDiv").classList.add("active");
        document.getElementById("bScore").classList.remove("active");
        turn = !turn
    } else {
        document.getElementById("myDiv").classList.remove("active");
        document.getElementById("bScore").classList.add("active");
        turn = !turn
    }

}


// Game Timer
function questionTime() {
    let timeLeft = 9;
    let downloadTimer = setInterval(function () {
        document.getElementById("timer").innerHTML = timeLeft;
        timeLeft -= 1;

        if (nextQuestion.addEventListener("click", function () {
            clearInterval(downloadTimer);
        })) {

        }
        if (confirmAnswer.addEventListener("click", function () {
            clearInterval(downloadTimer);

        })) {

        }
        if (timeLeft == -1) {
            clearInterval(downloadTimer);
            document.getElementById("timer").textContent = "Time Out";

            clickCount = clickCount + 1

            // Team One verification
            if (answerOptions.style.background == "rgb(180, 15, 15)" && answerOptions.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
                teamOneScore = teamOneScore + 10;
                document.querySelector("#myDiv.active p").innerText = teamOneScore;
                answerOptions.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns1.style.background == "rgb(180, 15, 15)" && wrongAns1.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
                teamOneScore = teamOneScore + 10;
                document.querySelector("#myDiv.active p").innerText = teamOneScore;
                wrongAns1.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns2.style.background == "rgb(180, 15, 15)" && wrongAns2.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
                teamOneScore = teamOneScore + 10;
                document.querySelector("#myDiv.active p").innerText = teamOneScore;
                wrongAns2.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns3.style.background == "rgb(180, 15, 15)" && wrongAns3.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
                teamOneScore = teamOneScore + 10;
                document.querySelector("#myDiv.active p").innerText = teamOneScore;
                wrongAns3.style.background = "green";
                correctAnswer.play()
            }

            // Team Two verification
            else if (answerOptions.style.background == "rgb(180, 15, 15)" && answerOptions.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
                teamTwoScore = teamTwoScore + 10;
                document.querySelector("#bScore.active p").innerText = teamTwoScore;
                answerOptions.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns1.style.background == "rgb(180, 15, 15)" && wrongAns1.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
                teamTwoScore = teamTwoScore + 10;
                document.querySelector("#bScore.active p").innerText = teamTwoScore;
                wrongAns1.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns2.style.background == "rgb(180, 15, 15)" && wrongAns2.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
                teamTwoScore = teamTwoScore + 10;
                document.querySelector("#bScore.active p").innerText = teamTwoScore;
                wrongAns2.style.background = "green";
                correctAnswer.play()
            } else if (wrongAns3.style.background == "rgb(180, 15, 15)" && wrongAns3.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
                teamTwoScore = teamTwoScore + 10;
                document.querySelector("#bScore.active p").innerText = teamTwoScore;
                wrongAns3.style.background = "green";
                correctAnswer.play()

                // Add no point and show answer
            } else {
                teamOneScore = teamOneScore + 0;
                teamTwoScore = teamTwoScore + 0;
                wrongAnswer.play()
                if (answerOptions.innerHTML == questionList[0].ans) {
                    answerOptions.style.background = "green";
                } else if (wrongAns1.innerHTML == questionList[0].ans) {
                    wrongAns1.style.background = "green";
                } else if (wrongAns2.innerHTML == questionList[0].ans) {
                    wrongAns2.style.background = "green";
                } else if (wrongAns3.innerHTML == questionList[0].ans) {
                    wrongAns3.style.background = "green";
                }
            }

            // Remove displayed question for questionList array
            questionList.splice([0], 1);

            if (clickCount == 2 * Number(numberOfQuestionPerRound.value)) {
                confirmAnswer.style.display = "none";
                nextQuestion.style.display = "none"
                roundSummery.style.display = "block"
                teamOneRound.innerText = teamOneName.value;
                teamTwoRound.innerText = teamTwoName.value;
                teamOneRoundScore.innerText = teamOneScore;
                teamTwoRoundScore.innerText = teamTwoScore;
                clickCount = 0;
            } else {
                // Switch between next button and confirm button
                confirmAnswer.style.display = "none";
                nextQuestion.style.display = "block";
            }

        }
    }, 1000);
}

// Start Game button from option page
let start = document.getElementById("optionPageNextButton");
start.addEventListener("click", function () {
    questionList.length = 0;
    getQuestion();
    displayQuestionAndAnswer();
});

// Display next question
let nextQuestion = document.getElementById("nextQuestion");
nextQuestion.addEventListener("click", function () {
    timeLeft = 0;
    questionTime();
    displayQuestionAndAnswer();
    document.getElementById("timer").textContent = "10";
    answerOptions.style.background = "";
    wrongAns1.style.background = "";
    wrongAns2.style.background = "";
    wrongAns3.style.background = "";
    answerOptions.style.color = "";
    confirmAnswer.style.display = "block";
    nextQuestion.style.display = "none";
});


// Team scores
let teamOneScore = 0
let teamTwoScore = 0

function displayQuestionAndAnswer() {
    // Mix questionList randomly
    questionList.sort(function (a, b) { return 0.5 - Math.random() });
    questionContainer.innerText = questionList[0].question;

    let options = [
        questionList[0].ans,
        questionList[0].wrongAns[0],
        questionList[0].wrongAns[1],
        questionList[0].wrongAns[2]
    ];

    // Mix options randomly
    options.sort(function (a, b) { return 0.5 - Math.random() });

    answerOptions.innerText = options[0];
    wrongAns1.innerText = options[1];
    wrongAns2.innerText = options[2];
    wrongAns3.innerText = options[3];

};



// Confirm Answer Button 
confirmAnswer.addEventListener("click", function () {

    // Team One verification
    if (answerOptions.style.background == "rgb(180, 15, 15)" && answerOptions.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
        teamOneScore = teamOneScore + 10;
        document.querySelector("#myDiv.active p").innerText = teamOneScore;
        answerOptions.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns1.style.background == "rgb(180, 15, 15)" && wrongAns1.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
        teamOneScore = teamOneScore + 10;
        document.querySelector("#myDiv.active p").innerText = teamOneScore;
        wrongAns1.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns2.style.background == "rgb(180, 15, 15)" && wrongAns2.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
        teamOneScore = teamOneScore + 10;
        document.querySelector("#myDiv.active p").innerText = teamOneScore;
        wrongAns2.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns3.style.background == "rgb(180, 15, 15)" && wrongAns3.innerHTML == questionList[0].ans && myDiv.classList.contains("active")) {
        teamOneScore = teamOneScore + 10;
        document.querySelector("#myDiv.active p").innerText = teamOneScore;
        wrongAns3.style.background = "green";
        correctAnswer.play()
    }

    // Team Two verification
    else if (answerOptions.style.background == "rgb(180, 15, 15)" && answerOptions.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
        teamTwoScore = teamTwoScore + 10;
        document.querySelector("#bScore.active p").innerText = teamTwoScore;
        answerOptions.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns1.style.background == "rgb(180, 15, 15)" && wrongAns1.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
        teamTwoScore = teamTwoScore + 10;
        document.querySelector("#bScore.active p").innerText = teamTwoScore;
        wrongAns1.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns2.style.background == "rgb(180, 15, 15)" && wrongAns2.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
        teamTwoScore = teamTwoScore + 10;
        document.querySelector("#bScore.active p").innerText = teamTwoScore;
        wrongAns2.style.background = "green";
        correctAnswer.play()
    } else if (wrongAns3.style.background == "rgb(180, 15, 15)" && wrongAns3.innerHTML == questionList[0].ans && bScore.classList.contains("active")) {
        teamTwoScore = teamTwoScore + 10;
        document.querySelector("#bScore.active p").innerText = teamTwoScore;
        wrongAns3.style.background = "green";
        correctAnswer.play()

        // Add no point and show answer
    } else {
        teamOneScore = teamOneScore + 0;
        teamTwoScore = teamTwoScore + 0;
        wrongAnswer.play()

        if (answerOptions.innerHTML == questionList[0].ans) {
            answerOptions.style.background = "green";
        } else if (wrongAns1.innerHTML == questionList[0].ans) {
            wrongAns1.style.background = "green";
        } else if (wrongAns2.innerHTML == questionList[0].ans) {
            wrongAns2.style.background = "green";
        } else if (wrongAns3.innerHTML == questionList[0].ans) {
            wrongAns3.style.background = "green";
        }
    }
    // Remove displayed question for questionList array
    questionList.splice([0], 1);

    // Switch between next button and confirm button
    confirmAnswer.style.display = "none";
    nextQuestion.style.display = "block";
});

let teamOneRoundScore = document.getElementById("teamOneRoundScore");
let teamTwoRoundScore = document.getElementById("teamTwoRoundScore");

let teamOneRound = document.getElementById("teamOneRound");
let teamTwoRound = document.getElementById("teamTwoRound");


// Display next question
confirmAnswer.addEventListener("click", function () {
    clickCount = clickCount + 1
    if (clickCount == 2 * Number(numberOfQuestionPerRound.value)) {
        nextQuestion.style.display = "none"
        roundSummery.style.display = "block"
        teamOneRound.innerText = teamOneName.value;
        teamTwoRound.innerText = teamTwoName.value;
        teamOneRoundScore.innerText = teamOneScore;
        teamTwoRoundScore.innerText = teamTwoScore;
        clickCount = 0;
    }
});

gameResult.addEventListener("click", function () {
    finishUpTotalScore.innerText = finalScore;
    finishUpTeamOne.innerText = teamOneName.value;
    finishUpTeamTwo.innerText = teamTwoName.value;
    teamOneTotalScore;
    teamTwoTotalScore;
    if (teamOneTotalScore > teamTwoTotalScore) {
        topScoreTeamName = topScoreTeam1
        topScoreTeamScore = teamOneTotalScore
        topScores1()
    } else if (teamTwoTotalScore > teamOneTotalScore) {
        topScoreTeamName = topScoreTeam2
        topScoreTeamScore = teamTwoTotalScore
        topScores2()
    } else {
        topScores1()
        topScores2()
    }
})

let closeRoundSummery = document.getElementById("closeRoundSummery");

closeRoundSummery.addEventListener("click", function () {
    topScoreTeam1 = document.getElementById("teamOneName").value;
    topScoreTeam2 = document.getElementById("teamTwoName").value;

    teamOneTotalScore = teamOneTotalScore + teamOneScore;
    teamTwoTotalScore = teamTwoTotalScore + teamTwoScore;
    finalScore = teamOneTotalScore + "-" + teamTwoTotalScore;
    teamOneScore = 0;
    teamTwoScore = 0;
    numberOfRoundPlayingFor.innerText = roundSummeryCounter + " / " + numberOfRoundChoosed.value;
    document.querySelector("#myDiv p").innerText = teamOneScore;
    document.querySelector("#bScore p").innerText = teamTwoScore;
    roundSummery.style.display = "none"
    nextQuestion.style.display = "block"
    if (roundSummeryCounter == Number(numberOfRoundChoosed.value) + 1) {
        nextQuestion.style.display = "none";
        roundSummery.style.display = "none";
        gameResult.style.display = "block";
    }

    if (roundSummeryCounter >= numberOfRoundChoosed.value) {
        numberOfRoundPlayingFor.innerText = numberOfRoundChoosed.value + " / " + numberOfRoundChoosed.value;
    }
});






