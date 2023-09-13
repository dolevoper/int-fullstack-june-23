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
	xVertex: number;
	yVertex: number;
	time: number;
	amplitude: number;

	deltaView!: HTMLElement;
	delta!: string;

	constructor() {
		super();

		this.initGameScreen();
		this.startGame();
	}

	onLoad = () => {
		const boxElement = document.querySelector(".box") as HTMLElement;
		this.deltaView = document.querySelector(".delta") as HTMLElement;

		// this.xPos = Number(this.boxView.style.left);
		// this.yPos = Number(this.boxView.style.top);
		this.box = new GameObject(boxElement);
		// this.xVertex = this.screen.getCenter().x - this.box.hitbox.center.x;
		this.yVertex = this.screen.getCenter().y - this.box.hitbox.height;
		this.xVertex = this.screen.getCenter().x - this.box.hitbox.center.x;
		this.yPos = 0;
		this.xPos = this.xVertex / 1.2;
		this.time = 0;
		this.amplitude = 200;
	};

	onUpdate = (deltaTime: number) => {
		this.delta = deltaTime.toString();
		// this.time += 1 / (10 * deltaTime);

		// sin wave
		// this.yPos += 1;
		// this.yPos = this.yVertex + this.amplitude * Math.sin(this.time);
		// this.xPos = Math.sqrt(-this.yPos / 1) + 1;
		this.xPos += (0.5 * deltaTime) / 16;
		this.yPos = this.yVertex + 0.5 * Math.pow(this.xPos - this.xVertex, 2);
	};

	onRender = () => {
		this.box.view.style.left = `${this.xPos}px`;
		this.box.view.style.top = `${this.yPos}px`;
		this.deltaView.textContent = `DELTA: ${this.delta} `;
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
