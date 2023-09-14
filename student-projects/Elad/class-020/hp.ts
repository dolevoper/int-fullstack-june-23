const balloons = document.querySelectorAll(".balloon");
let baloonCount = balloons.length;

balloons.forEach((balloon) => {
  balloon.addEventListener("click", balloonRemove);
});

function balloonRemove() {
  this.style.display = "none";
  baloonCount--;
  if (baloonCount === 0) {
    const mainTitle = document.querySelector(".mainTitle");
    mainTitle.textContent = "All balloons popped!";
    mainTitle.classList.add("mainTitleAfterPop");

    /* const refresh = setTimeout(backToGame,3000) */
  }
};

/* function backToGame () {
    const mainTitle = document.querySelector(".mainTitle");
} */
