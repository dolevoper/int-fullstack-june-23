const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctxt = canvas.getContext("2d") as CanvasRenderingContext2D;

const userImg = new Image();
userImg.src = "./assets/user.png";
const imgWidth = 150;
const imgHeight = 142;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const sheetFrame = 6;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.3;

class User {
    width = 100;
    height = 100;
    position = { x: 100, y: 100 };
    velocity = { x: 0, y: 0 };
    jumpCount = 0;
    direction = 'right'; 
    draw() {
        if (this.direction === 'right') {
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
        } else if (this.direction === 'left') {
            ctxt.save(); 
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

    update() {
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
            this.direction = 'right';
        } else if (this.velocity.x < 0) {
            this.direction = 'left';
        }
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
}

const user = new User();
const field = new Platform(0, canvas.height - 20, canvas.width, 20);
let floatPlatform = new Platform(500, 500, 150, 20);


const keys = {
    right: false,
    left: false,
};

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function animate() {
    requestAnimationFrame(animate);
    let position = Math.floor(gameFrame / sheetFrame) % sheetFrame;
    frameX = imgWidth * position;
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    field.draw("green");
    floatPlatform.draw("black");
    user.update();

    if (keys.right && user.position.x < 500) {
        user.velocity.x = 3;
        gameFrame++;
    } else if (keys.left && user.position.x > 100) {
        user.velocity.x = -3;
        gameFrame--;
    } else {
        if (keys.right) {
            floatPlatform.position.x -= 2;
            gameFrame++
        }
        if (keys.left) {
            floatPlatform.position.x += 2;
            gameFrame--;
        }
        user.velocity.x = 0;
        frameX = 0;
    }

    if (floatPlatform.position.x + floatPlatform.width < 0) {
         floatPlatform = new Platform(canvas.width,  Math.random() * (canvas.height - 50),  150, 20);

    }
}

animate();

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
    }
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
