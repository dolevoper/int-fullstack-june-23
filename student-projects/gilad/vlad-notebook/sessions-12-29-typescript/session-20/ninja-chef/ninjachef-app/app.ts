import { Game } from "./GameManager.js";
import { log } from "./helpers.js";

const game = new Game();

function main() {
	const TAG = "App";

	log(TAG, "Game instance created");
	setLoadListener(game);
	log(TAG, "Attached load listener");
	setTabListener(game);
	log(TAG, "Attached tab listener");
}

main();

function setLoadListener(game: Game) {
	window.addEventListener("load", () => {
		game.start();
	});
}

function setTabListener(game: Game) {
	document.addEventListener("visibilitychange", (event) => {
		if (document.visibilityState === "visible") {
			game.resume();
		} else {
			game.pause();
		}
	});
}
