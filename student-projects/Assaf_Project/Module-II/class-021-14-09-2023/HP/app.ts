console.clear();

let lightOrDarkMode =
  JSON.parse(localStorage.getItem("lightOrDarkMode")!) || "light";

type Pokemon = {
  name: string;
  indexNumber: string;
  healthPoints: string;
  attack1Element: any;
  attack1: string;
  attack2Element?: any;
  attack2?: string;
  attack3Element?: any;
  attack3?: string;
  weakness1?: any;
  weakness2?: any;
  resistance1?: any;
  resistance2?: any;
};

type PokemonArray = Pokemon[];

const pokemons: PokemonArray =
  JSON.parse(localStorage.getItem("pokemonsArray")!) || [];

const elementsToToggleDarkMode = document.querySelectorAll(
  ".main, .card, .brand, .button, input, select"
);

const addPokemonForm = document.querySelector(
  "form[name='card-collection']"
) as HTMLFormElement | null;
if (!addPokemonForm) {
  console.error("Couldn't find card collection form.");
} else {
  addPokemonForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const newPokemon: Pokemon = {
      name: getRequiredString(formData, "pokemonName"),
      indexNumber: getRequiredString(formData, "pokemonIndex"),
      healthPoints: getRequiredString(formData, "pokemonHp"),
      attack1Element: getRequiredString(formData, "attack1Element"),
      attack1: getRequiredString(formData, "pokemonAttack1"),
      attack2Element: getString(formData, "attack2Element"),
      attack2: getString(formData, "pokemonAttack2"),
      attack3Element: getString(formData, "attack3Element"),
      attack3: getString(formData, "pokemonAttack3"),
      weakness1: getString(formData, "pokemonWeakness1"),
      weakness2: getString(formData, "pokemonWeakness2"),
      resistance1: getString(formData, "pokemonResistance1"),
      resistance2: getString(formData, "pokemonResistance2"),
    };
    pokemons.push(newPokemon);

    localStorage.setItem("pokemonsArray", JSON.stringify(pokemons));
    console.log(pokemons);
  });
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);

  if (value == null) {
    throw new Error(`Field ${key} doesn't exist!`);
  }

  if (typeof value !== "string") {
    throw new Error(`Value of field ${key} is not a string!`);
  }

  if (!value) {
    return undefined;
  }

  return value;
}

function getRequiredString(formData: FormData, key: string) {
  const value = getString(formData, key);

  if (!value) {
    throw new Error(`Value for ${key} is required!`);
  }

  return value;
}

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

if (addPokemonForm) {
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
}

if (lightOrDarkMode === "dark") {
  darkModeButton.innerText = "light mode";
  elementsToToggleDarkMode.forEach((element) => {
    element.classList.add("--dark-mode");
  });
}

const clearListButton = document.querySelector("#clear-button");
const showListButton = document.querySelector("#show-list-button");

if (clearListButton && pokemons.length > 0) {
  clearListButton.addEventListener("click", () => {
    const userInput = prompt("Are you sure you want to clear the list?")
      ?.trim()
      .toLowerCase();

    userInput === "yes"
      ? (alert("List cleared"), (pokemons.length = 0))
      : alert("The list remains");
    localStorage.setItem("pokemonsArray", JSON.stringify(pokemons));
  });
}

if (showListButton && pokemons.length > 0) {
  showListButton.addEventListener("click", () => {
    const pokemonNames = pokemons
      .map((pokemon) => "#" + pokemon.indexNumber + " " + pokemon.name)
      .join(", ");
    alert(`Pokémon list:\n${pokemonNames}`);
  });
} else if (showListButton && pokemons.length === 0) {
  showListButton.addEventListener("click", () => {
    alert("List is empty");
  });
}
