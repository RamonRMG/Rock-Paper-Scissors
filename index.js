function getComputerChoice() {
    let computerStr = ["Rock", "Paper", "Scissors"]
    let computerIdex = Math.floor(Math.random() * computerStr.length);
    return computerStr[computerIdex].toUpperCase()
}

function playerSelection(choice){
    return choice.toUpperCase()
}

function randomPlay(playerChoice){
    let computerChoice = getComputerChoice();
    if (computerChoice === playerChoice){
        console.log("WoW! You have a draw!")
    }else if (computerChoice === "ROCK" && playerChoice === "PAPER"){
        console.log("You Win! Paper beats Rock")
    }else if (computerChoice === "ROCK" && playerChoice === "SCISSORS"){
        console.log("You lose! Rock beats Scissors")
    }else if (computerChoice === "PAPER" && playerChoice === "ROCK"){
        console.log("You lose! Paper beats Rock")
    }else if (computerChoice === "PAPER" && playerChoice === "SCISSORS"){
        console.log("You Win! Scissors beats Paper")
    }else if (computerChoice === "SCISSORS" && playerChoice === "ROCK"){
        console.log("You Win! Rock beats Scissors")
    }else if (computerChoice === "SCISSORS" && playerChoice === "PAPER"){
        console.log("You lose! Scissors beats Paper")
    }
}

function game(){
    for (let i = 0; i < 5; i++){
       let userChoice = prompt("Make your guess!" ,"").toUpperCase()
       randomPlay(userChoice)
    }
   
}
console.log(game())


let myRoot = document.getElementById("p").innerHTML = randomPlay(playerSelection("paper"))

//console.log(myRoot)