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

    function playRound(compChoice, humanChoice, resultContainer, scoreContainer, winnerContainer){
        if(compChoice==="rock"){
            if(humanChoice==="rock"){
                resultContainer.textContent = "Tie! You and the computer both chose Rock.";
            }else if(humanChoice==="paper"){
                resultContainer.textContent = "You win! Paper beats Rock.";
                humanScore++;
            }else if(humanChoice==="scissors"){
                resultContainer.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
    
        }else if(compChoice==="paper"){
            if(humanChoice==="rock"){
                resultContainer.textContent = "You lose! Paper beats Rock.";
                computerScore++;
            }else if(humanChoice==="paper"){
                resultContainer.textContent = "Tie! You and the computer both chose Paper.";
            }else if(humanChoice==="scissors"){
                resultContainer.textContent = "You win! Scissors beats Paper.";
                humanScore++;
            }
    
        }else if(compChoice==="scissors"){
            if(humanChoice==="rock"){
                resultContainer.textContent = "You win! Rock beats Scissors.";
                humanScore++;
            }else if(humanChoice==="paper"){
                resultContainer.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            }else if(humanChoice==="scissors"){
                resultContainer.textContent = "Tie! You and the computer both chose Scissors.";
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

    //NEW FOR UI:
    let rockBtn = document.querySelector('#rock');
    let paperBtn = document.querySelector('#paper');
    let scissorsBtn = document.querySelector('#scissors');
    //don't need getHumanChoice() anymore?
    let computerSelection = getComputerChoice();
    const resultContainer = document.querySelector("#result");
    const scoreContainer = document.querySelector("#scores");
    const winnerContainer = document.querySelector("#winner");

    rockBtn.addEventListener('click', () => {playRound (computerSelection, "rock", resultContainer, scoreContainer, winnerContainer);});
    paperBtn.addEventListener('click', () => {playRound (computerSelection, "paper", resultContainer, scoreContainer, winnerContainer);});
    scissorsBtn.addEventListener('click', () => {playRound (computerSelection, "scissors", resultContainer, scoreContainer, winnerContainer);});

} //end playGame function

playGame();

