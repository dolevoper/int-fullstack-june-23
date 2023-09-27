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
};
type CharacterArray = Character[];
const characters: CharacterArray = [];

let totalPoints = 45;
let strenghPoints = 5;
let dexterityPoints = 5;
let intelligencePoints = 5;
let wisdomPoints = 5;
let charismaPoints = 5;
let availablePoints =
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
      availablePoints: 20,
      strengh: 5,
      dexterity: 5,
      intelligence: 5,
      wisdom: 5,
      charisma: 5,
    },
  });
  console.log(characters[0]);
});

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
