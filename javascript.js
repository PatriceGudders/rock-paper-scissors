// Declare variables
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;


// Create and append 3 buttons to body
const body = document.querySelector("body");
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);


// Event listerner for each button with a reference funtion
btnRock.addEventListener('click', function () {
    playRound(getComputerChoice(), "rock")
});
btnPaper.addEventListener('click', function () {
    playRound(getComputerChoice(), "paper")
});
btnScissors.addEventListener('click', function () {
    playRound(getComputerChoice(), "scissors")
});


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


function playRound(computerChoice, humanChoice) {
    const result = document.createElement("div");
    const score = document.createElement("div");
    if (computerChoice === humanChoice) {
        result.textContent = `It's a tie! ${computerChoice} vs ${humanChoice}`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors')) {
        result.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper')) {
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if ((humanChoice === 'paper' && computerChoice === 'rock')) {
        result.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if ((humanChoice === 'paper' && computerChoice === 'scissors')) {
        result.textContent = "You lose! Scissors beats paper.";
        computerScore++;
    } else if ((humanChoice === 'scissors' && computerChoice === 'paper')) {
        result.textContent = "You win! Scissors beats paper.";
        humanScore++;
    } else if ((humanChoice === 'scissors' && computerChoice === 'rock')) {
        result.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    }
    score.textContent = 'Player: ' + humanScore + ' - Computer: ' + computerScore;
    body.appendChild(result);
    body.appendChild(score);

    if (humanScore === 5 || computerScore === 5) {
        const finalScore = document.createElement("div");
        if (humanScore > computerScore) {
            finalScore.textContent = "Final score: You win! " + humanScore + " - " + computerScore + ".";
        } else {
            finalScore.textContent = "Final score: You lose! " + humanScore + " - " + computerScore + ".";
        }
        body.appendChild(finalScore);
    }
}