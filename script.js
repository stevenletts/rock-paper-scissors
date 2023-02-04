function getComputerChoice() {
    const selection = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * selection.length);
    console.log(selection[random]);
    return selection[random];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer){
        return "Draw";
    } else if (player === "rock"){
        if (computer === "scissors"){
            return `Player wins, ${player} beats ${computer}`;
        } else {
            return `Computer wins ${computer} beats ${player}`;
        }
    } else if (player === "paper"){
        if (computer === "rock"){
            return `Player wins, ${player} beats ${computer}`;
        } else {
            return `Computer wins ${computer} beats ${player}`;
        }
    } else if (player === "scissors"){
        if (computer === "rock"){
            return `Player wins, ${player} beats ${computer}`;
        } else {
            return `Computer wins ${computer} beats ${player}`;
        }
    } else {
        console.log("logic error");
    }
}

function game(){
    // for (let i = 0; i < 5; i++){
    const choice = String(prompt("Rock, Paper or Scissors"));
    console.log(playRound(choice, getComputerChoice()));
    // }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerChoice()));
    })
})

const scoreDiv = document.getElementById("score")
