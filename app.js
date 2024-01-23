let randomNumber = Math.random();
let computerMove = '';

function pickComputerMove(){ 
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove='Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove='Paper';
    } else {
        computerMove='Scissors';
    }
}
 
let result = '';
if (computerMove === 'Rock') {
    result = 'Its a tie';
} else if (computerMove === 'Paper') {
    result = 'You lose';
} else {
    result = 'You win'
}



alert(`You chose Rock. Computer chose ${computerMove}.${result}`);

document.getElementById("year").innerText = new Date().getFullYear();