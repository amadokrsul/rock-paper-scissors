function getComputerChoice() {
    let x = Math.random();
    if (x > 0.666) {
        return 'Rock';
    } else if (x > 0.333 && x <= 0.666) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let userChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    switch(userChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {return 'You Win! Rock beats Scissors'};
            if (computerChoice === 'paper') {return 'You Lose! Paper beats Rock'};
            if (computerChoice === 'rock') {return `Draw! Both choices were ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;}
        case 'paper':
            if (computerChoice === 'rock') {return 'You Win! Paper beats Rock'};
            if (computerChoice === 'scissors') {return 'You Lose! Scissors beats Paper'};
            if (computerChoice === 'paper') {return `Draw! Both choices were ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;}
        case 'scissors':
            if (computerChoice === 'paper') {return 'You Win! Scissors beats Paper'};
            if (computerChoice === 'rock') {return 'You Lose! Rock beats Scissors'};
            if (computerChoice === 'scissors') {return `Draw! Both choices were ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;}
    }
}

function game() {
    let validInputs = new Set(['ROCK', 'PAPER', 'SCISSORS']);

    for (let i = 0; i < 5; i++) {
        let userInput = prompt("What's your move? ");
        if (!validInputs.has(userInput.toUpperCase())) {
            throw new Error('User input is not valid! Please choose between \'Rock, Paper, or Scissors\'!');
        }
        let computerInput = getComputerChoice();
        console.log(playRound(userInput, computerInput));
    }
}

game();