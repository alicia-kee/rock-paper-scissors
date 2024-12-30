function getComputerChoice (){
    //get random number 0,1,or 2
    let randomInt = Math.floor(Math.random()*3);
    let compChoice;

    if(randomInt===0){
        compChoice = "rock";
    }else if(randomInt===1){
        compChoice = "paper";
    }else{
        compChoice = "scissors";
    }

    return compChoice;
}

function getHumanChoice(){
    let humanChoice;
    humanChoice = window.prompt("Enter your choice: rock, paper, scissors");
    return humanChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(compChoice, humanChoice){
        if(compChoice==="rock"){
            compChoiceImg.src = "./images/rock.jpg";

            if(humanChoice==="rock"){
                playerChoiceImg.src = "./images/rock.jpg";
                resultContainer.textContent = "Tie! You both chose Rock";
            }else if(humanChoice==="paper"){
                playerChoiceImg.src = "./images/paper.jpg";
                resultContainer.textContent = "You win! Paper beats Rock";
                humanScore++;
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "You lose! Rock beats Scissors";
                computerScore++;
            }
    
        }else if(compChoice==="paper"){
            compChoiceImg.src = "./images/paper.jpg";

            if(humanChoice==="rock"){
                playerChoiceImg.src = "./images/rock.jpg";
                resultContainer.textContent = "You lose! Paper beats Rock";
                computerScore++;
            }else if(humanChoice==="paper"){
                playerChoiceImg.src = "./images/paper.jpg";
                resultContainer.textContent = "Tie! You both chose Paper";
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "You win! Scissors beats Paper";
                humanScore++;
            }
    
        }else if(compChoice==="scissors"){
            compChoiceImg.src = "./images/scissors.jpg";

            if(humanChoice==="rock"){
                playerChoiceImg.src = "./images/rock.jpg";
                resultContainer.textContent = "You win! Rock beats Scissors.";
                humanScore++;
            }else if(humanChoice==="paper"){
                playerChoiceImg.src = "./images/paper.jpg";
                resultContainer.textContent = "You lose! Scissors beats Paper";
                computerScore++;
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "Tie! You both chose Scissors";
            }
        }

        displayScore();
        checkWinner();
        
    } //end playRound function

    function displayScore(){
       
        playerScore.textContent = "Player: "+humanScore;
        compScore.textContent = "Computer: "+computerScore;
    }

    function checkWinner(){
        if(humanScore===5 && humanScore>computerScore){
            winnerContainer.textContent = "You won the game! Congratulations!";
            humanScore=0;
            computerScore=0;
        }else if(computerScore===5 && humanScore<computerScore){
            winnerContainer.textContent = "You loss the game! Try again!";
            humanScore=0;
            computerScore=0;
        }else{
            winnerContainer.textContent = "";
        }
    }

    rockBtn.addEventListener('click', () => {playRound (getComputerChoice(), "rock");});
    paperBtn.addEventListener('click', () => {playRound (getComputerChoice(), "paper");});
    scissorsBtn.addEventListener('click', () => {playRound (getComputerChoice(), "scissors");});
} //end playGame function

//NEW FOR UI:
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

const resultContainer = document.querySelector("#result");
const playerScore = document.querySelector(".player-score")
const compScore = document.querySelector(".comp-score")
const winnerContainer = document.querySelector("#winner");

const playerChoice = document.querySelector(".player-choice");
const compChoice= document.querySelector(".comp-choice");
const playerChoiceImg = document.querySelector(".player-img")
const compChoiceImg = document.querySelector(".comp-img")

playGame();

