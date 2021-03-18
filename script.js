// Computer choices
var wins = 0;
var losses = 0;
var ties = 0;

function playGame() {    
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    let compChoice = choices[randomNumber];
    console.log(compChoice);

    let userChoice = prompt('Do you choose rock, paper, or scissors?');
    console.log('userChoice: ' + userChoice);


    function compare (userChoice, compChoice) {
        if(userChoice === compChoice) {
            alert('You Tied!');
            ties++;
        }
    }
    if(userChoice === 'r') {
        if(compChoice === 's') {
            alert('Rock Wins!');
            wins++;
        } else if(compChoice === 'p') {
            alert('Paper Wins!');
            losses++;
        }
    }
    if(userChoice === 'p') {
        if(compChoice === 'r') {
            alert('Paper Wins!');
            wins++;
        } else {
            alert('Scissors Wins!');
            losses++;
        }
    }
    if(userChoice === 's') {
        if(compChoice === 'p') {
            alert('Scissors Wins!');
            wins++;
        } else {
            alert('Rock Wins!');
            losses++;
        }
    }

    alert(
        'Current scores: \n' +
            'Wins: ' +
            wins +
            '\n' +
            'Ties: ' +
            ties +
            '\n' +
            'Losses: ' +
            losses
    );

    let playAgain = confirm('Do you want to play again');

    if (playAgain) {
        playGame();
    }
}
playGame();