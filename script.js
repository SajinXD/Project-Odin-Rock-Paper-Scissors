function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    
    switch (randomInt){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissor");
    let userInputLowerCase = userInput.toLowerCase();
    switch (userInputLowerCase){
        case ("rock"):
            return "rock";
            break;
        case ("paper"):
            return "paper";
            break;
        case ("scissor"):
            return "scissor";
            break;
    }
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("It's tie!");
        }else if(humanChoice === "rock" && computerChoice === "scissor" ||
            humanChoice ==="paper" && computerChoice === "rock" ||
            humanChoice === "scissor" && computerChoice === "paper"
        ){
            humanScore ++;
            console.log("you win " + humanChoice + " beats " + computerChoice);
            console.log("your score: " + humanScore);
            console.log("computer score: " + computerScore);
        }else{
            computerScore ++;
            console.log("you lose " + computerChoice + " beats " + humanChoice);
            console.log("your score: " + humanScore);
            console.log("computer score: " + computerScore);
        }
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 

    playRound(humanSelection, computerSelection);
}

playGame();