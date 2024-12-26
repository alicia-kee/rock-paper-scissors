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
            if(humanChoice==="rock"){
                console.log("Tie! You and the computer both chose Rock.")
            }else if(humanChoice==="paper"){
                console.log("You win! Paper beats Rock.");
                humanScore++;
            }else if(humanChoice==="scissors"){
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            }
    
        }else if(compChoice==="paper"){
            if(humanChoice==="rock"){
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            }else if(humanChoice==="paper"){
                console.log("Tie! You and the computer both chose Paper.");
            }else if(humanChoice==="scissors"){
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            }
    
        }else if(compChoice==="scissors"){
            if(humanChoice==="rock"){
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            }else if(humanChoice==="paper"){
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            }else if(humanChoice==="scissors"){
                console.log("Tie! You and the computer both chose Scissors.")
            }
        }
    } //end playRound function

    function displayScore(){
        console.log("Current scores:\nPlayer: "+humanScore+"\nComputer: "+computerScore);
    }

    function displayWinner(){
        if(humanScore>computerScore){
            console.log("You won! Congratulations!"); 
        }else if(humanScore<computerScore){
            console.log("You loss! Try again!");
        }else{
            console.log("It's a tie!");
        }
    }

    //play 5 rounds of rock paper scissors
    console.log("Welcome to 5 rounds of rock paper scissors!");
    for(let i=0; i<5; i++){ 
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(computerSelection, humanSelection);
        displayScore();
    }
    displayWinner();

} //end playGame function

playGame();

