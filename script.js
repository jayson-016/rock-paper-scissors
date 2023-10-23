function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice;
    if (num == 0) {
        choice = "Rock";
    } else if (num == 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if ((player == "rock") && (computer == "paper")) {
        return "Lose";
    } else if ((player == "rock") && (computer == "scissors")) {
        return "Win";
    } else if ((player == "paper") && (computer == "rock")) {
        return "Win";
    } else if ((player == "paper") && (computer == "scissors")) {
        return "Lose";
    } else if ((player == "scissors") && (computer == "rock")) {
        return "Lose";
    } else if ((player == "scissors") && (computer == "paper")) {
        return "Win";
    } else {
        return "Tie";
    }
}

function validatePlayerSelection(playerSelection) {
    if ((playerSelection.toLowerCase() != "rock") && 
        (playerSelection.toLowerCase() != "paper") &&
         (playerSelection.toLowerCase() != "scissors")) {
        console.log("Please enter a valid entry.");
        return 1;
    } else {
        return 0;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let round = 5;

    for (let i = 1; i <= round; i++) {

        for (; ;) {
            let playerSelection = prompt("Enter your guess (Rock, Paper or Scissors):");
            let validEntry = validatePlayerSelection(playerSelection);

            let formatPlayerSelection = (playerSelection.charAt(0)).toUpperCase() + (playerSelection.substring(1, playerSelection.length)).toLowerCase();

            if (validEntry == 0) {

                let computerSelection = getComputerChoice();

                let result = playRound(playerSelection, computerSelection);

                if (result == "Lose") {
                    console.log("You Lose! " + computerSelection + " beats " + formatPlayerSelection);
                    computerScore = computerScore + 1;
                } else if (result == "Win") {
                    console.log("You Win! " + formatPlayerSelection + " beats " + computerSelection);
                    playerScore = playerScore + 1;
                } else {
                    console.log("It's a tie");
                }
                break;
            }
        }

    }


    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Winner: Player");
    } else if (playerScore < computerScore) {
        console.log("Winner: Computer");
    } else {
        console.log("Score Ties after 5 rounds");
    }

}

console.log(game());

