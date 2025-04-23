let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    
    switch (randomInt){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissor";
            break;
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissor");
    switch (userInput){
        case ("Rock"):
            return "Rock";
            break;
        case ("Paper"):
            return "Paper";
            break;
        case ("Scissor"):
            return "Scissor";
            break;
    }
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    
}