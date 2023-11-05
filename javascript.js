let playerScore = 0
let compScore = 0

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

const result = document.querySelector('#result')
const playerChoice = document.querySelector('#playerChoice')
const compChoice = document.querySelector('#compChoice')

const playerScoreText = document.querySelector('#playerScore')
const compScoreText = document.querySelector('#compScore')


function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) return "Rock"
    else if (choice == 1) return "Paper"
    else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    let ps = 0, cs = 0

    compChoice.textContent = computerSelection

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // rock = 0, paper = 1, scissors = 2
    if (playerSelection == "rock") ps = 0
    else if (playerSelection == "paper") ps = 1
    else if (playerSelection == "scissors") ps = 2
    else return "Invalid choice, please try again"

    if (computerSelection == "rock") cs = 0
    else if (computerSelection == "paper") cs = 1
    else if (computerSelection == "scissors") cs = 2

    if (cs == ps) return "Draw! Another round"

    if (ps == 0 && cs == 1) {
        compScore++
        return "Paper beats Rock, You lose!"
    }
    else if (ps == 0 && cs == 2) {
        playerScore++
         return "Rock beats Scissors, You Win!"
    }
    else if (ps == 1 && cs == 0){
        playerScore++
        return "Paper beats Rock, You Win!"
    }
    else if (ps == 1 && cs == 2) {
        compScore++
        return "Scissors beats Paper, You lose!"
    }
    else if (ps == 2 && cs == 0) {
        compScore++
        return "Rock beats Scissors, You lose!"
    }
    else if (ps == 2 && cs == 1) {
        playerScore++
        return "Scissors beats Paper, You Win!"
    }
}

function resetScore() {
    playerScore = 0;
    compScore = 0;

    const emp = "";

    playerScoreText.textContent = `Player: ${playerScore}`;
    compScoreText.textContent = `Computer: ${compScore}`;

    playerChoice.textContent = emp
    compChoice.textContent = emp
}


function updateScore (){
    playerScoreText.textContent = `Player: ${playerScore}`
    compScoreText.textContent = `Computer: ${compScore}`

    if (playerScore == 5){
        alert("Game Over!!!\nYou Win!");
        resetScore()
    }
    else if (compScore == 5){
        alert("Game Over!!!\nComputer Wins!");
        resetScore()
    }
}

function game (playerSelection) {
    let str = "" 
    str = playRound(playerSelection, getComputerChoice())
    updateScore()
    if (playerScore == 5 || compScore == 5) str = ""
    return str
}


rockBtn.addEventListener('click', () => {
    playerSelection = "Rock"
    playerChoice.textContent = playerSelection
    result.textContent = game(playerSelection)
})

paperBtn.addEventListener('click', () => {
    playerSelection = "Paper"
    playerChoice.textContent = playerSelection
    result.textContent = game(playerSelection)
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = "Scissors"
    playerChoice.textContent = playerSelection
    result.textContent = game(playerSelection)
})