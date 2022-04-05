'use strict'

let webGuest = prompt('Hello! What is your name?')
let invalid = 'Sorry, you have entered an invalid answer.'

// let noChecker = 'no'
// let nChecker = 'n'
// let yesChecker = 'yes'
// let yChecker = 'y'
//let loopCheck = false;

alert(`Welcome to my page ${webGuest}! Today I will be asking you a series of questions about myself.
Please answer them all with either yes/no or y/n.`)

let questionOne = prompt('Did I grow up in Washington?').toLowerCase()

if(questionOne === 'n' || questionOne === 'no'){
    alert('Correct! I did not grow up in Washington, I was born in Texas and grew up in Iowa.')
} else if(questionOne === 'y' || questionOne === 'yes'){
    alert('Incorrect! I actually grew up in Iowa.')
} else{
    alert(invalid)
}

let questionTwo = prompt('Do I have an undergraduate degree?').toLowerCase()

if(questionTwo === 'n' || questionTwo === 'no'){
    alert('Correct! I do not have an undergraduate degree.')
} else if(questionTwo === 'y' || questionTwo === 'yes'){
    alert('Incorrect! I do have an Associates Degree and I do plan to finish an undergraduate degree.')
} else{
    alert(invalid)
}

let questionThree = prompt('Have I ever worked in tech?').toLowerCase()

if(questionThree === 'n' || questionThree === 'no'){
    alert('Correct! I have never had a job in tech.')
} else if(questionThree === 'y' || questionThree === 'yes'){
    alert('Incorrect! I have never had a job in tech.')
} else{
    alert(invalid)
}

let questionFour = prompt('Would I ever want to work in Cyber Security?').toLowerCase()

if(questionFour === 'y' || questionFour === 'yes'){
    alert('Correct! Cyber Security is a huge interest of mine actually.')
} else if(questionFour === 'n' || questionFour === 'no'){
    alert('Incorrect! Cyber Security is actually fascinating to me and I hope to one day be in the industry.')
} else{
    alert(invalid)
}

let questionFive = prompt('Is Discord my favorit tech company?').toLowerCase()

if(questionFive === 'y' || questionFive === 'yes'){
    alert('Correct! Discord is an awesome application that allows me to connect with people everywhere for gaming and other things!')
} else if(questionFive === 'n' || questionFive === 'no'){
    alert('Incorrect! Discord is an awesome application and I recomment you check it out!')
}else{
    alert(invalid)
}

alert(`Thank you ${webGuest} for taking my mini quiz!`)
/*
    Did I grow up in Washington? No
    Do I have an undergraduate degree? No
    Have I ever worked in tech? No
    Would I ever want to work in Cyber Security? Yes
    Is Discord my favorite tech company? Yes
    
    Hello, my name is Sam Brindle. I am enrolled in a course at Code Fellows in Washington state but recently finished
    my Associates Degree at Shoreline CC. I have never had a job in tech before, with my most recent employer being a 
    natural dying company. I plan to learn the skills of a full stack software developer through Code Fellows and 
    aspire to finish my Undergraduate Degree in Computer Science with a focus in Cyber Security. While I am sure my path
    sounds rather unclear to you as a reader I appreciate you coming to my page and reading about me.
*/