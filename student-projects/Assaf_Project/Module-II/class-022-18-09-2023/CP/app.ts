console.clear();

function getCountData(key: string): number {
  const storedData = localStorage.getItem(key);
  return storedData ? Number(storedData) : 0;
}
const body = document.querySelector("body");

let count = getCountData("count");
let mode = getCountData("lightOrDark");

function applyDarkMode() {
  if (body) {
    if (mode === 1) {
      body?.classList.add("--dark-mode");
      (lightOrDark as HTMLButtonElement).innerText = "To Light Mode";
      body.style.background = "black";
      body.style.color = "white";
    } else {
      body?.classList.remove("--dark-mode");
      (lightOrDark as HTMLButtonElement).innerText = "To Dark Mode";
      body.style.background = "white";
      body.style.color = "black";
    }
  }
}

applyDarkMode();

window.addEventListener("click", addToCount);

function addToCount() {
  count++;
  console.clear();
  console.log("You have clicked " + count + " times");
  saveCountCounter();
}

function saveCountCounter() {
  localStorage.setItem("count", JSON.stringify(count));
}

const lightOrDark = document.querySelector(
  ".light-or-dark"
) as HTMLButtonElement;

lightOrDark.addEventListener("click", modeToggle);

function modeToggle() {
  if (body) {
    body.classList.toggle("--dark-mode");
    mode = body.classList.contains("--dark-mode") ? 1 : 0;
    saveLightOrDarkMode();
    applyDarkMode();
  }
}

function saveLightOrDarkMode() {
  localStorage.setItem("lightOrDark", JSON.stringify(mode));
}
