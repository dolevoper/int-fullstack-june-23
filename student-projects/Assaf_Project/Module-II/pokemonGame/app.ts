const canvas = document.querySelector("canvas");

const c = canvas?.getContext("2d");

canvas!.width = 1024;
canvas!.height = 576;

c!.fillStyle = "white";
c?.fillRect(0, 0, canvas!.width, canvas!.height);

const image = new Image();
image.src = "./assets/zoomedmap.png";

const playerImage = new Image();
playerImage.src = "./assets/playerDown.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c?.drawImage(this.image, -1900, -975);
  }
}

const background = new Sprite({
  position: {
    x: -1900,
    y: -975,
  },
  image: image
});

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
}

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c?.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas!.width / 2 + playerImage.width / 16,
    canvas!.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  )

  if ()
}
animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      console.log("pressed up");
      break;
  }
});
