function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let ps = 0, cs = 0;

    playerSelection = playerSelection.toLowerCase();

    // rock = 0, paper = 1, scissors = 2
    if (playerSelection == "rock") ps = 0;
    else if (playerSelection == "paper") ps = 1;
    else if (playerSelection == "scissors") ps = 2;
    else return "Invalid choice, please try again";

    if (computerSelection == "rock") cs = 0;
    else if (computerSelection == "paper") cs = 1;
    else if (computerSelection == "scissors") cs = 2;

    if (cs == ps) return "Draw! Another round";

    if (ps == 0 && cs == 1) return "Paper beats Rock, You lose!"
    else if (ps == 0 && cs == 2) return "Rock beats Scissors, You Win!"
    else if (ps == 1 && cs == 0) return "Paper beats Rock, You Win!"
    else if (ps == 1 && cs == 2) return "Scissors beats Paper, You lose!"
    else if (ps == 2 && cs == 0) return "Rock beats Scissors, You lose!"
    else if (ps == 2 && cs == 1) return "Scissors beats Paper, You Win!"
}

function game (playerSelection) {
    let i = 0;
    for (i=0; i < 5; i++){
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}