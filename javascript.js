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

console.log(getHumanChoice());