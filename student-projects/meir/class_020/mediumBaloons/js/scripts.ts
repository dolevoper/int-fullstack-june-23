/*
# medium
1. create the balloons with js code.
2. make the balloons float from the bottom of the screen to the top. thet will disappear than.
3. if you click on one of these ballons , its removed from the DOM. AND, a counter will be updated.
important! make sure your game can be ended by pressing the ESCAPE key.

# hard
to the game above add lifes. if a balloon leaves the screen and disapears, a life will be lost. the game will end after five lifes.
also, add a second balloon that will be worth more points.
when any balloon will be clicked, a pop sound will be played.

- add scoring to your balloon game
 - let user choose name at the begining of the game
 - if the name exists, show the user is last / high score.
 - extra: save both highest score and last score
*/

/***************************************************************************/

const gameContainer = document.querySelector("#tirgool") as HTMLDivElement;
const balloonsCont = document.querySelector("#balloonsCont") as HTMLDivElement;
const theScore = document.querySelector("#myScore") as HTMLDivElement;
const myLife = document.querySelector("#life") as HTMLDivElement;

var balloonAudio = new Audio("images/balloonExplod.mp3");

const balloons = [];
let score = 0;
let lifeHearts = 4;
let flagStopGame = true;

createBalloonLoop();
gameLoop();
createLife();

function createBalloon() {

    console.log(flagStopGame);
    if (flagStopGame === false) {
        return;
    }

    const balloon = document.createElement('img');
    balloon.src = "images/balloon.png";
    balloon.className = 'balloon';
    balloonsCont?.appendChild(balloon);

    const left = Math.random() * window.innerWidth;
    balloon.style.left = left + 'px';
    balloon.style.bottom = '0';

    document.addEventListener('keydown', stopGame);

    const speed = (Math.random() * 1) + 1;

    balloon.onclick = function () {
        balloonAudio.play();
        balloon.remove();
        score = score + 5;
        theScore.innerHTML = score.toString();
    }

    function update() {

        if (lifeHearts < 0) {
            return;
        }

        const currentBottom = parseFloat(balloon.style.bottom || '0');
        balloon.style.bottom = (currentBottom + speed) + 'px';

        if (currentBottom > window.innerHeight) {
            reset();
        }
    }

    function reset() {
        document.getElementById("lifeId_" + lifeHearts).style.display = "none";
        lifeHearts = lifeHearts - 1;

        if(lifeHearts<0){
            stopGameAuto();
        }

        const left = Math.random() * window.innerWidth;
        balloon.style.left = left + 'px';
        balloon.style.bottom = '0';
    }

    return { update };
}

function createBalloonLoop() {

    const balloon = createBalloon();
    balloons.push(balloon);
    setTimeout(createBalloonLoop, 2000);
}

function gameLoop() {
    for (const balloon of balloons) {
        balloon.update();
    }
    requestAnimationFrame(gameLoop);
}

function createLife() {
    for (let i = 0; i < 5; i++) {
        myLife.innerHTML += "<img src='images/heart.png' id='lifeId_" + i + "'>";
    }
}

function stopGame(e: KeyboardEvent) {

    if (e.code === "Escape") {
        alert("Game Over");
        flagStopGame = false;
    }

}

function stopGameAuto(){
    alert("Life Over, Game Over");
    balloonsCont.innerHTML="";
    flagStopGame = false;
}
/**************************************************************************/
