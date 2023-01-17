// Declaring Team A Variable
let teamOneName = document.getElementById("teamOneName");
let teamOnePlayerOneName = document.getElementById("teamOnePlayerOneName");
let teamOnePlayerTwoName = document.getElementById("teamOnePlayerTwoName");
let teamOnePlayerThreeName = document.getElementById("teamOnePlayerThreeName");

// Declaring Team B Variable 
let teamTwoName = document.getElementById("teamTwoName");
let teamTwoPlayerOneName = document.getElementById("teamTwoPlayerOneName");
let teamTwoPlayerTwoName = document.getElementById("teamTwoPlayerTwoName");
let teamTwoPlayerThreeName = document.getElementById("teamTwoPlayerThreeName");

// exit Link
// let exitLink = document.getElementsByClassName("exitLink");
// exitLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     confirm("Are you sure you want to exit the game")

// });

// Team A Valuess
// setupTeamOneNextButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.getElementById("teamAName").innerText = teamOneName.value;
//     document.getElementById("teamOneplayerOne").innerText = teamOnePlayerOneName.value;
//     document.getElementById("teamOneplayerTwo").innerText = teamOnePlayerTwoName.value;
//     document.getElementById("teamOneplayerThree").innerText = teamOnePlayerThreeName.value;

//     Options Page Captain A Selection
//     document.getElementById("teamACaptainOne").innerText = teamOnePlayerOneName.value;
//     document.getElementById("teamACaptainTwo").innerText = teamOnePlayerTwoName.value;
//     document.getElementById("teamACaptainThree").innerText = teamOnePlayerThreeName.value;

//     Questions Page Team B Information
//     document.getElementById("gameplayTeamAName").innerText = teamOneName.value;
//     document.getElementById("gameplayTeamOneplayerOne").innerText = teamOnePlayerOneName.value;
//     document.getElementById("gameplayTeamOneplayerTwo").innerText = teamOnePlayerTwoName.value;
//     document.getElementById("gameplayTeamOneplayerThree").innerText = teamOnePlayerThreeName.value;
// });

// Team B Values
// setupTeamTwoNextButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.getElementById("teamBName").innerText = teamTwoName.value;
//     document.getElementById("teamTwoplayerOne").innerText = teamTwoPlayerOneName.value;
//     document.getElementById("teamTwoplayerTwo").innerText = teamTwoPlayerTwoName.value;
//     document.getElementById("teamTwoplayerThree").innerText = teamTwoPlayerThreeName.value;

//     // Options Page Captain B Selection
//     document.getElementById("teamBCaptainOne").innerText = teamTwoPlayerOneName.value;
//     document.getElementById("teamBCaptainTwo").innerText = teamTwoPlayerTwoName.value;
//     document.getElementById("teamBCaptainThree").innerText = teamTwoPlayerThreeName.value;

//     // Questions Page Team B Information
//     document.getElementById("gameplayTeamBName").innerText = teamTwoName.value;

//     document.getElementById("gameplayTeamTwoplayerOne").innerText = teamTwoPlayerOneName.value;
//     document.getElementById("gameplayTeamTwoplayerTwo").innerText = teamTwoPlayerTwoName.value;
//     document.getElementById("gameplayTeamTwoplayerThree").innerText = teamTwoPlayerThreeName.value;
// });

setupTeamTwoNextButton.addEventListener("click", function (e) {
    e.preventDefault();
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
});

// exit Link
let exitLink = document.getElementById("exitLink");
exitLink.addEventListener("click", function (e) {
    e.preventDefault();

    let exit = confirm("Are you sure you want to exit the game")
    if (exit == true) {
        window.location = "index.html"
    }
    else {

    }

});

