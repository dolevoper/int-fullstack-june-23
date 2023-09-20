console.clear();

const main = document.querySelector(".main");
const card = document.querySelector(".card");
const brand = document.querySelector(".brand");
const buttons = document.querySelectorAll(".button");
const inputs = document.querySelectorAll("input")
const selects = document.querySelectorAll("select")
const darkModeButton = document.querySelector(
  "#dark-mode-button"
) as HTMLButtonElement;
darkModeButton.addEventListener("click", darkModeToggle);

function darkModeToggle() {
  if (darkModeButton) {
    main?.classList.toggle("--dark-mode");
    card?.classList.toggle("--dark-mode");
    brand?.classList.toggle("--dark-mode");
    buttons.forEach((element) => {
      element.classList.toggle("--dark-mode");
    })
    inputs.forEach((element) => {
      element.classList.toggle("--dark-mode");
    })
    selects.forEach((element) => {
      element.classList.toggle("--dark-mode");
    })
  }
}
