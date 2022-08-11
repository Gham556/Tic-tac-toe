const startButton = document.querySelector('button.startGame');
const initializeGame = document.querySelector('button.initializeGame')

initializeGame.addEventListener('click', startGame);
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
}

function players(name) {
    this.name = name;
}

function displayController() {

}

function startGame() {
    toggle();
    const spaces = document.querySelectorAll('div.space');
    console.log(spaces);
    let allSpacesArray = [];
    for (let i = 0; i < spaces.length; i++) {
          space = spaces[i];
          allSpacesArray.push(space);
        space.addEventListener('click', function (e){
            console.log(this);
            console.log(e);
            let round = [0,1];
            let currentRound = round[round.length - 1];
            if (!this.textContent) {
                    if (currentRound) {
                        this.textContent = 'X';
                        round.push(0);
                    }
        
                    else {
                        this.textContent = 'O';
                        round.push(1);
                    }
                };
            })};
        
       
    const allSpaces = new gameBoard(allSpacesArray[0],allSpacesArray[1],allSpacesArray[2], allSpacesArray[3], allSpacesArray[4], allSpacesArray[5], allSpacesArray[6], allSpacesArray[7], allSpacesArray[8])
    console.log (allSpaces)
    return allSpaces
    
}



