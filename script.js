startButton = document.querySelector('button.startGame')
startButton.addEventListener('click', enterPlayers);

function enterPlayers() {
    popUp.classlist.toggle('show');
}

function gameBoard() {
let board = [a, b, c, d, e, f, g, h, i]}

function players(name) {
    this.name = name;
}

function displayController() {

}

function startGame() {
    const spaces = document.getElementsByClassName('space');
    for (let space in spaces) {
        space.addEventListener('click', addPeice)};

}

function addPeice() {
    if(player1) {
        space.textContent = 'X';
    }

    else{
        space.textContent = 'O';
    }
}