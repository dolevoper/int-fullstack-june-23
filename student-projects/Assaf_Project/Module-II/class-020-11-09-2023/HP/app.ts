console.log("connected");

function hitDisc() {
  console.log("Disc Hit!");
}
function addDisc() {
  const disc = document.createElement("div" + ".disc");
  disc.addEventListener("click", hitDisc);
}
