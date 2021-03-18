/* Pseudo Code
I am going to set a variable for myself containing a window 
alert and a variable for randomized computer choices. I will
then set up an if else statement for the computer's choices.
I'm then going to set up another variable comparing two choices
and connect it to 3 if else statements for lose, win, tie.

*/
// let choices = ['r', 'p', 's'];
// var randomNumber = Math.floor(Math.random() * 3);
// console.log(randomNumber);
// var computerChoice = choices[randomNumber];
// console.log(computerChoices);


// Variables
let userChoice = prompt('Do you choose rock, paper, or scissors?');  //prompt
let compChoice = Math.random();

// If statements for computer's choices
if (compChoice <0.34) {
    compChoice = 'Rock';
} else if (compChoice <= 0.67) {
    compChoice = 'Paper';
} else {
    compChoice = 'Scissors';
}

// Compare function
let compare = function(myChoice, theirChoice) {
    if(myChoice === theirChoice) {
        return 'Tie!';
    }
}
if(myChoice === 'Rock') {
    if(theirChoice === 'Scissors') {
        return 'You Win!';
    } else {
        return 'Try again.';
    }
}
if(myChoice === 'Paper') {
    if(theirChoice === 'Rock') {
        return 'You Win!';
    } else {
        return 'Try again.';
    }
}
if(myChoice === 'Scissors') {
    if(theirChoice === 'Paper') {
        return 'You Win!';
    } else {
        return 'Try again.';
    }
}

// Result log
console.log('User Choice: ' + userGuess);
console.log('Computer Choice: ' + compGuess);
compare(userGuess, compGuess);

