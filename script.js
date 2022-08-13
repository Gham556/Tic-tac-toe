const startButton = document.querySelector('button.startGame');
const initializeGameButton = document.querySelector('button.initializeGame')
const playerOneName = document.getElementById('playerOne');
const playerTwoName = document.getElementById('playerTwo');
const nameOne = document.querySelector('div.nameOne');
const nameTwo = document.querySelector('div.nameTwo');
const gameArea = document.querySelector('div.popup')
const spaces = document.querySelectorAll('div.space');

initializeGameButton.addEventListener('click', initializeGame);
startButton.addEventListener('click', toggle);

function toggle() {
    const enterPlayers = document.querySelector('div.enterPlayers')
    enterPlayers.classList.toggle('show');
}

function gameBoard(a, b, c, d, e, f, g, h, i) {
this.a = a;
this.b = b;
this.c = c;
this.d = d; 
this.e = e;
this.f = f;
this.g = g;
this.h = h;
this.i = i;
    
    winningboards = [{a, b, c}, {d, e, f}, {g, h, i}, {a, d, g}, {b, e, h}, {c, f, i}, {a, e, i}, {c, e, g}]  
    return {winningboards};

}

function players(name) {
    this.name = name;
}


function initializeGame() {
    toggle();
    playerOne = new players(playerOneName.value);
    playerTwo = new players(playerTwoName.value)
    nameOne.textContent = playerOne.name;
    nameTwo.textContent = playerTwo.name;
    console.log(playerTwo)
    let allSpacesArray = [];
    let round = [0,1];
   
    for (let i = 0; i < spaces.length; i++) {
            space = spaces[i];
            allSpacesArray.push(space);
            space.addEventListener('click', function (e){
            console.log(this);
            console.log(toggle);
            let currentRound = round[round.length - 1];
            if (!this.textContent) {
                    if (currentRound) {
                        this.textContent = 'X';          
                        round.push(0);

                        }
                    }
        
                    else {
                        this.textContent = 'O';
                        round.push(1);
                    }
                };
            })};
        
       
    const allSpaces = new gameBoard(allSpacesArray[0],allSpacesArray[1],allSpacesArray[2], allSpacesArray[3], allSpacesArray[4], allSpacesArray[5], allSpacesArray[6], allSpacesArray[7], allSpacesArray[8]) 
        
        console.log(winningboards)
    
}

let runGame = function () {
    for (let i = 0; i < spaces.length; i++) {
    space = spaces[i];
    space.addEventListener('DOMCharacterDataModified', function(){
    console.log(winningboards);
    console.log('works')
})
};
}();