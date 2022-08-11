const startButton = document.querySelector('button.startGame');
const initializeGame = document.querySelector('button.initializeGame')

initializeGame.addEventListener('click', startGame);
startButton.addEventListener('click', toggle);

function toggle() {
    const enterPlayers = document.querySelector('div.enterPlayers')
    enterPlayers.classList.toggle('show');
}


function gameBoard() {
let board = [a, b, c, d, e, f, g, h, i]}

function players(name) {
    this.name = name;
}

function displayController() {

}

function startGame() {
    toggle();
    let playerOne = document.getElementsByName('playerOne').value;
    let playerTwo = document.getElementsByName('playerTwo').value;
    const spaces = document.querySelectorAll('div.space');
    console.log(spaces);
    for (let i = 0; i < spaces.length; i++) {
          let  space = spaces[i];
        space.addEventListener('click', addPeice)};
    return {playerOne, playerTwo};
}

function addPeice(playerOne, playerTwo) {
    console.log(this);
    let round = [playerOne, playerTwo]
    let currentRound = round[0]
    if(currentRound) {
        this.textContent = 'X';
        switchPlayer(round);
    }

    else{
        space.textContent = 'O';
        switchPlayer(round);
    }
}

function switchPlayer() {
    
    
    if (currentRound === round[0]) {
        currentRound = round[1];
        alert('works')
    }
    else {
        currentRound = round[0];
        alert('also works')
    }

};