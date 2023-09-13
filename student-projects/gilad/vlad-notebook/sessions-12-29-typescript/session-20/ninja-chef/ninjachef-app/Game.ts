import { calculateDeltaTime, log } from "./helpers.js";

enum GameState {
	NOT_STARTED,
	INTIALIZE,
	LOADING,
	STARTED,
	RUNNING,
	PAUSED,
	EXITING,
}

type GameLoopCallback = (deltaTime: number) => void;

export class Game {
	static TAG = "Game";

	private state!: GameState;
	private shouldLogStates!: boolean;

	private previousTime!: number;

	protected onLoad!: Function;
	protected onUpdate!: GameLoopCallback;
	protected onRender!: GameLoopCallback;

	protected onPause!: Function;
	protected onResume!: Function;
	protected onExit!: Function;

	constructor() {
		this.debugGameStateLogs(false);
		this.setGameState(GameState.NOT_STARTED);

		this.onLoad = () => {
			this.logGameStateEvent("load not defined");
		};
		this.onUpdate = () => {};
		this.onRender = () => {};
		this.onPause = () => {
			this.logGameStateEvent("onPause not defined");
		};
		this.onResume = () => {
			this.logGameStateEvent("onResume not defined");
		};
		this.onExit = () => {
			this.logGameStateEvent("onExit not defined");
		};
	}

	protected start() {
		if (this.getState() !== GameState.NOT_STARTED) {
			throw new Error(
				`${Game.TAG} Game already started.\nPlease call start() only once.`
			);
		}

		this.initialize();
	}

	private initialize() {
		this.setGameState(GameState.INTIALIZE);
		this.logGameStateEvent("initializing");

		this.attachOnLoadListener();
	}

	private load() {
		this.setGameState(GameState.LOADING);
		this.logGameStateEvent("loading...");

		this.onLoad();

		this.attachScreenListener();

		this.setGameState(GameState.STARTED);
		this.logGameStateEvent("starting.");

		this.startGameLoop();
	}

	private run(time: number): void {
		const deltaTime = calculateDeltaTime(time, this.previousTime);

		this.onUpdate(deltaTime);
		this.onRender(deltaTime);

		if (this.canRun()) this.frame(this.run);
	}

	private pause() {
		this.pauseGameLoop();
		this.logGameStateEvent("pause.");

		this.onPause();
	}

	private resume() {
		this.logGameStateEvent("resumed.");

		this.onResume();

		this.startGameLoop();
	}

	private exit() {
		this.setGameState(GameState.EXITING);
		this.logGameStateEvent("exiting.");
		this.pauseGameLoop();

		this.onExit();
	}

	private startGameLoop() {
		if (!this.canStartLoop()) {
			throw new Error(
				"Unable to start game loop, not in WAITINGSTART or PAUSED."
			);
		}
		this.setGameState(GameState.RUNNING);
		this.logGameStateEvent("loop started.");

		this.frame((time) => {
			this.previousTime = time;
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

	private attachOnLoadListener() {
		window.addEventListener("load", () => {
			this.load();
		});
	}

	private attachScreenListener() {
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
