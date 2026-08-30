function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const choices = [rock, paper, scissors];

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

    let outcome;
    let winner;

    if (human === computer) {
        outcome = `It's a tie! Both chose ${computerChoice}`;
        winner = "tie";
    } else if (beats[human] === computer) {
        outcome = `You win! ${humanChoice} beats ${computerChoice}`;
        winner = "human";
    } else {
        outcome = `You lose! ${computerChoice} beats ${humanChoice}`;
        winner = "computer";
    }

    resultDiv.textContent = outcome;
    return winner;
}

function updateScore() {
    scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function checkForGameWinner() {
    if (humanScore === 5) {
        resultDiv.textContent = `You win the game! ${humanScore} to ${computerScore}`;
        gameOver = true;
    } else if (computerScore === 5) {
        resultDiv.textContent = `Computer wins the game! ${computerScore} to ${humanScore}`;
        gameOver = true;
    }
}

function handleClick(humanSelection) {
    if (gameOver) return;

    const computerSelection = getComputerChoice(choices);
    const winner = playRound(humanSelection, computerSelection);

    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;

    updateScore();
    checkForGameWinner();
}

document.getElementById("rockButton").addEventListener("click", () => handleClick(rock));
document.getElementById("paperButton").addEventListener("click", () => handleClick(paper));
document.getElementById("scissorsButton").addEventListener("click", () => handleClick(scissors));