const canvas = document.querySelector("canvas");

const c = canvas?.getContext("2d");

canvas!.width = 1024;
canvas!.height = 576;

c!.fillStyle = "white";
c?.fillRect(0, 0, canvas!.width, canvas!.height);

const backgroundImage = new Image();
backgroundImage.src = "./assets/zoomedmap.png";

const playerImage = new Image();
playerImage.src = "./assets/playerDown.png";

backgroundImage.onload = () => {
  c?.drawImage(backgroundImage, -1900, -975);
  c?.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas!.width / 2 + playerImage.width / 16,
    canvas!.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
};
