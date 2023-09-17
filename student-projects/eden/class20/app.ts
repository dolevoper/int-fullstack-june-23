let gameLoop = setInterval(createBalloon, randomInterval(500, 2000));

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
  img.src = "https://img.freepik.com/premium-vector/vector-festive-blue-balloon-isolated_653575-283.jpg?w=826";
  img.alt = "Balloon";
  img.draggable = false;
  balloon.appendChild(img);
  balloon.style.top = window.innerHeight + "px";
  balloon.style.left = Math.random() * (window.innerWidth - 150) + "px";
  document.body.appendChild(balloon);
   




  const moveBalloonUp = () => {
    let position = window.innerHeight;
    const interval = setInterval(() => {
      position -= 4;
      balloon.style.top = position + "px";
      if (position <= -100) {
        clearInterval(interval);
        balloon.remove();
      }
    }, 16);

    clearInterval(gameLoop);
    gameLoop = setInterval(createBalloon, randomInterval(500, 1000));
  };

  moveBalloonUp();

  balloon.onclick = () => {
    balloon.remove();
  };
}

