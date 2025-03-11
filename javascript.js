let computerChoice;
let humanChoice;

function getComputerChoice() {
    let randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber <= 0.33) {
        return computerChoice = "rock";
    } else if (randomNumber > 0.66) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
   humanChoice = prompt("Please enter your choice?").toLowerCase();
   return humanChoice;
}

console.log(getHumanChoice());

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if ((playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if ((playerSelection === 'paper' && computerSelection === 'scissors')) {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if ((playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    for( let i = 1; i <= 5; i++) {
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Final score: " + humanScore + " - " + computerScore + ".")
    } else {
        console.log("You lose! Final score: " + humanScore + " - " + computerScore + ".")
    }
}