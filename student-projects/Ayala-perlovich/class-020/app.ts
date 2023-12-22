

console.log("connected");


function randomPosition() {
  const position = {
    top: `${Math.random() * (window.innerHeight - 100)}px`,
    left: `${Math.random() * (window.innerWidth - 100)}px`,
  };
  return position;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "soaring-balloon";
  const img = document.createElement("img");
  img.src = "./balloon. img.png";
  img.draggable = false;
  balloon.appendChild(img);

  const position = randomPosition();
  balloon.style.top = position.top;
  balloon.style.left = position.left;

  document.querySelector(".balloon-container").appendChild(balloon);

 
  balloon.addEventListener("click", function() {
    balloon.remove();
    
    
    const balloonsLeft = document.querySelectorAll(".soaring-balloon").length;
    if (balloonsLeft === 0) {
      alert("Start again");
      createBalloons(); 
    }
  });
}


function createBalloons() {
  for (let i = 0; i < 15; i++) {
    createBalloon();
  }
}

createBalloons();
