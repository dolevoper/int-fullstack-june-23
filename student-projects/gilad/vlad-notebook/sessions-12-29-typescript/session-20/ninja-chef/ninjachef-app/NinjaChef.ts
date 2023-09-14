import { Game } from "./Game.js";
import { GameObject } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { log } from "./helpers.js";

export class NinjaChef extends Game {
	static TAG = "NinjaChef";

	screen!: GameScreen;

	box!: GameObject;
	xPos!: number;
	yPos!: number;
	yCenter: number;
	xCenter: number;
	gameTime: number;

	deltaView!: HTMLElement;
	timeView!: HTMLElement;
	delta!: string;
	cycles: number;

	constructor() {
		super();

		this.initGameScreen();
		this.startGame();
	}

	onLoad = () => {
		this.gameTime = 0;

		const boxElement = document.querySelector(".box") as HTMLElement;
		this.timeView = document.querySelector(".time") as HTMLElement;
		this.deltaView = document.querySelector(".delta") as HTMLElement;

		// this.xPos = Number(this.boxView.style.left);
		// this.yPos = Number(this.boxView.style.top);
		this.box = new GameObject(boxElement);
		// this.xVertex = this.screen.getCenter().x - this.box.hitbox.center.x;
		this.yCenter = this.screen.getCenter().y - this.box.hitbox.center.y;
		this.xCenter = this.screen.getCenter().x - this.box.hitbox.center.x;
		this.yPos = this.yCenter;
		this.xPos = this.xCenter;
		this.cycles = 0;
		// this.xPos = 0;
		// this.xPos = this.xVertex / 1.2;
	};

	onUpdate = (deltaTime: number) => {
		this.gameTime += deltaTime;
		this.delta = deltaTime.toString();

		// sin wave
		this.xPos = this.moveSinusWave(this.xCenter, 100, 1, this.gameTime, 0);

		// parabola wave
		// start position (time axis)
		// this.xPos = this.xVertex / 1.2;
		// parabola speed
		// this.xPos += (0.5 * deltaTime) / 16;
		// calculate y of parabola
		// this.yPos = this.yVertex + 0.5 * Math.pow(this.xPos - this.xVertex, 2);
	};

	moveSinusWave(
		offset: number,
		amplitude: number,
		fullCycleInSeconds: number,
		time: number,
		timeoffset: number
	): number {
		const frequency = 6 * fullCycleInSeconds;
		return offset + amplitude * Math.sin(frequency * time + timeoffset);
	}

	onRender = () => {
		this.timeView.textContent = `Time: ${this.gameTime.toFixed(2)} `;
		this.deltaView.textContent = `DELTA: ${this.delta} `;
		this.box.view.style.left = `${this.xPos}px`;
		this.box.view.style.top = `${this.yPos}px`;
	};

	onPause = () => {};

	onResume = () => {};

	onExit = () => {};

	initGameScreen() {
		const screenElement = document.querySelector(
			".game-screen"
		) as HTMLBodyElement;
		this.screen = new GameScreen(screenElement);
		log(NinjaChef.TAG, "Created game screen. middle point is: ");
		console.log(this.screen.boundaries.center);
	}
}
