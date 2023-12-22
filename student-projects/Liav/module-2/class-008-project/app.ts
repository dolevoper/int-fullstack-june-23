

function createBalloon() {
   
    const container = document.querySelector('.balloon-container') as HTMLDivElement;

    
    const balloon = document.createElement('div') as HTMLDivElement;
    balloon.className = 'balloon';

    const string = document.createElement('div') as HTMLDivElement;
    string.className = 'string';

    balloon.appendChild(string);    
    container.appendChild(balloon);


    const animationDuration = Math.floor(Math.random() * 8000) + 4000;

    const ballonAnimation = balloon.animate(
        [
            { transform: `translateY(-1000px)` }
        ],
        {
            duration: animationDuration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
    }
//--------------------------------------------------------------------------------
const numBalloons = 10;
for (let i = 0; i < numBalloons; i++) {
    createBalloon();
}

//--------------------------------------------------------------------------------
let points = 0;

function popBalloon(event) {
    if (event.target.classList.contains('balloon')) {
        event.target.remove();
        points++;
        document.getElementById('points').textContent = `Points: ${points}`;
    }

    
}
document.querySelector('.balloon-container').addEventListener('click', popBalloon,);

//--------------------------------------------------------------------------------
let lifes = 5;

function loseLife (){
    lifes--;
    document.getElementById("lifes")?.textContent = `Life: ${lifes}`;


    if(lifes === 0){
        alert("GAME OVER!");
    }
}
//--------------------------------------------------------------------------------

function gameOver(){
    const balloon = document.getElementsByClassName("balloon");
    
    if(balloon.length === 0){
        alert("GAME OVER!")
    }
}
