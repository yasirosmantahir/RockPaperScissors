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

function playRound(humanchoice, computerchoice){
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

    console.log(humanchoice ,"|", humanScore,"|", computerchoice ,"|", computerScore);
    

}


function playGame(rounds){
    var i = 0 ;
    while (i<rounds){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        i = i + 1;
    }
    if (humanScore > computerScore){
        console.log("Congrat's You Won!");
    }
    else if (humanScore == computerScore){
        console.log("Same Result.");
    }
    else{
        console.log("Sorry, YOU LOST");
    }
}

console.log("Wellcome  to Rock  Paper Scissors  !!");
console.log("User","|" , "Score","|","computer","Score");

playGame(5);
