const items = ["Rock", "Paper", "Scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScreen= document.getElementById("showPlayerChoice");
const computerScreen = document.getElementById("showComputerChoice");
const submit = document.getElementById("submit");
let resultScreen= document.getElementById("resultWindow");
const content = document.querySelector(".content");
let computerSelection;
let playerSelection;

let pScore= document.getElementById("playerScore");
let cScore= document.getElementById("computerScore");


rock.innerHTML = items[0];
paper.innerHTML = items[1];
scissors.innerHTML = items[2];

submit.disabled = true;

rock.addEventListener("click", () => {
    playerScreen.innerHTML = "You picked Rock !!";
    submit.disabled= false;
    return playerSelection = items[0];
});

paper.addEventListener("click", () => {
    playerScreen.innerHTML = "You picked Paper !!"
    submit.disabled= false;
    return playerSelection = items[1];
});


scissors.addEventListener("click", () => {
    playerScreen.innerHTML = "You picked Scissors!!"
    submit.disabled= false;
    return playerSelection = items[2];
});

submit.addEventListener("click", ()=> {
    playRound();
    return;
});


function getComputerChoice (){
    return computerSelection = items[Math.floor (Math.random()* items.length)];
}


function playRound() {
    computerSelection = getComputerChoice();
    computerScreen.innerHTML = "Computer picked "+ computerSelection;

    if (computerSelection == items[1] && playerSelection == items[0]){
        resultScreen.innerHTML = "Take the L";
        cScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice.."
        submit.innerHTML = "Play!!";
        resultScreen.innerHTML ="";

    } else if (computerSelection == items[0] && playerSelection == items[0]) {
        resultScreen.innerHTML = "Play again";

    } else if (computerSelection == items[2]&& playerSelection == items[0]){
        resultScreen.innerHTML = "Good Job Champ";
        pScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice..";
        resultScreen.innerHTML ="";
        submit.innerHTML = "Play!!";

    }

    if (computerSelection == items[1] && playerSelection == items[1]){
        resultScreen.innerHTML = "Play again";
    } else if (computerSelection == items[0] && playerSelection == items[1]) {
        resultScreen.innerHTML = "Good Job Champ";
        pScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice..";
        resultScreen.innerHTML ="";
        submit.innerHTML = "Play!!";
    } else if (computerSelection == items[2]&& playerSelection == items[1]){
        resultScreen.innerHTML = "Take the L";
        cScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice.."
        submit.innerHTML = "Play!!";
        resultScreen.innerHTML ="";
    }

    if (computerSelection == items[1] && playerSelection == items[2]){
        resultScreen.innerHTML = "Good Job Champ";
        pScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice..";
        resultScreen.innerHTML ="";
        submit.innerHTML = "Play!!";
    } else if (computerSelection == items[0] && playerSelection == items[2]) {
        resultScreen.innerHTML = "Take the L";
        cScore.innerHTML++;
        playerScreen.innerHTML = "Your choice..";
        computerScreen.innerHTML = "Computer choice.."
        submit.innerHTML = "Play!!";
        resultScreen.innerHTML ="";
    } else if (computerSelection == items[2]&& playerSelection == items[2]){
        resultScreen.innerHTML = "Play again";
    }

    submit.innerHTML = "Click here to Play Again";

/*
    submit.addEventListener("click", score);

    if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
*/

}


/*
if (pScore.innerHTML == 5) {
    submit.addEventListener("click", refresh);
}
*/



function refresh (){
    location.reload();
}


