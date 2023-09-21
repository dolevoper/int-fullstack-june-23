console.clear();

let lightOrDarkMode = JSON.parse(localStorage.getItem("lightOrDarkMode")!) || "light";

const elementsToToggleDarkMode = document.querySelectorAll(".main, .card, .brand, .button, input, select");
const darkModeButton = document.querySelector("#dark-mode-button") as HTMLButtonElement;

darkModeButton.addEventListener("click", () => { 
  lightOrDarkMode = lightOrDarkMode === "dark" ? "light" : "dark";
  darkModeButton.innerText = lightOrDarkMode === "dark" ? "dark mode" : "light mode";
  elementsToToggleDarkMode.forEach((element) => { element.classList.toggle("--dark-mode")});
  saveLightOrDarkToLocalStorage();
});

function saveLightOrDarkToLocalStorage() {
  localStorage.setItem("lightOrDarkMode", JSON.stringify(lightOrDarkMode));
}

if (lightOrDarkMode === "dark") {
  darkModeButton.innerText = "dark mode";
  elementsToToggleDarkMode.forEach((element) => { element.classList.add("--dark-mode") });
} else {
  saveLightOrDarkToLocalStorage();
}