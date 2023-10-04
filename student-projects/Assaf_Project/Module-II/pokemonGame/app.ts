const canvas = document.querySelector("canvas");

const c = canvas?.getContext("2d");

canvas!.width = 1024;
canvas!.height = 576;

c!.fillStyle = "white";
c?.fillRect(0, 0, canvas!.width, canvas!.height);

const backgroundImage = new Image();
backgroundImage.src = "./assets/pokemon-map.png";

backgroundImage.onload = () => {
  c?.drawImage(backgroundImage, 0, 0);
};
