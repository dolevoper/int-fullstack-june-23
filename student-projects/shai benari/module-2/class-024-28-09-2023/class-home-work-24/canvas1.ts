const canvas1 = document.querySelector('#canvas1') as HTMLCanvasElement | null;
const ctx = canvas1.getContext("2d");
const particleArray = [];
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
if (canvas1 == null || canvas1 == undefined){
    console.log("ctx cannot be null or undefined")
};

// window.addEventListener('resize' ,function(){
// canvas1.width = window.innerWidth;
// canvas1.height = window.innerHeight;
// ctx.fillStyle ='white'
// ctx.fillRect(10,10, 150, 50);

// ctx.fillStyle ='blue';
// ctx.fillRect(350,370, 150, 50);

// // ctx.strokeStyle = 'red';
// // ctx.lineWidth = 5;
// // ctx.fillStyle = 'orange';
// // ctx.beginPath();
// // ctx.arc( 150, 150, 50 , 0, Math.PI*2);
// // ctx.stroke();
// // ctx.fill();
// // console.log(ctx);


// ctx.strokeStyle = 'red';
// ctx.fillStyle = "green";
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.roundRect(200, 250, 150, 100, 15);
// ctx.stroke();
// ctx.fill();

// let region = new Path2D();
// region.moveTo(0,500)
// region.lineTo(200, 450);
// region.lineTo(300, 480);
// region.lineTo(500, 430);
// region.lineTo(700, 450);
// region.lineTo(900, 480);
// region.lineTo(1200, 420);
// region.lineTo(1500, 600);
// region.lineTo(0, 600);
// region.closePath();

// ctx.fillStyle = "green";
// ctx.fill(region, "evenodd");

// });

ctx.fillStyle ='white';
ctx.fillRect(10,10, 150, 50);

ctx.fillStyle ='blue';
ctx.fillRect(350,370, 150, 50);

ctx.strokeStyle = 'red';
ctx.fillStyle = "green";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.roundRect(200, 250, 150, 100, [ 20, 0, 20, 0]);
ctx.stroke();
ctx.fill();

let region = new Path2D();
region.moveTo(0,500)
region.lineTo(200, 450);
region.lineTo(300, 480);
region.lineTo(500, 430);
region.lineTo(700, 450);
region.lineTo(900, 480);
region.lineTo(1200, 420);
region.lineTo(canvas1.width, canvas1.height);
region.lineTo(0, canvas1.height);
region.closePath();

ctx.fillStyle = "green";
ctx.fill(region, "evenodd");


let mouse = {
    x: undefined,
    y: undefined,
}

canvas1.addEventListener('click' , (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
   
});

canvas1.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
   
});

// function drawCircal(){
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.arc(mouse.x, mouse.y, 30 , 0, Math.PI*2);
// ctx.stroke();
// ctx.fill();
// // console.log(ctx);
// };


class Particle{
    constructor(
        x: number,
        y: number,
        size: number,
        speedx: number,
        speedy: number,
    ){
    //   this.x =  mouse.x;
    //   this.y = mouse.y;
      this.x = Math.random()*canvas1.width;
      this.x = Math.random()*canvas1.width;
      this.size = Math.random()*5 +1 ;
      this.speedx = Math.random()*3 -1.5;
      this.speedy = Math.random()*3 -1.5;
    }
};
function handleParticles(){
    for(let i = 0 ; i < particleArray.length; i++ ){
    particleArray[i].update();
    particleArray[i].draw();
    }
}

function update(){
    this.x +=  this.speedx;
    this.y +=  this.speedy;
}


function draw(){
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size , 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
    
}

function init(){
    for(let i=0; i < 100; i++){
        particleArray.push(new Particle());

    }
}
init();



console.log(particleArray);

function animate(){
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate()

