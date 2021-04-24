var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.getElementById("Time");
var Container0 = document.querySelector(".container");
var StartQuiz = document.getElementById("start-quiz");
var correct = document.querySelector(".correct");
var choices = document.querySelector(".choices");
var choiceA =document.getElementById("A");
var choiceB =document.getElementById("B");
var choiceC =document.getElementById("C");
var choiceD = document.getElementById("D");
var Submit =document.querySelector(".submit-button");
var question =document.querySelector(".question");




var Questionselection = [

    {

        question:"Commonly used Data Types do not include:",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "Alerts",
        choiceD: "Numbers",
        correct: "C",

    },

    {

        question:"The condition in an if/else statement is enclosed within__________.",
        choiceA: "Quotes",
        choiceB: "Curly brackets",
        choiceC: "Parenthesis",
        choiceD: "Square brackets",
        correct: "B",

    },

    {

        question:"Arrays in Javascript can be used to store __________.",
        choiceA: "Numbers and strings",
        choiceB: "Other arrays",
        choiceC: "Booleans",
        choiceD: "All of the above",
        correct: "D",

    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choiceA: "Commas",
        choiceB: "Curly brackets",
        choiceC: "Quotes",
        choiceD: "Parenthesis",
        correct: "C",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "Javascript",
        choiceB: "Terminal/bash",
        choiceC: "For loops",
        choiceD: "Console.log",
        correct: "D",
    },

]


var questionStop = 0;
var questionIndex = 0;
var endQuestion = Questionselection.length -1;
var counter = 0
var secondsStart = 75;
var Interval = 0;
var timeDeduction = 15;

//need to create a eventlistener to start quiz

StartQuiz.addEventListener("click", start);  

function start() {
    // container.getElementsByClassName.display = "block";
    // choices.document.querySelector.style.display = "block";
console.log("StartQuiz");
    getQuestion();
    NavTimer();
}

 function NavTimer() {
    setInterval(function(){
        secondsStart--
        console.log(secondsStart);
        NavTime.textContent = secondsStart;
        if (secondsStart <= 0) {
            clearInterval(Interval);
            Finished (questionStop);
            StartQuiz = "Your out of Time";
        }
    }, 1000);
}


function getQuestion() {
    // console.log('checking answer')
    var choices = Questionselection [questionIndex];
    question.textContent = Questionselection [0].question;
  A.textContent = Questionselection[0].choiceA;
  B.textContent = Questionselection[1].choiceB;
  C.textContent = Questionselection[2].choiceC;
  D.textContent = Questionselection[3].choiceD; 
  correct.textContent = Questionselection [0].correct; 

  for (var i = 0; i < endQuestion; i++) {

  }
}

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function () {
        var correct = Questionselection [questionIndex].correct;

        console.log('click');
        if (correct === this.getAttribute('onclick')) {
            MessageChannel.textContent = 'correct!';
            count = count + 10
            localStorage.setItem("count", count);
            //window.localStorage.setItem ('score + 5')?
        } else {
            MessageChannel.textContent = 'incorrect';
            timerCount = timerCount - 10;
            if (count > 0) {
                count= count - 3
                localStorage.setItem("count", count);
            }
            //window.localStorage.setItem('score - 2')
        }
        questionIndex++;
        getQuestion(); 
    
    });
    }
        


    

    