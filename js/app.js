'use strict'
// Initializing webGuest as a string value from the prompt
let webGuest = prompt('Hello! What is your name?');
// Initializing invalid as a string output to reduce redundancy
let invalid = 'Sorry, you have entered an invalid answer.';
// Initializing loopCheck as a boolean variable for my while lopos
let loopCheck = false;
// Initializing number as a Int
let number = Math.ceil(Math.random() * 100);
// Math.floor(Math.random() * 10 + 1);
// Initializing rightNum as a boolean for a loop
let rightNum = false;
// Initializing correct answer counter
let correct = 0;
// Initializing an array for question 7
let languages = ['english', 'spanish', 'german', 'japanese', 'java', 'python', 'javascript', 'css', 'html'];

alert(`Welcome to my page ${webGuest}! Today I will be asking you a series of questions about myself.
Please answer them all with either yes/no or y/n.`);

// Question One
// Function name: numOne
// Input: None
function numOne() {
    while(loopCheck !== true){
        let questionOne = prompt('Did I grow up in Washington?').toLowerCase();

        if(questionOne === 'n' || questionOne === 'no'){
            alert('Correct! I did not grow up in Washington, I was born in Texas and grew up in Iowa.');
            loopCheck = true;
            correct++;
        } else if(questionOne === 'y' || questionOne === 'yes'){
            alert('Incorrect! I actually grew up in Iowa.');
            loopCheck = true;
        } else{
            alert(invalid);
        }
    }
}
// Question Two
// Function name: numTwo
// Input: None
function numTwo() {
    while(loopCheck !== false){
        let questionTwo = prompt('Do I have an undergraduate degree?').toLowerCase();

        if(questionTwo === 'n' || questionTwo === 'no'){
            alert('Correct! I do not have an undergraduate degree.');
            loopCheck = false;
            correct++;
        } else if(questionTwo === 'y' || questionTwo === 'yes'){
            alert('Incorrect! I do have an Associates Degree and I do plan to finish an undergraduate degree.');
            loopCheck = false;
        } else {
            alert(invalid);
        }
    }
}
// Question Three
// Function name: numThree
// Input: None
function numThree() {
    while(loopCheck !== true){
        let questionThree = prompt('Have I ever worked in tech?').toLowerCase();

        if(questionThree === 'n' || questionThree === 'no'){
            alert('Correct! I have never had a job in tech.');
            loopCheck = true;
            correct++;
        } else if(questionThree === 'y' || questionThree === 'yes'){
            alert('Incorrect! I have never had a job in tech.');
            loopCheck = true;
        } else{
            alert(invalid);
        }
    }
}

// Question Four
// Function name: numFour
// Input: None
function numFour() {
    while(loopCheck !== false){
        let questionFour = prompt('Would I ever want to work in Cyber Security?').toLowerCase();

        if(questionFour === 'y' || questionFour === 'yes'){
            alert('Correct! Cyber Security is a huge interest of mine actually.');
            loopCheck = false;
            correct++;
        } else if(questionFour === 'n' || questionFour === 'no'){
            alert('Incorrect! Cyber Security is actually fascinating to me and I hope to one day be in the industry.');
            loopCheck = false;
        } else{
            alert(invalid);
        }
    }
}

// Question Five
// Function name: numFive
// Input: None
function numFive() {
    while(loopCheck !== true){
        let questionFive = prompt('Is Discord my favorit tech company?').toLowerCase();

        if(questionFive === 'y' || questionFive === 'yes'){
            alert('Correct! Discord is an awesome application that allows me to connect with people everywhere for gaming and other things!');
            loopCheck = true;
            correct++;
        } else if(questionFive === 'n' || questionFive === 'no'){
            alert('Incorrect! Discord is an awesome application and I recomment you check it out!');
            loopCheck = true;
        }else{
            alert(invalid);
        }
    }
}

// Question Six
// Function name: numSix
// Input: None
function numSix() {
    for(let i = 0; i <= 4; i++) {
        if(i === 4){
            alert(`Sorry you used all 4 guesses. The correct answer was ${number}`);
            i = 5;
        } else {
            let questionSix = parseInt(prompt('What number betweem 1-100 am I thinking of?'));

            if(questionSix === number){
                alert(`Correct! I was thinking of ${number}.`);
                i = 4;
                correct++;
            } else if( questionSix > number){
                alert(`Incorrect, try guessing a numnber that is less than ${questionSix}`);
            }  else if(questionSix < number){
                alert(`Incorrect, try guessing a numnber that is greater than ${questionSix}`);
            } else{
                alert('You entered an invalid entry.');
            }
        }
    }
}
// Question Seven
// function name: numSeven
// input: None
function numSeven() {
    for(let i = 0; i < 6; i++){
        let youRight = false;
        let questionSeven = prompt('Guess a language I can speak/code!').toLowerCase();

        for(let j = 0; j < languages.length; j++){

            if(languages[j] === questionSeven){
                alert(`Correct! I do know ${languages[j]}`);
                alert(`I know the following languages ${languages}.`);
                correct++;
                youRight = true;
                j = languages.length;
            }
        }
            
        if(youRight){
            i = 6;
        } else if(i === 5){
            alert(`You used all of your guesses, I know the following languages ${languages}.`);
            break;
        } else{
            alert(`Sorry, I do not know ${questionSeven}. Try Again!`);
        }
        
    }

    // alert(`Thank you ${webGuest} for taking my mini quiz! You got ${correct}/7!`);
    /*
        Did I grow up in Washington? No
        Do I have an undergraduate degree? No
        Have I ever worked in tech? No
        Would I ever want to work in Cyber Security? Yes
        Is Discord my favorite tech company? Yes
        
        "Hello, my name is Sam Brindle. I am enrolled in a course at Code Fellows in Washington state but recently finished
        my Associates Degree at Shoreline CC. I have never had a job in tech before, with my most recent employer being a 
        natural dying company. I plan to learn the skills of a full stack software developer through Code Fellows and 
        aspire to finish my Undergraduate Degree in Computer Science with a focus in Cyber Security. While I am sure my path
        sounds rather unclear to you as a reader I appreciate you coming to my page and reading about me."
    */
}

function fullQuiz(){
    alert(`Welcome to my page ${webGuest}! Today I will be asking you a series of questions about myself.
Please answer them all with either yes/no or y/n.`);
    numOne();
    numTwo();
    numThree();
    numFour();
    numFive();
    numSix();
    numSeven();
    alert(`Thank you ${webGuest} for taking my mini quiz! You got ${correct}/7!`);
}
// fullQuiz();