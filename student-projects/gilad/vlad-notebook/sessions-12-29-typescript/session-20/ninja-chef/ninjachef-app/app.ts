import { Game } from "./GameManager.js";

function setOnScreenStateListener(game: Game) {
	window.addEventListener("load", () => {
		game.start();
	});
}

function setOnTabChangeListener(game: Game) {
	document.addEventListener("visibilitychange", (event) => {
		if (document.visibilityState === "visible") {
			game.resume();
		} else {
			game.pause();
		}
	});
}

function main() {
	const game = new Game();

	setOnScreenStateListener(game);
	setOnTabChangeListener(game);
}

main();
