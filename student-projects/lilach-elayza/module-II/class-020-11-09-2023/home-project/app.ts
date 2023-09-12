playGame();

function playGame() {
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();
  createBalloon();

  document.querySelectorAll(".static-balloon").forEach((balloon) => {
    balloon.addEventListener("click", (event) => {
      balloon.remove();
      if (document.querySelectorAll(".static-balloon").length === 0) {
        location.reload();
        alert("You popped all the balloons!");
        playGame();
      }
    });

    balloon.addEventListener("mouseover", (event) => {
      (event.target as HTMLElement).style.cursor = "pointer";
    });

    balloon.addEventListener("mouseout", (event) => {
      (event.target as HTMLElement).style.cursor = "default";
    });
  });
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "static-balloon";
  const img = document.createElement("img");
  img.src = "assets/balloon.png";
  img.alt = "Balloon";
  balloon.appendChild(img);
  balloon.style.top = Math.random() * 600 + "px";
  balloon.style.left = Math.random() * 600 + "px";
  document.body.appendChild(balloon);
}
