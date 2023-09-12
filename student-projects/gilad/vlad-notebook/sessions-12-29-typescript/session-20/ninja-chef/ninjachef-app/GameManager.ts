import { calculateDeltaTime, log } from "./helpers.js";

enum GameState {
	INTIALIZE,
	READY,
	LOADING,
	STARTED,
	RUNNING,
	PAUSED,
	EXITING,
}

export class Game {
	static TAG = "Game";

	private state!: GameState;

	private previousTime!: number;

	private load!: Function;
	private update!: Function;
	private render!: Function;

	constructor() {
		this.initializeGame();
	}

	private initializeGame() {
		this.setGameState(GameState.INTIALIZE);
		log(Game.TAG, "initializing");

		this.load = () => {
			log(Game.TAG, "load not implemented");
		};
		this.update = () => {
			log(Game.TAG, "update not implemented");
		};
		this.render = () => {
			log(Game.TAG, "render not implemented");
		};

		this.setGameState(GameState.READY);
		log(Game.TAG, "ready.");
	}

	public start() {
		this.setGameState(GameState.LOADING);
		log(Game.TAG, "loading.");
		this.load();

		this.setGameState(GameState.STARTED);
		this.startGameLoop();
	}

	private run(time: number): void {
		log(Game.TAG, "Game is running...");

		const deltaTime = calculateDeltaTime(time, this.previousTime);

		console.log(deltaTime);
		this.update(deltaTime);
		this.render(deltaTime);

		if (this.canRun()) this.frame(this.run);
	}

	public resume() {
		log(Game.TAG, "resumed.");
		this.startGameLoop();
	}

	public pause() {
		log(Game.TAG, "pause.");
		this.pauseGameLoop();
	}

	public exit() {
		this.setGameState(GameState.EXITING);
		log(Game.TAG, "exiting.");
		this.pauseGameLoop();
	}

	private startGameLoop() {
		if (!this.canStartLoop()) {
			log(
				Game.TAG,
				"Unable to start game loop, not in WAITINGSTART or PAUSED."
			);
			return;
		}

		this.frame((time) => {
			this.previousTime = time;
			this.setGameState(GameState.RUNNING);
			log(Game.TAG, "loop started.");
			this.frame(this.run);
		});
	}

	private frame(gameLoop: FrameRequestCallback) {
		window.requestAnimationFrame(gameLoop);
	}

	private pauseGameLoop() {
		this.setGameState(GameState.PAUSED);
		log(Game.TAG, "loop paused.");
	}

	private setGameState(state: GameState) {
		this.state = state;
	}

	private getState(): GameState {
		return this.state;
	}

	private canStartLoop(): boolean {
		return (
			this.getState() === GameState.STARTED ||
			this.getState() === GameState.PAUSED
		);
	}

	private canRun(): boolean {
		return this.getState() === GameState.RUNNING;
	}
}
