let instructions = document.getElementById("instructions");
let about = document.getElementById("about");
let documentation = document.getElementById("documentation");
instructionsNavButton.style.background = "#610404";
instructionsNavButton.addEventListener("click", function(){
    instructionsNavButton.style.background = "#610404";
    aboutNavButton.style.background = "";
    documentationsNavButton.style.background = "";
    about.style.display = "none";
    documentation.style.display = "none";
    instructions.style.display = "block";
})

aboutNavButton.addEventListener("click", function(){
    aboutNavButton.style.background = "#610404";
    instructionsNavButton.style.background = "";
    documentationsNavButton.style.background = "";
    documentation.style.display = "none";
    instructions.style.display = "none";
    about.style.display = "block";
})

documentationsNavButton.addEventListener("click", function(){
    documentationsNavButton.style.background = "#610404";
    aboutNavButton.style.background = "";
    instructionsNavButton.style.background = "";
    about.style.display = "none";
    instructions.style.display = "none";
    documentation.style.display = "block";
})