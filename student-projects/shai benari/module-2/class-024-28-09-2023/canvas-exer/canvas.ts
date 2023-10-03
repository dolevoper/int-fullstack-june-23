const canvas = document.querySelector("#exer-canvas");
const sqwer = canvas.getContext("2d");
const grd = sqwer.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "green");
sqwer.fillStyle = grd;
sqwer.fillRect(50, 50, 150, 75);

sqwer.moveTo(50,50);
sqwer.lineTo(200,125);
sqwer.lineWidth = 3;
sqwer.lineCap = "round";
sqwer.stroke();

sqwer.beginPath();
sqwer.arc(250, 100, 30, 0, 2 * Math.PI);
sqwer.lineWidth = 5;
sqwer.strokeStyle = "blue";
sqwer.stroke();

sqwer.beginPath();
sqwer.moveTo(0,0);
sqwer.lineTo(100,0);
sqwer.lineTo(50,50);
sqwer.lineTo(0,0);
sqwer.lineWidth = 5;
sqwer.strokeStyle = "green";
sqwer.lineCap = "round";
sqwer.stroke();

const canvas2 = document.querySelector("#frame");
const frame = canvas2.getContext("2d");
const sqwer2 =canvas2.getContext("2d");
frame.beginPath();
frame.rect(150, 50 , 75, 100);
frame.lineWidth = 4;
frame.strokeStyle = "green";
frame.stroke();

frame.beginPath();
frame.rect(20, 20 , 180, 100);
frame.lineWidth = 4;
frame.strokeStyle = "red";
frame.stroke();

sqwer2.beginPath();
sqwer2.fillStyle = "yellow";
sqwer2.fillRect(40, 40 , 40, 40);
sqwer2.rect(40, 40 , 40, 40);
sqwer2.lineWidth = 4;
sqwer2.strokeStyle = "red";
sqwer2.stroke();

const textCanvas = document.querySelector(".text");
const text = textCanvas.getContext("2d");
// const img = Document.querySelector(".ballon");

text.fillStyle = "rgb(100, 20, 200)";
text.font = "30px Arial";
text.fillText("Hello World", 80 , 80 );
// text.drawImage(img, 10, 10);




