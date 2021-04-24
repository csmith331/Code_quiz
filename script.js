var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.querySelector(".Time");
var Container0 = document.querySelector(".container");
var StartQuiz = document.querySelector(".start-quiz");
var Answers = document.querySelector(".answers");
var Choices = document.querySelector("choices");
var A =document.getElementById("A");
var B =document.getElementById("B");
var C =document.getElementById("C");
var D = document.getElementById("D");
var Submit =document.querySelector(".submit-button");
var question =document.querySelector("question");




var codingQuestions = [

    {

        questions:"Commonly used Data Types do not include:",

        choices:["String", "Booleans", "Alerts", "Numbers"],

        answers: "Booleans",

    }

    ,{

        questions:"The condition in an if/else statement is enclosed within__________.",

        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        
        answers: "Curly brackets",

    }

    ,{

        questions:"Arrays in Javascript can be used to store __________.",

        choices: ["Numbers and strings", "Other arrays", "Booleans", "All the above"],

        answers: "Booleans",

    }

    ,{
        questions: "String values must be enclosed within _______ when being assigned to variables.",

        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],

        answers: "Curly brackets",
    }

    ,{
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",

        choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],

        answers: "For loops",
    }

]



var questionIndex = 0;
var endQuestion = codingQuestions.length -1;
var counter = 0
var secondsStart = 75;
var Interval = 0;
var timeDeduction = 15;

//need to create a eventlistener to start quiz

StartQuiz.addEventListener("click", start);  

Function start() {
    Container.getElementsByClassName.visbility = "hidden";

    SecondsStart = 75;
questionDisplay();
NavTimer();
}

 

function NavTimer() {
if (Interval == 0) {
    interval = setInterval(function () {
        secondsStart--;
        StartQuiz = "Time: " + secondsStart;

        if (secondsStart <= 0) {
            clearInterval(Interval);
            Finished ();
            StartQuiz = "Your out of Time";
        }
    }, 1000);
}
// return(question);
// };


function questionDisplay() {
    var presentQuestion = codingQuestions [questionIndex];

  A.textcontent = codingQuestions[0].choices[0];
  B.textcontent = codingQuestions[1].choices[1];
  C.textcontent = codingQuestions[2].choices[2];
  D.textcontent = codingQuestions[3].choices[3];  

  for (var i = 0; i < lastQuestion; i++) {

  }
}

for (let i = 0; i < choicesDiv.length; i++) {
    choicesDiv[i].addEventListener('click', function () {
        var Answer = codingQuestions[questionIndex].correct;

        console.log('click');
        if (Answer) === this.getAttribute('onclick')) {
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
        }
        }
        questionIndex++;
        questionDisplay();
    }
    

