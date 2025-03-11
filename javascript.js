let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

playGame();


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return computerChoice = "rock";
    } else if (randomNumber > 0.66) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}


function getHumanChoice() {
    humanChoice = prompt("Please enter your choice?").toLowerCase();
    return humanChoice;
}


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors')) {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper')) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if ((humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if ((humanChoice === 'paper' && computerChoice === 'scissors')) {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if ((humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if ((humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
}


function playGame() {
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Final score: " + humanScore + " - " + computerScore + ".")
    } else {
        console.log("You lose! Final score: " + humanScore + " - " + computerScore + ".")
    }
}