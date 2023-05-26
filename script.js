const items = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScreen= document.querySelector("#showPlayerChoice");
const computerScreen = document.querySelector("#showComputerChoice");
const submit = document.querySelector("#submit");
const body = document.querySelector("body")
const imgs = document.querySelectorAll("img")
let resultScreen= document.querySelector("#resultWindow");
let computerSelection;
let playerSelection;

let pScore= document.querySelector("#playerScore");
let cScore= document.querySelector("#computerScore");

/*
rock.innerHTML = items[0];
paper.innerHTML = items[1];
scissors.innerHTML = items[2];
*/

submit.disabled = true;

imgs.forEach(img => addEventListener("transitionend", removeTransition));

rock.addEventListener("click", () => {
    playerScreen.innerHTML = `You picked ${items[0]} !!`;
    submit.disabled= false;
    rock.classList.add("picked")
    return playerSelection = items[0];});

paper.addEventListener("click", () => {
    playerScreen.innerHTML = `You picked ${items[1]} !!`
    submit.disabled= false;
    paper.classList.add("picked")
    return playerSelection = items[1];});


scissors.addEventListener("click", () => {
    playerScreen.innerHTML = `You picked ${items[2]} !!`
    submit.disabled= false;
    scissors.classList.add("picked")
    return playerSelection = items[2];});

submit.addEventListener("click", ()=> {
    getComputerChoice();
    playRound(computerSelection, playerSelection);
    return;});


function removeTransition (img){
    console.log(img)
}



function getComputerChoice (){
        return computerSelection = items[Math.floor (Math.random()* items.length)];}

function playRound(computer, player) {
    //computerSelection = getComputerChoice();
    computerScreen.innerHTML = `Computer picked ${computer}`;
    console.log(`${player} player`)
    console.log(`${computer} computer`)

    if (computer == "Scissors" && player =="Rock") {
        resultScreen.innerHTML = "You won";
        appendScore(0, 1);
    } else if (computer == "Scissors" && player =="Scissors"){
        resultScreen.innerHTML = "Try again";
    } else if (computer == "Scissors" && player =="Paper"){
        resultScreen.innerHTML = "You lost";
        appendScore(1, 0);
    } else if (computer == "Rock" && player =="Rock") {
        resultScreen.innerHTML = "Try again";
    }else if (computer == "Rock" && player =="Scissors") {
        resultScreen.innerHTML = "You lost";
        appendScore(1, 0);
    }else if (computer == "Rock" && player =="Paper") {
        resultScreen.innerHTML = "You won";
        appendScore(0, 1);
    } else if (computer == "Paper" && player =="Paper") {
        resultScreen.innerHTML = "Try again";
    } else if (computer == "Paper" && player =="Scissors") {
        resultScreen.innerHTML = "You won";
        appendScore(0, 1);
    } else if (computer == "Paper" && player =="Rock") {
        resultScreen.innerHTML = "You lost";
        appendScore(1, 0);
    } 
}

let totalComputerScore = 0
let totalPlayerScore  = 0

function appendScore (computerScore, playerScore){
    console.log(`${computerScore} append`);
    console.log(`${playerScore} append`);

    totalComputerScore += computerScore;
    totalPlayerScore += playerScore;

    cScore.innerHTML = `${totalComputerScore}`
    pScore.innerHTML = `${totalPlayerScore}`

    if (totalPlayerScore == 5){
        resultScreen.style.color = "red"
        resultScreen.innerHTML = "Good Job You won 5 times!!";
        body.style.backgroundImage = "url('https://media.giphy.com/media/ZkMVgxu28zm01v16Rd/giphy.gif')";
        body.style.backgroundSize="cover";
        totalPlayerScore  = 0
        totalComputerScore = 0
        cScore.innerHTML = `0`
        pScore.innerHTML = `0`
        submit.addEventListener("click", ()=> {
            location.reload();
            return;});
    } else if (totalComputerScore == 5) {
        resultScreen.style.color = "red"
        resultScreen.innerHTML = "Restart...";
        body.style.backgroundImage = "url('https://media.giphy.com/media/jWcypagX0tNtiup1pg/giphy.gif')";
        body.style.backgroundSize="cover";
        totalPlayerScore  = 0
        totalComputerScore = 0
        cScore.innerHTML = `0`
        pScore.innerHTML = `0`
        submit.addEventListener("click", ()=> {
            location.reload();
            return;});
    } 

}


