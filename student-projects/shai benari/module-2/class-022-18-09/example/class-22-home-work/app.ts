// balloonGame();
// function balloonGame(){};
const balloonImg = document.querySelector("baloon-img");
const balloon = document.querySelector("balloon");
function addBalloon() {
    balloon.style.top = Math.random() * 700 + "px";
    balloon.style.left = Math.random() * 700 + "px";
    document.body.append(balloon);
    balloon.onclick = () => {
        balloon.remove();
        console.log("balloon");
    };
}
window.addEventListener("click", addBalloon);
const gameloop = setInterval(addBalloon, 1000);
window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
        clearInterval(gameloop);
    }
});
