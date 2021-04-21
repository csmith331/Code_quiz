var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.querySelector(".Time");
var Container0 = document.querySelector(".container");
var StartQuiz = document.querySelector(".start-quiz");
var Answers = document.querySelector(".answers");
var Choices = document.querySelector("question-color");



var questionIndex = 0;

var counter = 0

var array = [

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


var secondsStart = 75;
var Interval = 0;
var timeDeduction = 15;

//need to create a timer function



function render (questionIndex) {
question
}




// questionDiv.textContent = questions[counter]

// answerDiv.textContent = answers[counter]



// function selectAnswer(){

//     //statement that compares their answer to the correct answer

//     if(true){

//         alert('you got the question right')

//     }

//     counter++

//     questionDiv.innerHTML = array[2].question

//     answerDiv.innerHTML = array[2].answer

}

// function start(){

//     // start timer

//     document.getElementById('start').style.visibility = 'hidden'

//     document.getElementById('question').style.visibility = 'visible'

//     document.getElementById('answer').style.visibility = 'visible'

}

