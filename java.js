const results = document.querySelector('#results');


/* Create function to determine playerselection */


    /* prompt choicewindow to user - convert chocie to lowercase - if user did not choose rock paper or scissors
    prompt again until user chooses rock paper or scissors - return value */



/* Create function to determine computerselection 
The computer needs to select a random item from a list of three choices */

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase()
}

let playerScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection) {
    while (playerScore !== 5 && computerScore !== 5) {
        playerResult = ""
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "lose"
            return playerResult
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "win"
            return playerResult
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "win"
            return playerResult
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "lose"
            return playerResult
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "lose"
            return playerResult
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1
            results.textContent = `The score is ${playerScore} - ${computerScore}`
            playerResult = "win"
            return playerResult
        }
        else {
            playerResult = "draw"
            return playerResult
        }
    }

    const endresult = document.querySelector('#endresult');
    if (computerScore == 5) {
        endresult.textContent = "You lost!"
    }
    else {
        endresult.textContent = "You win!"
    }
   
};


/* Evaluate both selections and check for win 
If not win --> draw*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()) );
});





