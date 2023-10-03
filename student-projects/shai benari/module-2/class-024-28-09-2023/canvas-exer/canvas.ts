const canvas = document.getElementById("exer-canvas");
const sqwer = canvas.getContext("2d");
sqwer.fillStyle = "red";
sqwer.fillRect(50, 50, 150, 75);
sqwer.moveTo(50,50);
sqwer.lineTo(200,125);
sqwer.stroke();