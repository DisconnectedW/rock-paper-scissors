const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(humanChoice,computerChoice) {
    const humanInput = humanChoice.toLowerCase();
    if (humanInput === computerChoice) {
        roundResultsMsg.textContent = "Its a draw, nobody gets a point";
    } else if (humanInput === "rock" && computerChoice === "scissors") {
        roundResultsMsg.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanInput === "paper" && computerChoice === "rock") {
        roundResultsMsg.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanInput === "scissors" && computerChoice === "paper") {
        roundResultsMsg.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (computerChoice === "paper" && humanInput === "rock") {
        roundResultsMsg.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else if (computerChoice === "rock" && humanInput === "scissors") {
        roundResultsMsg.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (computerChoice === "scissors" && humanInput === "paper") {
        roundResultsMsg.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
}

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    computerScoreSpanElement.textContent = computerScore;
    playerScoreSpanElement.textContent = humanScore;

    if (computerScore === 5) {
        roundResultsMsg.textContent = "The computer has won the game";
    } else if (humanScore === 5) {
        roundResultsMsg.textContent = "You won the game!";
    }
});

paperBtn.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
    computerScoreSpanElement.textContent = computerScore;
    playerScoreSpanElement.textContent = humanScore;

    if (computerScore === 5) {
        roundResultsMsg.textContent = "The computer has won the game";
    } else if (humanScore === 5) {
        roundResultsMsg.textContent = "You won the game!";
    }
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
    computerScoreSpanElement.textContent = computerScore;
    playerScoreSpanElement.textContent = humanScore;

    if (computerScore === 5) {
        roundResultsMsg.textContent = "The computer has won the game";
    } else if (humanScore === 5) {
        roundResultsMsg.textContent = "You won the game!";
    }
});

