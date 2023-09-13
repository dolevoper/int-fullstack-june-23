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
	private shouldLogStates!: boolean;

	private previousTime!: number;

	protected load!: Function;
	protected update!: Function;
	protected render!: Function;

	protected onPause!: Function;
	protected onResume!: Function;
	protected onExit!: Function;

	constructor() {
		this.debugGameStateLogs(false);
	}

	protected initialize() {
		this.setGameState(GameState.INTIALIZE);
		this.logGameStateEvent("initializing");

		this.load = () => {
			this.logGameStateEvent("load not implemented");
		};
		this.update = () => {
			this.logGameStateEvent("update not implemented");
		};
		this.render = () => {
			this.logGameStateEvent("render not implemented");
		};
		this.onPause = () => {
			this.logGameStateEvent("onPause not implemented");
		};
		this.onResume = () => {
			this.logGameStateEvent("onResume not implemented");
		};
		this.onExit = () => {
			this.logGameStateEvent("onExit not implemented");
		};

		this.attachScreenListeners();
	}

	protected start() {
		if (this.getState() !== GameState.READY) {
			throw new Error(
				`${Game.TAG} not ready to start.\nGame not initialized.\nPlease call initialize() before start().`
			);
		}

		this.setGameState(GameState.LOADING);
		this.logGameStateEvent("loading...");
		this.load();

		this.setGameState(GameState.STARTED);
		this.logGameStateEvent("starting.");

		this.startGameLoop();
	}

	private run(time: number): void {
		const deltaTime = calculateDeltaTime(time, this.previousTime);

		this.update(deltaTime);
		this.render(deltaTime);

		if (this.canRun()) this.frame(this.run);
	}

	private resume() {
		this.logGameStateEvent("resumed.");

		this.onResume();

		this.startGameLoop();
	}

	private pause() {
		this.logGameStateEvent("pause.");

		this.pauseGameLoop();

		this.onPause();
	}

	private exit() {
		this.setGameState(GameState.EXITING);
		this.logGameStateEvent("exiting.");
		this.pauseGameLoop();

		this.onExit();
	}

	private startGameLoop() {
		if (!this.canStartLoop()) {
			this.logGameStateEvent(
				"Unable to start game loop, not in WAITINGSTART or PAUSED."
			);
			return;
		}

		this.frame((time) => {
			this.previousTime = time;
			this.setGameState(GameState.RUNNING);
			this.logGameStateEvent("loop started.");
			this.frame(this.run);
		});
	}

	private frame(gameLoop: FrameRequestCallback) {
		window.requestAnimationFrame(gameLoop.bind(this));
	}

	private pauseGameLoop() {
		this.setGameState(GameState.PAUSED);
		this.logGameStateEvent("loop paused.");
	}

	private setGameState(state: GameState) {
		this.state = state;
	}

	protected getState(): GameState {
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

	private attachScreenListeners() {
		window.addEventListener("load", () => {
			this.setGameState(GameState.READY);
			this.logGameStateEvent("ready.");
		});

		document.addEventListener("visibilitychange", (event) => {
			if (document.visibilityState === "visible") {
				this.resume();
			} else {
				this.pause();
			}
		});
	}

	protected debugGameStateLogs(shouldLog: boolean) {
		this.shouldLogStates = shouldLog;
	}

	private logGameStateEvent(message: string) {
		if (this.shouldLogStates) log(Game.TAG, message);
	}
}
