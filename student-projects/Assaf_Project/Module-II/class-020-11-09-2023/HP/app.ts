console.log("connected");

let score = 0;

const myCursor = document.querySelector(".my-cursor") as HTMLElement;

document.addEventListener("mousemove", (ev) => {
  let leftPosition = ev.pageX + 0.6;
  let topPosition = ev.pageY + 0.6;

  myCursor.style.left = leftPosition + "px";
  myCursor.style.top = topPosition + "px";
});

const livesContainer = document.querySelector(".lives");
let remainingLives = 5;

const heartsArray: HTMLLIElement[] = [];

for (let i = 0; i < remainingLives; i++) {
  const livesHeart = document.createElement("li");
  livesHeart.className = "lives__hearts";
  const heartImg = document.createElement("img");
  heartImg.src = "assets/heart.png";
  heartImg.alt = "life heart";
  livesHeart.appendChild(heartImg);
  livesContainer?.appendChild(livesHeart);
  heartsArray.push(livesHeart);
}

updateScore();

function updateScore() {
  const scoreSpan = document.querySelector(".score");
  if (scoreSpan) {
    scoreSpan.textContent = `Score: ${score}`;
  }
}

const hitAudio = document.getElementById("hit-audio") as HTMLAudioElement;
const errorAudio = document.getElementById("error-audio") as HTMLAudioElement;
const loseAudio = document.getElementById("lose-audio") as HTMLAudioElement;
const throwAudio = document.getElementById("throw-audio") as HTMLAudioElement;
const shotAudio = document.getElementById("shot-audio") as HTMLAudioElement;

window.addEventListener("click", shoot);
function shoot() {
  shotAudio.play();
}

const gameLoop = setInterval(addDisc, 3000);
function addDisc() {
  const disc = document.createElement("div");
  disc.className = "disc";
  throwAudio.play();
  disc.addEventListener("click", hitDisc);
  const randomTop = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
  disc.style.top = `${randomTop}px`;
  document.body.appendChild(disc);

  function hitDisc() {
    console.log("Disc Hit!");
    disc.remove();
    hitAudio.play();
    score += 10;
    updateScore();
  }

  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      clearInterval(gameLoop);
      disc.remove();
    }
  });

  const missedDisc = setInterval(() => {
    const discLeft = parseFloat(getComputedStyle(disc).left);
    const discWidth = parseFloat(getComputedStyle(disc).width);
    const screenWidth = window.innerWidth;
    if (discLeft + discWidth * 0.2 > screenWidth) {
      disc.remove();
      clearInterval(missedDisc);
      errorAudio.play();
      if (remainingLives > 0) {
        remainingLives--;
        heartsArray.pop();
        livesContainer?.removeChild(livesContainer.lastChild as HTMLElement);
      }
      if (heartsArray.length === 0) {
        clearInterval(gameLoop);
        disc.remove();
        loseAudio.play();
        alert(`Your score is ${score}`);
      }
    }
  });
}
