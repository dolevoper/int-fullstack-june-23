import { GameManager } from "./GameManager.js";

function zoo() {
	const exitKey = null;
	let userInput = "";

	const gameManager = new GameManager();

	while (userInput !== exitKey) {
		userInput = prompt(
			`Current day: ${gameManager.getCurrentDay()} How much days to skip?`
		) as string;
		console.log(userInput);

		gameManager.skipDays(Number(userInput));
	}
	console.log("Exiting Zoo Tycoon");
}

zoo();
