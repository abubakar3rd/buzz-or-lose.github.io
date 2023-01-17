let numberOfRoundChoosed = document.getElementById("numberOfRoundChoosed");
let roundSummery = document.getElementById("roundSummery");
let numberOfRoundPlayingFor = document.getElementById("numberOfRoundPlayingFor");
let gameResult = document.getElementById("gameResult");
let finishUpTeamOne = document.getElementById("finishUpTeamOne");
let finishUpTeamTwo = document.getElementById("finishUpTeamTwo");

let finishUpTotalScore = document.getElementById("finishUpTotalScore")

let roundSummeryCounter = 1
optionPageNextButton.addEventListener("click", function (e) {
    numberOfRoundPlayingFor.innerText = roundSummeryCounter + "/" + numberOfRoundChoosed.value;
})

roundSummery.addEventListener("click", function(){
    roundSummeryCounter = roundSummeryCounter + 1
})
