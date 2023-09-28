

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctxt = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.3;
class User{
    width: number;
    height: number;
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    constructor(){
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 30
        this.height = 30
    }

    draw() {
        ctxt.fillStyle = "black"
        ctxt.fillRect(this.position.x,
             this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.position.y +this.height + this.velocity.y <= canvas.height){
        this.velocity.y += gravity;
        }else{
            this.velocity.y = 0;
        }
    }
}

class Platform {
    position: { x: number; y: number; };
    width: number;
    height: number;

    constructor(){
        this.position = {
            x: 500,
            y: 500
        }

        this.width = 200;
        this.height = 20;
    }

    draw() {
        ctxt.fillStyle = "green"
        ctxt.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const user = new User();
const platform = new Platform();

const keys = {
    right: {
        pressed: false 
    },
    left: {
        preesed: false
    }
}

let runCount = 0;

function animate(){
    requestAnimationFrame(animate)
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    user.update();
    platform.draw();
    if(keys.right.pressed){
        user.velocity.x = 3;
    }
    else if(keys.left.preesed){
        user.velocity.x = -3;
    }
    else{
        user.velocity.x = 0;
        if(keys.right.pressed){
            runCount += 5;
        }
        else if(keys.left.preesed){
            runCount -= 5;
        }
    }

    if (
        user.position.y + user.height <= platform.position.y &&
        user.position.y + user.height + user.velocity.y >= platform.position.y
    ) {
        if (
            user.position.x + user.width >= platform.position.x &&
            user.position.x <= platform.position.x + platform.width
        ){
            user.velocity.y = 0;
            user.position.y = platform.position.y - user.height;
        }
    }
    

    if(runCount > 1000){
        alert("You got to the end!")
    }

}

animate();

window.addEventListener("keydown", ({code}) => {
    console.log(code);
    switch(code){
        case "ArrowUp":
            case "Space":
            user.velocity.y -= 20;
            break;

        case "ArrowLeft":
            case "KeyA":
                keys.left.preesed = true;
            break;
        
        case "ArrowRight":
            case "KeyD":
                keys.right.pressed = true;
            break;
    }
})

window.addEventListener("keyup", ({code}) => {
    console.log(code);
    switch(code){
        case "ArrowUp":
            case "Space":
            break;

        case "ArrowLeft":
            case "KeyA":
                keys.left.preesed = false;
            break;
        
        case "ArrowRight":
            case "KeyD":
                keys.right.pressed = false;
            break;
    }
})

