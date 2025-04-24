function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    
    switch (randomInt){
        case 0:
            return "rock";
        case 1:
            return "paper";          
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors");
    let userInputLowerCase = userInput.toLowerCase();
    switch (userInputLowerCase){
        case ("rock"):
            return "rock";
        case ("paper"):
            return "paper";
        case ("scissor"):
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            console.log("It's tie! Both: " + humanChoice);
        }else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice ==="paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
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
    /*
    function callFiveTimes(){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);

        const humanSelection2 = getHumanChoice();
        const computerSelection2 = getComputerChoice();
        playRound(humanSelection2, computerSelection2);

        const humanSelection3 = getHumanChoice();
        const computerSelection3 = getComputerChoice();
        playRound(humanSelection3, computerSelection3);

        const humanSelection4 = getHumanChoice();
        const computerSelection4 = getComputerChoice();
        playRound(humanSelection4, computerSelection4);

        const humanSelection5 = getHumanChoice();
        const computerSelection5 = getComputerChoice();
        playRound(humanSelection5, computerSelection5);
    }
    callFiveTimes();
    */

    /* 
    function gloop(){
        for (let i = 0; i < 5; i++){
            const humanSelect = getHumanChoice();
            const compSelect = getComputerChoice();
            playRound(humanSelect, compSelect);
        }
    }

    gloop();
    */
}

function startGame(){
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
}
startGame();