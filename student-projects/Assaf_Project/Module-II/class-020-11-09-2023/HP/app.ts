console.log("connected");

function hitDisc() {
  console.log("Disc Hit!");
}

const gameLoop = setInterval(addDisc, 4000);
function addDisc() {
  const disc = document.createElement("div");
  disc.className = "disc";
  disc.addEventListener("click", hitDisc);
  const randomTop = Math.floor(Math.random() * (400 - 90 + 1)) + 90;
  disc.style.top = `${randomTop}px`;
  document.body.appendChild(disc);

  disc.onclick = () => {
    disc.remove();
  };

  const discLeft = parseFloat(getComputedStyle(disc).left);
  const discWidth = parseFloat(getComputedStyle(disc).width);
  const screenWidth = window.innerWidth;
  if (discLeft + discWidth >= screenWidth) {
    disc.remove();
  }
  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      clearInterval(gameLoop);
      disc.remove();
    }
  });
}
