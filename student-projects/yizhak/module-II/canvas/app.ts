const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight


ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.fill();
ctx.closePath();


