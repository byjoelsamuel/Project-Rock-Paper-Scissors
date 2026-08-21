function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]; // generates random choices to choose
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?"); // asks the user what they want to input
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

const signButton = document.getElementById("signButton");

function playRound(humanChoice, computerChoice) { // this is the user's round, define what input beats other input.
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

    if (human === computer) {
        console.log(`It's a tie! Both chose ${computerChoice}`);
        return "tie";
    }

    if (beats[human] === computer) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); // add a Winner Screen for beating computer.
        return "human";
    }

    console.log(`You lose! ${computerChoice} beats ${humanChoice}`); // add a Losing Screen for being beaten. :(
    return "computer";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const choices = [rock, paper, scissors];

    for (let round = 0; round < 5; round++) { // best of 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(choices);
        const winner = playRound(humanSelection, computerSelection);

        if (winner === "human") humanScore++;
        else if (winner === "computer") computerScore++;
    }

    if (humanScore > computerScore) { // add end title declaring what happened.
        console.log(`You win the game! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The game is a tie! ${humanScore} to ${computerScore}`);
    }
}

signButton.addEventListener("click", playGame); // Add button for playing game.
