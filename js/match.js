let questionContainer = document.getElementById("question");
let answerOptions = document.getElementById("option1");
let wrongAns1 = document.getElementById("wrongAns1");
let wrongAns2 = document.getElementById("wrongAns2");
let wrongAns3 = document.getElementById("wrongAns3");

let questionList = [];

let confirmAnswer = document.getElementById("confirmAnswer");

let myDiv = document.getElementById("myDiv");


function getQuestion(question) {
  questionsPerRow = questions.split("\n");
  questionsPerRow.forEach((element, index) => {
    if (index !== 0) {
      single = element.split(",");
      quest = single[0];
      ans = single[1];
      wrongAns = [single[2], single[3], single[4]];
      let questObj = new Question(quest, ans, wrongAns);
      questionList.push(questObj);
    }
  });
}

// Get random question from array
let randomQuestion = Math.floor(Math.random() * questionList.length);

// Select option div element and background color change
answerOptions.addEventListener("click", function () {
  answerOptions.style.background = "#B40F0F";
  wrongAns1.style.background = "";
  wrongAns2.style.background = "";
  wrongAns3.style.background = "";
});

// Select option div element and background color change
wrongAns1.addEventListener("click", function () {
  wrongAns1.style.background = "#B40F0F";
  answerOptions.style.background = "";
  wrongAns2.style.background = "";
  wrongAns3.style.background = "";
});

// Select option div element and background color change
wrongAns2.addEventListener("click", function () {
  wrongAns2.style.background = "#B40F0F";
  wrongAns1.style.background = "";
  answerOptions.style.background = "";
  wrongAns3.style.background = "";
});

// Select option div element and background color change
wrongAns3.addEventListener("click", function () {
  wrongAns3.style.background = "#B40F0F";
  wrongAns2.style.background = "";
  wrongAns1.style.background = "";
  answerOptions.style.background = "";
});

// Question 
let questions = `Question,Answer,Wrong-answer 1,Wrong-answer 2,Wrong-answer 3
Who is the president of liberia,George Weah,Ellen Johnson,IBK,DonaldTrump
Who was the first to fly in the world,The Wright brothers,Albert Einstein,Ernest Keita,Thomas edison
What is the square root of 64,8,16,32,7
if i was born in 1990 how old am i 2019,29,35,27,40
Who discovered radiation ,Marie Curie,Albert Einstein ,Steven Hawkin,Gandalf
Who is the president of liberia,George Weah,Ellen Johnson,IBK,DonaldTrump
Who was the first to fly in the world,The Wright brothers,Albert Einstein,Ernest Keita,Thomas edison
What is the square root of 64,8,16,32,7
if i was born in 1990 how old am i 2019,29,35,27,40
Who discovered radiation ,Marie Curie,Albert Einstein ,Steven Hawkin,Gandalf
Who is the president of liberia,George Weah,Ellen Johnson,IBK,DonaldTrump
Who was the first to fly in the world,The Wright brothers,Albert Einstein,Ernest Keita,Thomas edison
What is the square root of 64,8,16,32,7
if i was born in 1990 how old am i 2019,29,35,27,40
Who discovered radiation ,Marie Curie,Albert Einstein ,Steven Hawkin,Gandalf
Who is the president of liberia,George Weah,Ellen Johnson,IBK,DonaldTrump
Who was the first to fly in the world,The Wright brothers,Albert Einstein,Ernest Keita,Thomas edison
What is the square root of 64,8,16,32,7
if i was born in 1990 how old am i 2019,29,35,27,40
Who discovered radiation ,Marie Curie,Albert Einstein ,Steven Hawkin,Gandalf
Who is the president of liberia,George Weah,Ellen Johnson,IBK,DonaldTrump
Who was the first to fly in the world,The Wright brothers,Albert Einstein,Ernest Keita,Thomas edison
What is the square root of 64,8,16,32,7
if i was born in 1990 how old am i 2019,29,35,27,40
Who discovered radiation ,Marie Curie,Albert Einstein ,Steven Hawkin,Gandalf`;
