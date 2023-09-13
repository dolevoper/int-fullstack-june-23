import { log } from "./helpers.js";

export enum GameState {
	NOT_STARTED,
	INTIALIZE,
	LOADING,
	STARTED,
	RUNNING,
	PAUSED,
	EXITING,
}

type GameLoopCallback = (deltaTime: number) => void;
type GameRenderCallback = () => void;

export class Game {
	static TAG = "Game";

	private state!: GameState;
	private shouldLogStates!: boolean;

	private animationRequestId!: number;
	private deltaTime!: number;

	protected onLoad!: Function;
	protected onUpdate!: GameLoopCallback;
	protected onRender!: GameRenderCallback;

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

	private start() {
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
		this.deltaTime = this.calculateDeltaTime(time, this.deltaTime);

		this.onUpdate(this.deltaTime);
		this.onRender();

		this.deltaTime = time;

		this.frame(this.run);
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
		this.pauseGameLoop();
		this.setGameState(GameState.EXITING);
		this.logGameStateEvent("exiting.");

		this.onExit();
	}

	private startGameLoop() {
		this.logGameStateEvent(
			`Starting loop at state ${GameState[this.getState()]}`
		);

		if (this.getState() === GameState.RUNNING) return;

		if (!this.canStartLoop()) {
			throw new Error(
				`Unable to start game loop from state ${
					GameState[this.getState()]
				}, not in WAITINGSTART or PAUSED.\n`
			);
		}

		this.setGameState(GameState.RUNNING);
		this.logGameStateEvent("loop started.");

		this.frame((time) => {
			this.deltaTime = time;
			this.frame(this.run);
		});
	}

	private frame(gameLoop: FrameRequestCallback) {
		this.animationRequestId = window.requestAnimationFrame(gameLoop.bind(this));
	}

	private pauseGameLoop() {
		cancelAnimationFrame(this.animationRequestId);
		this.setGameState(GameState.PAUSED);
		this.logGameStateEvent("loop discarded.");
	}

	private setGameState(state: GameState) {
		this.state = state;
	}

	protected getState(): GameState {
		return this.state;
	}

	private canStartLoop(): boolean {
		return (
			this.getState() === GameState.RUNNING ||
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
		window.addEventListener("focus", (event) => {
			if (this.getState() !== GameState.RUNNING) this.resume();
		});

		window.addEventListener("blur", (event) => {
			this.pause();
		});
	}

	protected debugGameStateLogs(shouldLog: boolean) {
		this.shouldLogStates = shouldLog;
	}

	private logGameStateEvent(message: string) {
		if (this.shouldLogStates) log(Game.TAG, message);
	}

	private calculateDeltaTime(time: number, previousTime: number): number {
		return time - previousTime;
	}

	protected startGame() {
		this.start();
	}

	protected pauseGame() {
		this.pause();
	}

	protected resumeGame() {
		this.resume();
	}

	protected exitGame() {
		this.resume();
	}
}
