const popSound = document.getElementById("popSound") as HTMLAudioElement;
const strikeSound = document.getElementById("strikeSound") as HTMLAudioElement;
let gameLoop = setInterval(createBalloon, randomInterval(500, 2000));
let score = 0;
let lives = 3;

window.addEventListener("load", () => {
  updateHearts();
});

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
      position -= 2 + (score / 100);
      balloon.onclick = () => {
        popSound.play();
        balloon.remove();
        clearInterval(interval)
        score += 10;
        document.getElementById("score")!.textContent = `Score: ${score}`;
      };
      balloon.style.top = position + "px";
      if (position <= -100) {
        strikeSound.play();
        clearInterval(interval);
        balloon.remove();
        if (lives > 0) {
          lives--;
          if (lives === 0) {
            //clearInterval(gameLoop);
            alert(`Game over\nYour score is ${score}`);
            location.reload();
          }
          updateHearts();
        }
      }
    }, 16);

    clearInterval(gameLoop);
    gameLoop = setInterval(createBalloon, randomInterval(500, 2000));
  };

  moveBalloonUp();

  
}

function updateHearts() {
  const heartsContainer = document.getElementById("hearts");
  heartsContainer!.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-solid", "fa-heart", "fa-beat", "fa-xl");
    heartIcon.style.color = "#ff0000";
    heartsContainer!.appendChild(heartIcon);
  }
}