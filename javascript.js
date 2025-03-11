let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.33) {
        return computerChoice = "Rock";
    } else if (randomNumber > 0.66) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
   humanChoice = prompt("Please enter your choice?").toLowerCase();
   return humanChoice;
}


console.log(getHumanChoice());

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {

    }
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);