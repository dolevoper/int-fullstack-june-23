const popSound = document.getElementById("popSound") as HTMLAudioElement;
let gameLoop = setInterval(createBalloon, randomInterval(500, 2000));
let score = 0;

window.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    clearInterval(gameLoop);
  }
});

function randomInterval(min, max) {
  return Math.random() * (max - min) + min;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "soaring-balloon";
  balloon.style.userSelect = "none";
  const img = document.createElement("img");
  img.src = "assets/balloon.png";
  img.alt = "Balloon";
  img.draggable = false;
  balloon.appendChild(img);
  balloon.style.top = window.innerHeight + "px";
  balloon.style.left = Math.random() * (window.innerWidth - 150) + "px";
  document.body.appendChild(balloon);

  const moveBalloonUp = () => {
    let position = window.innerHeight;
    const interval = setInterval(() => {
      position -= 2+ (score / 100);
      balloon.style.top = position + "px";
      if (position <= -100) {
        clearInterval(interval);
        balloon.remove();
      }
    }, 16);

    clearInterval(gameLoop);
    gameLoop = setInterval(createBalloon, randomInterval(500, 2000));
  };

  moveBalloonUp();
  
    balloon.onclick = () => {
      popSound.play();
      balloon.remove();
      score += 10;
      document.getElementById("score")!.textContent = `Score: ${score}`;
  };
}
