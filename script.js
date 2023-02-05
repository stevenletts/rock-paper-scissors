function getComputerChoice() {
    const selection = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * selection.length);
    console.log(selection[random]);
    return selection[random];
}

let scoreVar = 0;

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (scoreVar === 5){
        return `You win!`;
    } else if (scoreVar === -5){
        return `Computer Wins`;
    } 

    if (player === computer){
        return "Draw";
    } else if (player === "rock"){
        if (computer === "scissors"){
            scoreVar += 1;
            return `Player wins, ${player} beats ${computer}. The score is ${scoreVar}`;
        } else {
            scoreVar -= 1;
            return `Computer wins ${computer} beats ${player}. The score is ${scoreVar}`;
        }
    } else if (player === "paper"){
        if (computer === "rock"){
            scoreVar += 1;
            return `Player wins, ${player} beats ${computer}. The score is ${scoreVar}`;
        } else {
            scoreVar -= 1;
            return `Computer wins ${computer} beats ${player}. The score is ${scoreVar}`;
        }
    } else if (player === "scissors"){
        if (computer === "rock"){
            scoreVar += 1;
            return `Player wins, ${player} beats ${computer}. The score is ${scoreVar}`;
        } else {
            scoreVar -= 1;
            return `Computer wins ${computer} beats ${player}. The score is ${scoreVar}`;
        }
    } else {
        console.log("logic error");
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = (playRound(button.id, getComputerChoice()));
        document.getElementById("score").innerHTML = result
        
    })
})

