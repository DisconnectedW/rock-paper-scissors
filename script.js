let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    const userInput = prompt("Rock, Paper or Scissors");
    return userInput;
}

function playRound(humanChoice,computerChoice) {
    const humanInput = humanChoice.toLowerCase();
    if (humanInput === computerChoice) {
        console.log("Its a draw, nobody gets a point")
    } else if (humanInput === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanInput === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanInput === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (computerChoice === "paper" && humanInput === "rock") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (computerChoice === "rock" && humanInput === "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (computerChoice === "scissors" && humanInput === "paper") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
}


