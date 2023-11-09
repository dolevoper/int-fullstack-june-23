const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctxt = canvas.getContext("2d") as CanvasRenderingContext2D;

const userImg = new Image();
userImg.src = "./assets/user.png";

const monsterImg = new Image();
monsterImg.src = "./assets/monster.png";

const bulletUser = new Image();
bulletUser.src = "./assets/bullet.png";

const imgWidth = 150;
const imgHeight = 142;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const sheetFrame = 6;
let previousTime = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.3;

class User {
  width = 100;
  height = 100;
  position = { x: 100, y: 100 };
  velocity = { x: 0, y: 0 };
  jumpCount = 0;
  direction = "right";
  draw() {
    if (this.direction === "right") {
      ctxt.drawImage(
        userImg,
        frameX,
        frameY,
        imgWidth,
        imgHeight,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else if (this.direction === "left") {
      ctxt.save();
      ctxt.scale(-1, 1);
      ctxt.drawImage(
        userImg,
        frameX,
        frameY,
        imgWidth,
        imgHeight,
        -this.position.x - this.width,
        this.position.y,
        this.width,
        this.height
      );
      ctxt.restore();
    }
  }

  update(deltaTime: number) {
    this.draw();

    // Check collision with the field platform
    if (
      this.position.x < field.position.x + field.width &&
      this.position.x + this.width > field.position.x &&
      this.position.y + this.height > field.position.y + 150
    ) {
      this.velocity.y = 0;
      this.position.y = field.position.y - this.height;
    }
    // Check collision with the float platform
    else if (
      this.position.x < floatPlatform.position.x + floatPlatform.width &&
      this.position.x + this.width > floatPlatform.position.x &&
      this.position.y + this.height >= floatPlatform.position.y &&
      this.position.y < floatPlatform.position.y
    ) {
      this.velocity.y = 0;
      this.position.y = floatPlatform.position.y - this.height;
    } else {
      this.velocity.y += gravity;

      if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0;
        this.position.y = canvas.height - this.height;
        this.jumpCount = 0;
      }
    }

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.velocity.x > 0) {
      this.direction = "right";
    } else if (this.velocity.x < 0) {
      this.direction = "left";
    }

    // Movement check

    if (keys.right && user.position.x < 500) {
      user.velocity.x = 3;
      gameFrame++;
      userScore += 3;
    } else if (keys.left && user.position.x > 100) {
      user.velocity.x = -3;
      gameFrame--;
      userScore -= 3;
    } else {
      if (keys.right) {
        floatPlatform.position.x -= 2;
        gameFrame++;
      }
      if (keys.left) {
        floatPlatform.position.x += 2;
        gameFrame--;
      }
      user.velocity.x = 0;
      frameX = 0;
    }
  }

  shoot() {
    const velocity = this.direction === "right" ? 5 : -5;
    const bullet = new Bullet(
      this.position.x,
      this.position.y - 35,
      velocity,
      0
    );

    bulletList.push(bullet);
  }
}

class Platform {
  position: {
    x: number;
    y: number;
  };

  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;
  }

  draw(color: string) {
    ctxt.fillStyle = color;
    ctxt.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    if (floatPlatform.position.x + floatPlatform.width < 0) {
      floatPlatform = new Platform(
        canvas.width,
        Math.random() * (canvas.height - 50),
        150,
        20
      );
    }
  }
}

class Boss {
  position: { x: number; y: number };
  width: number;
  height: number;
  health: number;
  isAlive: boolean;

  constructor(positionX: number, positionY: number) {
    this.position = {
      x: positionX,
      y: positionY,
    };

    this.width = 100;
    this.height = 100;
    this.health = 100; // Initialize boss health
    this.isAlive = true;
  }

  draw() {
    ctxt.fillStyle = "black";
    ctxt.fillRect(this.position.x, this.position.y, this.width, this.height);

    
    ctxt.fillStyle = "red";
    ctxt.fillRect(this.position.x, this.position.y - 10, this.width, 5);
    ctxt.fillStyle = "green";
    const healthWidth = (this.health / 100) * this.width;
    ctxt.fillRect(this.position.x, this.position.y - 10, healthWidth, 5);
  }

  takeDamage(damage: number) {
    if (this.isAlive) {
      this.health -= damage;

      if (this.health <= 0) {
        this.isAlive = false;
        this.health = 0;
        console.log("Boss is defeated!");
      }
    }
  }
}

class Bullet {
  width: number;
  height: number;
  velocity: { x: any; y: any };
  position: { x: any; y: any };

  constructor(
    positionX: number,
    positionY: number,
    velocityX: number,
    velocityY: number
  ) {
    this.position = {
      x: positionX,
      y: positionY,
    };

    this.velocity = {
      x: velocityX,
      y: velocityY,
    };

    this.width = 25;
    this.height = 25;
  }

  draw() {
    ctxt.fillStyle = "orange";
    ctxt.fillRect(this.position.x, this.position.y, this.width, this.height);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  update() {
    bulletList.forEach((bullet) => {
      bullet.draw();
      if (
        bullet.position.x < boss.position.x + boss.width &&
        bullet.position.x + bullet.width > boss.position.x &&
        bullet.position.y < boss.position.y + boss.height &&
        bullet.position.y + bullet.height > boss.position.y
      ) {
        boss.takeDamage(10);
        bulletList.splice(bulletList.indexOf(bullet), 1);
      }
    });
  }
}

const user = new User();
const field = new Platform(0, canvas.height - 20, canvas.width, 20);
let floatPlatform = new Platform(500, 500, 150, 20);
const bulletList: Bullet[] = [];
let boss = new Boss(800, 850);
const bullet = new Bullet(0, 0, 0, 0);
let userScore = 0;

const keys = {
  right: false,
  left: false,
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function animate(gameTime: number) {
  if (previousTime === 0) {
    previousTime = gameTime;
  }
  const deltaTime = (gameTime - previousTime) / 1000;
  previousTime = gameTime;

  requestAnimationFrame(animate);
  let position = Math.floor(gameFrame / sheetFrame) % sheetFrame;
  frameX = imgWidth * position;
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
  field.draw("green");
  floatPlatform.draw("black");
  bullet.update();
  if (boss.isAlive) {
    boss.draw();
  }
  floatPlatform.update();
  user.update(deltaTime);

  if (userScore === 900 && boss.isAlive) {
    boss = new Boss(800, 850);
  }

  if (userScore === 1000 && !boss.isAlive) {
    alert("You won!");
    return;
  }
}

requestAnimationFrame(animate);
console.log("userScore: " + userScore);

window.addEventListener("keydown", ({ code }) => {
  switch (code) {
    case "ArrowUp":
    case "Space":
      if (user.jumpCount < 2) {
        user.velocity.y = -15;
        user.jumpCount++;
      }
      break;

    case "ArrowLeft":
    case "KeyA":
      keys.left = true;
      keys.right = false;
      break;

    case "ArrowRight":
    case "KeyD":
      keys.right = true;
      keys.left = false;
      break;

    case "ControlRight":
    case "ControlLeft":
      user.shoot();
      break;
  }

  console.log(user.shoot);
});

window.addEventListener("keyup", ({ code }) => {
  switch (code) {
    case "ArrowUp":
    case "Space":
      break;

    case "ArrowLeft":
    case "KeyA":
      keys.left = false;
      break;

    case "ArrowRight":
    case "KeyD":
      keys.right = false;
      break;
  }
});
