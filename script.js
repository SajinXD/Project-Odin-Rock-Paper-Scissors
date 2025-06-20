let humanScore = 0;
let computerScore = 0;

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

function updateScore(){
    const scoreBoard = document.querySelector('.score');
    scoreBoard.textContent = `Your Score: ${humanScore} | Computer Score : ${computerScore}`;
}

function displayResult(message) {
    const resultBoard = document.querySelector('.result');
    resultBoard.textContent = message;
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    updateScore();
    displayResult("Click to start the game!");
    document.querySelector('#winner').textContent ="";
    document.querySelector('.winner').className= "";
    hideResetBtn();
    enableGameBtn();    
}

function showResetBtn(){
    document.querySelector('#reset').style.display = 'inline-block';
}

function hideResetBtn(){
    document.querySelector('#reset').style.display = 'none';
}

function checkWinner(){
    if (humanScore === 5){
        const winnerBox = document.querySelector('#winner');
        winnerBox.textContent = "You Won! the game congrats";
        winnerBox.className = 'winner';
        showResetBtn();
        disableGameBtn();
        return true;
    }else if(computerScore === 5){
        const winnerBox = document.querySelector('#winner');
        winnerBox.textContent = "You Lost! Better luck next time!";
        winnerBox.className = 'loser';
        showResetBtn();
        disableGameBtn();
        return true;
    }
    return false
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        displayResult (`It's tie! Both: ${humanChoice}`);
    }else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice ==="paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){
        humanScore ++;
        displayResult(`you win ${humanChoice} beats ${computerChoice}`);
        updateScore();
    }else{
        computerScore ++;
        displayResult(`you lose ${computerChoice} beats ${humanChoice}`);
        updateScore();
    }

    checkWinner();
}

document.querySelector('#btn').addEventListener('click',(e)=>{
    let target =e.target;
    const computerSelection = getComputerChoice();

    switch (target.id) {
        case 'rock':
            playRound('rock', computerSelection);
            break;
        case 'paper':
            playRound('paper', computerSelection);
            break;
        case 'scissors':
            playRound('scissors', computerSelection);
            break;
        default:
            break;
    }
})

document.querySelector('#reset').addEventListener('click', reset);

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

function disableGameBtn(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableGameBtn(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}