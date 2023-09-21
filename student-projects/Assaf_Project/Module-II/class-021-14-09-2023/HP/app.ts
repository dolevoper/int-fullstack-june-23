console.clear();

let lightOrDarkMode =
  JSON.parse(localStorage.getItem("lightOrDarkMode")!) || "light";

const elementsToToggleDarkMode = document.querySelectorAll(
  ".main, .card, .brand, .button, input, select"
);

const addPokemonForm = document.querySelector(
  "#add-new-pokemon"
) as HTMLFormElement;

const idsToSaveInputs = [
  "pokemon-name",
  "pokemon-index",
  "pokemon-hp",
  "attack-1-element",
  "pokemon-attack-1",
  "attack-2-element",
  "pokemon-attack-2",
  "attack-3-element",
  "pokemon-attack-3",
  "pokemon-weakness-1",
  "pokemon-weakness-2",
  "pokemon-resistance-1",
  "pokemon-resistance-2",
];

const darkModeButton = document.querySelector(
  "#dark-mode-button"
) as HTMLButtonElement;

function loadSavedInputs() {
  idsToSaveInputs.forEach((id) => {
    const inputElement = document.querySelector(`#${id}`) as HTMLInputElement;
    const savedValue = localStorage.getItem(id);
    if (inputElement && savedValue && savedValue !== "reset") {
      inputElement.value = savedValue;
    }
  });
}

darkModeButton.addEventListener("click", () => {
  lightOrDarkMode = lightOrDarkMode === "dark" ? "light" : "dark";
  darkModeButton.innerText =
    lightOrDarkMode === "dark" ? "light mode" : "dark mode";
  elementsToToggleDarkMode.forEach((element) => {
    element.classList.toggle("--dark-mode");
  });
  localStorage.setItem("lightOrDarkMode", JSON.stringify(lightOrDarkMode));
});

loadSavedInputs();

idsToSaveInputs.forEach((id) => {
  const inputElement = document.querySelector(`#${id}`) as HTMLInputElement;
  if (inputElement) {
    inputElement.addEventListener("input", () => {
      localStorage.setItem(id, inputElement.value);
    });
  }
});

addPokemonForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addPokemonForm.reset();
  idsToSaveInputs.forEach((id) => {
    localStorage.setItem(id, "reset");
  });
});

addPokemonForm.addEventListener("reset", () => {
  idsToSaveInputs.forEach((id) => {
    localStorage.removeItem(id);
  });
});

if (lightOrDarkMode === "dark") {
  darkModeButton.innerText = "light mode";
  elementsToToggleDarkMode.forEach((element) => {
    element.classList.add("--dark-mode");
  });
}
