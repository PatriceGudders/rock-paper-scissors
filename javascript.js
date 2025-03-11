let computerChoice;

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