import { Animal } from "./Animal.js";
import { foodList } from "./AnimalDiet.js";
import {
	AnimalType,
	Gender,
	bear,
	camel,
	human,
	lizard,
	penguin,
} from "./AnimalType.js";
import { Cage } from "./Cage.js";
import { GameManager } from "./GameManager.js";

const gameManager = new GameManager();

const cage = new Cage("First");

const animalA = new Animal(1, "Yulia", Gender.Female, penguin);
const animalB = new Animal(2, "Vlad", Gender.Male, camel);
const animalC = new Animal(3, "Artsiom", Gender.Male, bear);
const animalD = new Animal(4, "Masha", Gender.Female, human);
const animalE = new Animal(5, "Dana", Gender.Female, lizard);

gameManager.addGameObject(animalA);
gameManager.addGameObject(animalB);
gameManager.addGameObject(animalC);
gameManager.addGameObject(animalD);
gameManager.addGameObject(animalE);
gameManager.addGameObject(cage);

cage.addAnimal(animalA);
cage.addAnimal(animalB);
cage.addAnimal(animalC);
cage.addAnimal(animalD);
cage.addAnimal(animalE);

function zoo() {
	let userInput = true;

	// const gameManager = new GameManager();

	while (userInput) {
		console.clear();
		console.log(gameManager);
		gameManager.skipDays(1);
		userInput = confirm(
			`Current day: ${gameManager.getCurrentDay()}\nStart a new day?`
		);
	}
	console.log("Exiting Zoo Tycoon");
}

zoo();
