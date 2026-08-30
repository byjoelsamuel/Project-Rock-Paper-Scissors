function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]; // Function that generates random choices
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?"); // Function that asks for input
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

const signButton = document.getElementById("signButton");

function playRound(humanChoice, computerChoice) { // Function that plays the game, combining both user and computer's input
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

    if (human === computer) {
        console.log(`It's a tie! Both chose ${computerChoice}`);
        return "tie";
    }

    if (beats[human] === computer) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); // sub-function that displays human winner message if score is higher.
        return "human";
    }

    console.log(`You lose! ${computerChoice} beats ${humanChoice}`); // sub-function that displays loss when score is lower :(
    return "computer";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const choices = [rock, paper, scissors];

    for (let round = 0; round < 5; round++) { // function that tracks the score between user and computer
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(choices);
        const winner = playRound(humanSelection, computerSelection);

        if (winner === "human") humanScore++;
        else if (winner === "computer") computerScore++;
    }

    if (humanScore > computerScore) { // sub function that determines who won the game
        console.log(`You win the game! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The game is a tie! ${humanScore} to ${computerScore}`);
    }
}

signButton.addEventListener("click", playGame); // Button that allows users to play game.
