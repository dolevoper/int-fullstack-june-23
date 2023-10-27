type Gender = "Male" | "Female";
type Race = "Human" | "Elf" | "Dwarf" | "Orc";
type Class = "Fighter" | "Barbarian" | "Wizard" | "Cleric";
type AttributePoints = {
  availablePoints: number;
  strengh: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};
type Character = {
  name: string;
  gender: Gender;
  race: Race;
  class: Class;
  attributePoints: AttributePoints;
  image: string;
};
type CharacterArray = Character[];
let characters: CharacterArray;

const retrieveCharactersString = localStorage.getItem("characters");
if (retrieveCharactersString == null) {
    characters = [];
} else {
    characters = JSON.parse(retrieveCharactersString);
}

let totalPoints = 55;
let strenghPoints = 7;
let dexterityPoints = 7;
let intelligencePoints = 7;
let wisdomPoints = 7;
let charismaPoints = 7;
let availablePoints =
  totalPoints -
  strenghPoints -
  dexterityPoints -
  intelligencePoints -
  wisdomPoints -
  charismaPoints;

showAttributePoints();

addStrength.addEventListener("click", () => {
  if (strenghPoints < 20 && availablePoints > 0) {
    strenghPoints++;
    showAttributePoints();
  }
});

removeStrength.addEventListener("click", () => {
  if (strenghPoints > 5) {
    strenghPoints--;
    showAttributePoints();
  }
});
addDexterity.addEventListener("click", () => {
  if (dexterityPoints < 20 && availablePoints > 0) {
    dexterityPoints++;
    showAttributePoints();
  }
});

removeDexterity.addEventListener("click", () => {
  if (dexterityPoints > 5) {
    dexterityPoints--;
    showAttributePoints();
  }
});
addIntelligence.addEventListener("click", () => {
  if (intelligencePoints < 20 && availablePoints > 0) {
    intelligencePoints++;
    showAttributePoints();
  }
});

removeIntelligence.addEventListener("click", () => {
  if (intelligencePoints > 5) {
    intelligencePoints--;
    showAttributePoints();
  }
});
addWisdom.addEventListener("click", () => {
  if (wisdomPoints < 20 && availablePoints > 0) {
    wisdomPoints++;
    showAttributePoints();
  }
});

removeWisdom.addEventListener("click", () => {
  if (wisdomPoints > 5) {
    wisdomPoints--;
    showAttributePoints();
  }
});
addCharisma.addEventListener("click", () => {
  if (charismaPoints < 20 && availablePoints > 0) {
    charismaPoints++;
    showAttributePoints();
  }
});

removeCharisma.addEventListener("click", () => {
  if (charismaPoints > 5) {
    charismaPoints--;
    showAttributePoints();
  }
});

const characterImage = document.getElementById(
  "characterImage"
) as HTMLImageElement;
let currentCharacterIndex = 1;

chevronLeft.addEventListener("click", () => {
  if (currentCharacterIndex > 1) {
    currentCharacterIndex--;
    characterImage.src = `assets/character${currentCharacterIndex}.png`;
  }
});

chevronRight.addEventListener("click", () => {
  const totalCharacters = 7;

  if (currentCharacterIndex < totalCharacters) {
    currentCharacterIndex++;
    characterImage.src = `assets/character${currentCharacterIndex}.png`;
  }
});

const detailsForm = document.forms.namedItem("character_details");

detailsForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);

  characters.push({
    name: parseName(getString(formData, "name")),
    gender: parseGender(getString(formData, "gender")),
    race: parseRace(getString(formData, "race")),
    class: parseClass(getString(formData, "class")),
    attributePoints: {
      availablePoints: availablePoints,
      strengh: strenghPoints,
      dexterity: dexterityPoints,
      intelligence: intelligencePoints,
      wisdom: wisdomPoints,
      charisma: charismaPoints,
    },
    image: "assets/character" + currentCharacterIndex + ".png",
  });

  const charactersString = JSON.stringify(characters);
  localStorage.setItem("characters", charactersString);
});

const charactersButton = document.querySelector("#charactersButton");
charactersButton?.addEventListener("click", () => {
  const characterList = document.querySelector(".characterSelection__innerWindow__characterList") as HTMLUListElement;
  while (characterList.firstChild) {
    characterList.removeChild(characterList.firstChild);
  }
  characters.forEach(function(character) {
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    characterList?.appendChild(listItem);
  });
  const characterSelection = document.querySelector(".characterSelection") as HTMLDivElement;
  characterSelection.style.visibility = (characterSelection.style.visibility === "visible") ? "hidden" : "visible";
});

function showAttributePoints() {
  availablePoints =
    totalPoints -
    strenghPoints -
    dexterityPoints -
    intelligencePoints -
    wisdomPoints -
    charismaPoints;
  attributePoints.textContent = availablePoints;
  strength.textContent = strenghPoints;
  dexterity.textContent = dexterityPoints;
  intelligence.textContent = intelligencePoints;
  wisdom.textContent = wisdomPoints;
  charisma.textContent = charismaPoints;
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
    throw new Error(`Value for ${key} is required!`);
  }

  return value;
}

function parseName(input: string) {
  const pattern = /^[a-zA-Z\-'\s]+$/;
  if (!pattern.test(input)) {
    throw new Error(`Name must be words only`);
  } else {
    return capitalizeString(input).trim();
  }
}

function capitalizeString(input: string): string {
  return input
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
}

function parseGender(value: string): Gender {
  if (value !== "Male" && value !== "Female") {
    throw new Error(`Invalid gender: ${value}`);
  }

  return value;
}

function parseRace(value: string): Race {
  if (
    value !== "Human" &&
    value !== "Elf" &&
    value !== "Dwarf" &&
    value !== "Orc"
  ) {
    throw new Error(`Invalid race: ${value}`);
  }

  return value;
}

function parseClass(value: string): Class {
  if (
    value !== "Fighter" &&
    value !== "Barbarian" &&
    value !== "Wizard" &&
    value !== "Cleric"
  ) {
    throw new Error(`Invalid class: ${value}`);
  }

  return value;
}
