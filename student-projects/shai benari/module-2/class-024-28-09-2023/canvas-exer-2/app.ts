const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
if (c == null || c == undefined){
    console.log("c cannot be null or undefined")
}
else {
let x = Math.random() *innerWidth;
let y = Math.random() * innerHeight;
let dx = 3;
let dy = 3;
const radios = 10;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, 20, 0, 2 * Math.PI);
    c.lineWidth = 3;
    c.strokeStyle = "blue";
    c.fillStyle = "red";
    c.fill();
    c.stroke();

    if (x > innerWidth - radios || x < 0 + radios)
        dx = -dx;
     // dy -= 1;
        x += dx;
        // dy  += 1;
    x += dx;
    if (y > innerHeight - radios || y < 0 + radios)
    dy = -dy;
    y += dy;
x += dx;
}};

animate();



















// for (let i=0; i<5; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//  c.beginPath();
//  c.arc(x, y, 20, 0, 2 * Math.PI);
//  c.lineWidth = 3;
//  c.strokeStyle = "blue";
//  c.stroke();
// }};