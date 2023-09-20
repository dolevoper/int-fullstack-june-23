console.clear();

const elementsToToggleDarkMode = document.querySelectorAll(
  ".main, .card, .brand, .button, input, select"
);
const darkModeButton = document.querySelector(
  "#dark-mode-button"
) as HTMLButtonElement;
darkModeButton.addEventListener("click", darkModeToggle);

function darkModeToggle() {
  darkModeButton.innerText =
    darkModeButton.innerText === "DARK MODE" ? "light mode" : "dark mode";
  elementsToToggleDarkMode.forEach((element) => {
    element.classList.toggle("--dark-mode");
  });
}
