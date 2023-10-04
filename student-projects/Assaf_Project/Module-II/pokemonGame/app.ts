const canvas = document.querySelector("canvas");
const c = canvas?.getContext("2d");

canvas!.width = 1024;
canvas!.height = 576;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70));
}

const boundaries: Boundary[] = [];
const offset = {
  x: -1900,
  y: -975,
};

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const image = new Image();
image.src = "./assets/zoomedmap.png";

const foregroundImage = new Image();
foregroundImage.src = "./assets/pokemon-map-foreground.png";

const playerImage = new Image();
playerImage.src = "./assets/playerDown.png";



const player = new Sprite({
  position: {
    x: canvas!.width / 2 + 192 / 16,
    y: canvas!.height / 2 - 68 / 2,
  },
  image: playerImage,
  frames: {
    max: 4,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const movables = [background, ...boundaries, foreground];

function rectengularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x + 5 &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width - 5 &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y -5 &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height / 3
  );
}
function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
    if (
      rectengularCollision({
        rectangle1: player,
        rectangle2: boundary,
      })
    ) {
      console.log("collide");
    }
  });
  player.draw();
  foreground.draw()

  let moving = true;
  if (keys.w.pressed && lastKey === "w") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectengularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 1,
            },
          },
        })
      ) {
        console.log("collide");
        moving = false;
        break;
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.y += 1;
    });
  } else if (keys.a.pressed && lastKey === "a") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectengularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 1,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log("collide");
        moving = false;
        break;
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.x += 1;
    });
  } else if (keys.s.pressed && lastKey === "s") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectengularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 1,
            },
          },
        })
      ) {
        console.log("collide");
        moving = false;
        break;
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.y -= 1;
    });
  } else if (keys.d.pressed && lastKey === "d") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectengularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 1,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log("collide");
        moving = false;
        break;
      }
    }
    if (moving)
    movables.forEach((movable) => {
      movable.position.x -= 1;
    });
  }
}
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
    case "ArrowLeft":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
    case "ArrowDown":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
    case "ArrowRight":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      keys.w.pressed = false;
      break;
    case "a":
    case "ArrowLeft":
      keys.a.pressed = false;
      break;
    case "s":
    case "ArrowDown":
      keys.s.pressed = false;
      break;
    case "d":
    case "ArrowRight":
      keys.d.pressed = false;
      break;
  }
});
