/* Create function to determine playerselection */
function getPlayerChoice() {
    let playerChoice = ""
    while (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
        playerChoice = prompt("Rock, Paper, Scissors");
    }
    return playerChoice.toLowerCase()

 }

    /* prompt choicewindow to user - convert chocie to lowercase - if user did not choose rock paper or scissors
    prompt again until user chooses rock paper or scissors - return value */



/* Create function to determine computerselection 
The computer needs to select a random item from a list of three choices */

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    playerResult = ""
    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats Rock")
        playerResult = "lose"
        return playerResult
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock")
        playerResult = "win"
        return playerResult
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors")
        playerResult = "win"
        return playerResult
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors")
        playerResult = "lose"
        return playerResult
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beat Paper")
        playerResult = "lose"
        return playerResult
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win Scissors beat Paper")
        playerResult = "win"
        return playerResult
    }
    else {
        alert("Draw!")
        playerResult = "draw"
        return playerResult
    }
}




/* Evaluate both selections and check for win 
If not win --> draw*/

function game() {
    let round = ""
    let winCount = 0
    for (let i = 0; i < 5; i++) {
        round = playRound(getPlayerChoice(), getComputerChoice())
        if (round === "win") {
            winCount += 1
        }
    }
    if (winCount >= 3) {
        alert("You win!")
    }
    else {
        alert("You lose!")
    }
}

game()