import { log } from "./helpers.js";

enum GameState {
	INTIALIZE,
	WAITINGSTART,
	RUNNING,
	PAUSED,
	EXITING,
}

export class Game {
	static TAG = "Game";

	private state!: GameState;
	private gameLoop!: number;
	private loopTimeInMiliseconds: number;

	constructor() {
		this.loopTimeInMiliseconds = 500;

		this.initialize();
	}

	private initialize() {
		this.setGameState(GameState.INTIALIZE);
		log(Game.TAG, "initializing...");

		this.setGameState(GameState.WAITINGSTART);
		log(Game.TAG, "done initialize.");
	}

	private run() {
		log(Game.TAG, "Game is running...");
	}

	public start() {
		log(Game.TAG, "starting.");
		this.startGameLoop();
	}

	public resume() {
		log(Game.TAG, "resumed.");
		this.startGameLoop();
	}

	public pause() {
		this.setGameState(GameState.PAUSED);
		log(Game.TAG, "paused.");
		this.stopGameLoop();
	}

	public exit() {
		this.setGameState(GameState.EXITING);
		log(Game.TAG, "exiting");
		this.stopGameLoop();
	}

	private setGameState(state: GameState) {
		this.state = state;
	}

	private getState(): GameState {
		return this.state;
	}

	private startGameLoop() {
		if (!this.canStartGameLoop()) {
			log(
				Game.TAG,
				"Unable to start game loop, not in WAITINGSTART or PAUSED."
			);
			return;
		}

		this.setGameState(GameState.RUNNING);
		this.gameLoop = setInterval(this.run, this.loopTimeInMiliseconds);
	}

	private canStartGameLoop(): boolean {
		return (
			this.getState() === GameState.PAUSED ||
			this.getState() === GameState.WAITINGSTART
		);
	}
	private stopGameLoop() {
		this.setGameState(GameState.PAUSED);
		clearInterval(this.gameLoop);
	}
}
