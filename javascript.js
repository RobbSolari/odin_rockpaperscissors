const gameArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return gameArray[Math.floor(Math.random() * gameArray.length)];
};

function playerPlay() {
    return gameArray[Math.floor(Math.random() * gameArray.length)];
};

function playRound(computerSelection, playerSelection) {
    if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
            playerScore++; 
    };
    if (
        computerSelection === "Rock" && playerSelection === "Scissors" ||
        computerSelection === "Paper" && playerSelection === "Rock" ||
        computerSelection === "Scissors" && playerSelection === "Paper"
        ) {
            computerScore++;  
    };
};

function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose.";
    } else {
        return "Tie.";
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    playRound(computerSelection, playerSelection);
    }
};

game();
console.log("Player score: " + playerScore);
console.log("Computer score: " + computerScore);
console.log(winner(playerScore, computerScore));