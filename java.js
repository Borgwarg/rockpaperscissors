/* Create function to determine playerselection */
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?");
    console.log(playerChoice)
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "sccissors") {
        playerChoice = prompt("Rock, Paper, Scissors?");
        console.log(playerChoice);
        
    }
}
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
