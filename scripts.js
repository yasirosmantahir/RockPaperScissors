function getComputerChoice(){

    var ran_choice =  Math.floor(Math.random() * 3);
    var choice = ""
    if (ran_choice== 0){
        choice = "rock";
    }
    else if(ran_choice == 1){
        choice = "paper";
    }
    else{
        choice = "scissor"
    }

    return choice;
        

}

function getHumanChoice() {
    let choice;
    const validChoices = ['rock', 'paper', 'scissor'];
    while (true) {
        choice = prompt("Please enter 'rock', 'paper', or 'scissor':").toLowerCase();
        if (validChoices.includes(choice)) {
            break; // Valid choice, exit the loop
        } else {
            alert("Invalid choice! Please try again.");
        }
    }
    return choice

}
var humanScore = 0;
var computerScore = 0;

let humanscore = document.getElementById('humanscore');
let computerscore = document.getElementById('computerscore');
let reset = document.getElementById('reset');
let result = document.getElementById('result');

function playRound(humanchoice){

    const computerchoice = getComputerChoice();

    if ((humanchoice == "rock") & (computerchoice == "scissor")){
        humanScore = humanScore + 1;
    }  
    else if ((humanchoice == "scissor") & (computerchoice == "paper")){
        humanScore = humanScore + 1;
    }  
    else if ((humanchoice == "paper") & (computerchoice == "rock")){
        humanScore = humanScore + 1;
    }
    else if ((humanchoice == "rock") & (computerchoice == "rock") ||(humanchoice == "scissor") & (computerchoice == "scissor")|| (humanchoice == "paper") & (computerchoice == "paper") ){
        console.log("match found");
    }
    else{ //other wise computer is won
        computerScore = computerScore +1
    }

    humanscore.innerText = humanScore;
    computerscore.innerText = computerScore;

    if ((humanScore === 5) & (humanScore>computerScore) ){
        result.innerText = "Congratulation User You Won ";
    }
    else if ((computerScore === 5) & (humanScore<computerScore) ){
        result.innerText = "Sorry You Lost ";
    }

    console.log(humanchoice ,"|", humanScore,"|", computerchoice ,"|", computerScore);
    

}

function restart(){
    humanScore = 0;
    computerScore = 0 ;
    humanscore.innerText = humanScore;
    computerscore.innerText = computerScore;
    reset.innerText = "";

}





