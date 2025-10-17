function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    const userInput = prompt("Rock, Paper or Scissors");
    return userInput.toLowerCase();
}

