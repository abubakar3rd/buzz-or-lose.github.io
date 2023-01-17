// Declaring all button variable
let startGame = document.getElementById("startGame");
let setupTeamOneNextButton = document.getElementById("setupTeamOneNextButton");
let setupTeamOneBackButton = document.getElementById("setupTeamOneBackButton");
let setupTeamTwoNextButton = document.getElementById("setupTeamTwoNextButton");
let setupTeamTwoBackButton = document.getElementById("setupTeamTwoBackButton");
let optionPageNextButton = document.getElementById("optionPageNextButton");
let optionPageBackButton = document.getElementById("optionPageBackButton");

let playAgain = document.getElementById("playAgain");


// Declaring Captains
let teamACaptainOne = document.getElementById("teamACaptainOne");
let teamACaptainTwo = document.getElementById("teamACaptainTwo");
let teamACaptainThree = document.getElementById("teamACaptainThree");

let teamBCaptainOne = document.getElementById("teamBCaptainOne");
let teamBCaptainTwo = document.getElementById("teamBCaptainTwo");
let teamBCaptainThree = document.getElementById("teamBCaptainThree");



// Index page start button
startGame.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("indexPage").style.display = "none";
    document.getElementById("teamOneDetails").style.display = "block";
});

// Setup team one page next button
setupTeamOneNextButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!teamOneName.value) {
        return alert("Please enter team name");
    } else if (!teamOnePlayerOneName.value) {
        return alert("Please enter player one name")
    } else if (!teamOnePlayerTwoName.value) {
        return alert("Please enter player two name")
    } else if (!teamOnePlayerThreeName.value) {
        return alert("Please enter player three name")
    } else {
        // Setup team one page next button
        document.getElementById("teamOneDetails").style.display = "none";
        document.getElementById("teamTwoDetails").style.display = "block";

        document.getElementById("teamAName").innerText = teamOneName.value;
        document.getElementById("teamOneplayerOne").innerText = teamOnePlayerOneName.value;
        document.getElementById("teamOneplayerTwo").innerText = teamOnePlayerTwoName.value;
        document.getElementById("teamOneplayerThree").innerText = teamOnePlayerThreeName.value;

        document.getElementById("gameplayTeamAName").innerText = teamOneName.value;
        document.getElementById("gameplayTeamOneplayerOne").innerText = teamOnePlayerOneName.value;
        document.getElementById("gameplayTeamOneplayerTwo").innerText = teamOnePlayerTwoName.value;
        document.getElementById("gameplayTeamOneplayerThree").innerText = teamOnePlayerThreeName.value;

        document.getElementById("teamACaptainOne").innerText = teamOnePlayerOneName.value;
        document.getElementById("teamACaptainTwo").innerText = teamOnePlayerTwoName.value;
        document.getElementById("teamACaptainThree").innerText = teamOnePlayerThreeName.value;
    }
});

// Setup team one page back button
setupTeamOneBackButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("teamOneDetails").style.display = "none";
    document.getElementById("indexPage").style.display = "block";
});

// Setup team two next button
setupTeamTwoNextButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!teamTwoName.value) {
        return alert("Please enter team name");
    } else if (!teamTwoPlayerOneName.value) {
        return alert("Please enter player one name")
    } else if (!teamTwoPlayerTwoName.value) {
        return alert("Please enter player two name")
    } else if (!teamTwoPlayerThreeName.value) {
        return alert("Please enter player three name")
    } else {
        // Setup team two next button
        document.getElementById("teamTwoDetails").style.display = "none";
        document.getElementById("optionsPage").style.display = "block";

        document.getElementById("teamBName").innerText = teamTwoName.value;
        document.getElementById("teamTwoplayerOne").innerText = teamTwoPlayerOneName.value;
        document.getElementById("teamTwoplayerTwo").innerText = teamTwoPlayerTwoName.value;
        document.getElementById("teamTwoplayerThree").innerText = teamTwoPlayerThreeName.value;

        // Options Page Captain B Selection
        document.getElementById("teamBCaptainOne").innerText = teamTwoPlayerOneName.value;
        document.getElementById("teamBCaptainTwo").innerText = teamTwoPlayerTwoName.value;
        document.getElementById("teamBCaptainThree").innerText = teamTwoPlayerThreeName.value;

        // Questions Page Team B Information
        document.getElementById("gameplayTeamBName").innerText = teamTwoName.value;

        document.getElementById("gameplayTeamTwoplayerOne").innerText = teamTwoPlayerOneName.value;
        document.getElementById("gameplayTeamTwoplayerTwo").innerText = teamTwoPlayerTwoName.value;
        document.getElementById("gameplayTeamTwoplayerThree").innerText = teamTwoPlayerThreeName.value;
    }

});

// Setup team two back button
setupTeamTwoBackButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("teamTwoDetails").style.display = "none";
    document.getElementById("teamOneDetails").style.display = "block";
});

// Options Validation
optionPageNextButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!numberOfRoundChoosed.value) {
        return alert("Please choose number of rounds");
    } else if (!numberOfQuestionPerRound.value) {
        return alert("Please choose number of questions per round");
    } else if (!captainA.value) {
        return alert("Please choose Team A Captain");
    } else if (!captainB.value) {
        return alert("Please choose Team B Captain");
    } else {

        if (captainA.value === gameplayTeamOneplayerOne.innerText) {
            document.getElementById("gameplayTeamOneplayerOne").innerText = teamOnePlayerOneName.value + " - C";
        } else if (captainA.value === gameplayTeamOneplayerTwo.innerText) {
            document.getElementById("gameplayTeamOneplayerTwo").innerText = teamOnePlayerTwoName.value + " - C";
        } else if (captainA.value === gameplayTeamOneplayerThree.innerText) {
            document.getElementById("gameplayTeamOneplayerThree").innerText = teamOnePlayerThreeName.value + " - C";
        } else {

        }
        
        if (captainB.value === gameplayTeamTwoplayerOne.innerText) {
            document.getElementById("gameplayTeamTwoplayerOne").innerText = teamTwoPlayerOneName.value + " - C";
        } else if (captainB.value === gameplayTeamTwoplayerTwo.innerText) {
            document.getElementById("gameplayTeamTwoplayerTwo").innerText = teamTwoPlayerTwoName.value + " - C";
        } else if (captainB.value === gameplayTeamTwoplayerThree.innerText) {
            document.getElementById("gameplayTeamTwoplayerThree").innerText = teamTwoPlayerThreeName.value + " - C";
        } else {
            
        }
 

        document.getElementById("optionsPage").style.display = "none";
        document.getElementById("questionsPage").style.display = "block";
    }
    document.getElementById("optionsPage").style.display = "none";
    document.getElementById("questionsPage").style.display = "block";
    
    questionTime()

});



// Option page back button
optionPageBackButton.addEventListener("click", function () {
    document.getElementById("optionsPage").style.display = "none";
    document.getElementById("teamTwoDetails").style.display = "block";
});

gameResult.addEventListener("click", function(){
    document.getElementById("questionsPage").style.display = "none";
    document.getElementById("gameResultPage").style.display = "block";
})

playAgain.addEventListener("click", function(){
    document.getElementById("gameResultPage").style.display = "none";
    document.getElementById("indexPage").style.display = "block";
    location.reload();
})

