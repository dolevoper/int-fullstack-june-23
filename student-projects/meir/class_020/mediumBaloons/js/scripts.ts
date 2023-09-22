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
*/


initBalloon();
createLife();

let score = 0;
let myTimeout: number;
var balloonSudio = new Audio("images/balloonExplod.mp3");

function initBalloon() {

    const tirgoolObj = document.querySelector("#tirgool") as HTMLDivElement;
    const balloonsObj = document.querySelector("#balloons") as HTMLDivElement;
    const theScore = document.querySelector("#myScore") as HTMLDivElement;

    const myBallons = document.createElement("img")
    myBallons.src = "images/balloon.png";
    myBallons.className = "meir";

    let xPos = Math.floor(Math.random() * (tirgoolObj.offsetWidth - myBallons.width)) + 1;
    let yPos = Math.floor(Math.random() * (tirgoolObj.offsetHeight - myBallons.height)) + 1;

    myBallons.style.left = xPos + "px";
    myBallons.style.bottom = 0 + "px";

    balloonsObj.appendChild(myBallons);

    myBallons.onclick = function () {
        balloonSudio.play();
        myBallons.style.display = "none";
        score = score + 5;
        theScore.innerHTML = score.toString();
    }

    document.addEventListener('keydown', stopGame);

    checkIfBalloonLeaveFrame();

    myTimeout = setTimeout(function () { initBalloon() }, 1200);

}

function stopGame(e: KeyboardEvent) {

    if (e.code === "Escape") {
        clearTimeout(myTimeout);
        alert("Game Over");
    }

}

function createLife() {

    const myLife = document.querySelector("#life") as HTMLDivElement;

    for (let i = 0; i < 5; i++) {
        myLife.innerHTML += "<img src='images/heart.png' id='lifeId_" + i + "'>";
    }
}


let counterHearts = 4;
function checkIfBalloonLeaveFrame() {


    //const counterHearts = 4;
    //const balloonEndObj = document.querySelector(".meir") as HTMLDivElement;
    //let sss = document.querySelector("#lifeId_" + counterHearts);

    //document.querySelector("#lifeId_" + counterHearts).style.display = "none";
    //counterHearts = counterHearts - 1;

    /*
        balloonEndObj.addEventListener('animationend', () => {
            alert(11);
            document.querySelector("#lifeId_" + counterHearts).style.display = "none";
    
            
            console.log("11111 " + counterHearts);
    
            document.querySelector("#lifeId_" + counterHearts).style.display = "none";
    
            counterHearts = counterHearts - 1;
            console.log("222222 " + counterHearts);
           
    
            if (counterHearts < 0) {
                console.log("game Over");
                //stopGame();
            }
            
        });
    
    */
}