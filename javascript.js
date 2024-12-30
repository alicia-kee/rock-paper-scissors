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
                resultContainer.textContent = "Tie! You both chose Rock.";
            }else if(humanChoice==="paper"){
                playerChoiceImg.src = "./images/paper.jpg";
                resultContainer.textContent = "You win! Paper beats Rock.";
                humanScore++;
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
    
        }else if(compChoice==="paper"){
            compChoiceImg.src = "./images/paper.jpg";

            if(humanChoice==="rock"){
                playerChoiceImg.src = "./images/rock.jpg";
                resultContainer.textContent = "You lose! Paper beats Rock.";
                computerScore++;
            }else if(humanChoice==="paper"){
                playerChoiceImg.src = "./images/paper.jpg";
                resultContainer.textContent = "Tie! You both chose Paper.";
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "You win! Scissors beats Paper.";
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
                resultContainer.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            }else if(humanChoice==="scissors"){
                playerChoiceImg.src = "./images/scissors.jpg";
                resultContainer.textContent = "Tie! You both chose Scissors.";
            }
        }

        displayScore(scoreContainer);
        checkWinner(winnerContainer);
        
    } //end playRound function

    function displayScore(container){
        container.textContent = "Current scores:\nPlayer: "+humanScore+"\nComputer: "+computerScore;
    }

    // function displayWinner(){
    //     if(humanScore>computerScore){
    //         console.log("You won! Congratulations!"); 
    //     }else if(humanScore<computerScore){
    //         console.log("You loss! Try again!");
    //     }else{
    //         console.log("It's a tie!");
    //     }
    // }

    function checkWinner(container){
        if(humanScore===5 && humanScore>computerScore){
            container.textContent = "You won the game! Congratulations!";
            humanScore=0;
            computerScore=0;
        }else if(computerScore===5 && humanScore<computerScore){
            container.textContent = "You loss the game! Try again!";
            humanScore=0;
            computerScore=0;
        }else{
            container.textContent = "";
        }
    }

    //play 5 rounds of rock paper scissors
    // console.log("Welcome to 5 rounds of rock paper scissors!");
    // for(let i=0; i<5; i++){ 
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();

    //     playRound(computerSelection, humanSelection);
    //     displayScore();
    // }
    // displayWinner();

    // rockBtn.addEventListener('click', () => {playRound (computerSelection, "rock", resultContainer, scoreContainer, winnerContainer);});
    // paperBtn.addEventListener('click', () => {playRound (computerSelection, "paper", resultContainer, scoreContainer, winnerContainer);});
    // scissorsBtn.addEventListener('click', () => {playRound (computerSelection, "scissors", resultContainer, scoreContainer, winnerContainer);});

    rockBtn.addEventListener('click', () => {playRound (getComputerChoice(), "rock");});
    paperBtn.addEventListener('click', () => {playRound (getComputerChoice(), "paper");});
    scissorsBtn.addEventListener('click', () => {playRound (getComputerChoice(), "scissors");});
} //end playGame function

//NEW FOR UI:
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
// let computerSelection = getComputerChoice();

const resultContainer = document.querySelector("#result");
const scoreContainer = document.querySelector("#scores");
const winnerContainer = document.querySelector("#winner");

const playerChoice = document.querySelector(".player-choice");
const compChoice= document.querySelector(".comp-choice");
const playerChoiceImg = document.createElement("img");
playerChoice.appendChild(playerChoiceImg);
playerChoiceImg.width = "160";
playerChoiceImg.height="160";
const compChoiceImg = document.createElement("img");
compChoice.appendChild(compChoiceImg);
compChoiceImg.width = "160";
compChoiceImg.height = "160";

playGame();

