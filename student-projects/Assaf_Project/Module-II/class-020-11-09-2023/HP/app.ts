console.log("connected");

let score = 0;
let remainingLives = 5;

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

const gameLoop = setInterval(addDisc, 3000);
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

  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      clearInterval(gameLoop);
      disc.remove();
    }
  })

  const missedDisc = setInterval(() => {
    const discLeft = parseFloat(getComputedStyle(disc).left);
    const discWidth = parseFloat(getComputedStyle(disc).width);
    const screenWidth = window.innerWidth;
    const heart = document.querySelector(".lives__hearts");
    // const lives = document.getElementsByClassName("lives");
    if (discLeft + discWidth * 0.2 > screenWidth) {
      disc.remove();
      clearInterval(missedDisc);
      heart?.remove();
      remainingLives--;
      if (remainingLives === 0) {
        clearInterval(gameLoop);
        alert(`Your score is ${score}`);
      }
      ;
    }
  });
}
