console.log("connected");

let score = 0;
updateScore();

function updateScore() {
  const scoreSpan = document.querySelector(".score");
  if (scoreSpan) {
    scoreSpan.textContent = `Score: ${score}`;
  }
}

function hitDisc() {
  console.log("Disc Hit!");
}

const gameLoop = setInterval(addDisc, 1000);
function addDisc() {
  const disc = document.createElement("div");
  disc.className = "disc";
  disc.addEventListener("click", hitDisc);
  const randomTop = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
  disc.style.top = `${randomTop}px`;
  document.body.appendChild(disc);

  disc.onclick = () => {
    disc.remove();
    score += 10;
    updateScore();
  };

  const missedDisc = setInterval(() => {
    const discLeft = parseFloat(getComputedStyle(disc).left);
    const discWidth = parseFloat(getComputedStyle(disc).width);
    const screenWidth = window.innerWidth;
    if (discLeft + discWidth * 0.2 > screenWidth) {
      disc.remove();
      clearInterval(missedDisc);
    }
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        clearInterval(gameLoop);
        disc.remove();
      }
    });
  });
}
