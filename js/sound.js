let gameTunesCounter = 0;

let gameTune1 = document.getElementById("gameTune1");
let gameTune2 = document.getElementById("gameTune2");
let gameTune3 = document.getElementById("gameTune3");
let gameTune4 = document.getElementById("gameTune4");
let correctAnswer = document.getElementById("correctAnswer");
let wrongAnswer = document.getElementById("wrongAnswer");


let gameTunes = [gameTune1, gameTune2, gameTune3, gameTune4];

let volumeUp = document.getElementById("volumeUp");
let volumeMute = document.getElementById("volumeMute");

volumeUp.addEventListener("click", function () {
    gameTunes[gameTunesCounter].play();
    gameTunes[gameTunesCounter].pause();
    gameTunes[gameTunesCounter].currentTime = 0;
    gameTunesCounter = gameTunesCounter + 1;
    volumeUp.innerHTML = `<p><i class="fas fa-volume-up"></i></p>`
    if (gameTunesCounter >= 4) {
        gameTunesCounter = 0;
        volumeUp.innerHTML = `<p><i class="fas fa-stop"></i></p>`
    }
    
    volumeUp.style.display = "block";
    gameTunes[gameTunesCounter].play();
});