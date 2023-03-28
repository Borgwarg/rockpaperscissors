/* Create function to determine playerselection */
function getPlayerChoice() {
    let playerChoice = ""
    while (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
        console.log(playerChoice)
        playerChoice = prompt("Rock, Paper, Scissors");
    }

    console.log("yay");
 }
getPlayerChoice();
console.log("made it")

    /* prompt choicewindow to user - convert chocie to lowercase - if user did not choose rock paper or scissors
    prompt again until user chooses rock paper or scissors - return value */



/* Create function to determine computerselection 
The computer needs to select a random item from a list of three choices */

function getComputerChoise() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}




/* Evaluate both selections and check for win 
If not win --> draw*/
