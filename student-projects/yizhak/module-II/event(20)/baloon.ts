const balloons = document.getElementsByClassName("balloon");

function popBalloon(event) {
   const balloonx = event.target;
    balloonx.remove();
}
for (const balloon of balloons) {
    balloon.addEventListener("click", popBalloon);
}


