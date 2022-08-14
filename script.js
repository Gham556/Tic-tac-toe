const startButton = document.querySelector('button.startGame');
const initializeGameButton = document.querySelector('button.initializeGame')
const playerOneName = document.getElementById('playerOne');
const playerTwoName = document.getElementById('playerTwo');
const nameOne = document.querySelector('div.nameOne');
const nameTwo = document.querySelector('div.nameTwo');
const gameArea = document.querySelector('div.popup');
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

boardSum = a + b + c + e + g + h + i
winningboards = [[a + b + c], [d + e + f], [g + h + i], [a + d + g], [b + e + h], [c + f + i], [a + e + i], [c + e + g]] 
for (z of winningboards){    
    if (z[0] === 3) {
        alert(playerOne.name + ' wins!');
    }
    
    else if (z[0] === 0) {
        alert(playerTwo.name + ' wins!')
    }

    else if (boardSum === 4)
    alert("Tie");
    break

};
console.log(boardSum)
return winningboards;
}
function squareCoordinate (x, y) {
    this.x = x;
    this.y = y;
    

};

function players(name) {
    this.name = name;
};


function initializeGame() {
    toggle();
    playerOne = new players(playerOneName.value);
    playerTwo = new players(playerTwoName.value);
    nameOne.textContent = playerOne.name;
    nameTwo.textContent = playerTwo.name;
    console.log(playerTwo);
    let allSpacesArray = [];
    let round = [0,1];
   
    for (let i = 0; i < spaces.length; i++) {
            space = spaces[i];
            allSpacesArray.push(space);
            space.addEventListener('click', function (e){
            let currentRound = round[round.length - 1];
            if (!this.textContent) {
                    if (currentRound) {
                        this.textContent = 'X';          
                        round.push(0);
                        x = allSpacesArray.indexOf(this);
                        allSpacesArray[x] = 1;
                        console.log(allSpacesArray)
                        allSpaces = new gameBoard(allSpacesArray[0],allSpacesArray[1],allSpacesArray[2], allSpacesArray[3], allSpacesArray[4], allSpacesArray[5], allSpacesArray[6], allSpacesArray[7], allSpacesArray[8]);
                      
                    }
                    else {
                        this.textContent = 'O';
                        round.push(1);
                        x = allSpacesArray.indexOf(this);
                        allSpacesArray[x] = 0;
                        console.log(allSpacesArray)
                        allSpaces = new gameBoard(allSpacesArray[0],allSpacesArray[1],allSpacesArray[2], allSpacesArray[3], allSpacesArray[4], allSpacesArray[5], allSpacesArray[6], allSpacesArray[7], allSpacesArray[8]);
                        console.log(winningboards)
                    }
                }
            });
    }
   
};



