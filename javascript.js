function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    let ps = 0, cs = 0;

    // rock = 0, paper = 1, scissor = 2
    if (playerSelection == "rock") ps = 0;
    else if (playerSelection == "paper") ps = 1;
    else if (playerSelection == "scissor") ps = 2;

    if (computerSelection == "rock") cs = 0;
    else if (computerSelection == "paper") cs = 1;
    else if (computerSelection == "scissor") cs = 2;

    if (cs == ps) return "Draw! Another round";

    if (ps == 0 && cs == 1) return "Paper beats Rock, You lose!"
    else if (ps == 0 && cs == 2) return "Rock beats Scissors, You Win!"
    else if (ps == 1 && cs == 0) return "Paper beats Rock, You Win!"
    else if (ps == 1 && cs == 2) return "Scissors beats Paper, You lose!"
    else if (ps == 2 && cs == 0) return "Rock beats Scissors, You lose!"
    else if (ps == 2 && cs == 1) return "Scissors beats Paper, You Win!"
}