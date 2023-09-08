import { foodList } from "./AnimalDiet.js";
import { Gender, camel, bear } from "./AnimalType.js";
import { Animal } from "./Animal.js";
import { Cage, Biome } from "./Cage.js";

import { GameManager } from "./GameManager.js";

function zoo() {
	const exitKey = null;
	let userInput = "";

	const gameManager = new GameManager();

	while (userInput !== exitKey) {
		userInput = prompt("How much days to skip?") as string;
		console.log(userInput);

		gameManager.skipDays(Number(userInput));
	}
	console.log("Exiting Zoo Tycoon");
}

zoo();
