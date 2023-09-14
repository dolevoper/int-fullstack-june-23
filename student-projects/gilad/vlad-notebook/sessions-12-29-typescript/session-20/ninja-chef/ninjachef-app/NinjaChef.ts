import { Food } from "./Food.js";
import { foodList } from "./FoodType.js";
import { Game } from "./Game.js";
import { GameObject } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";
import { log } from "./helpers.js";

export class NinjaChef extends Game {
	static TAG = "NinjaChef";

	screen!: GameScreen;

	box!: GameObject;

	deltaView!: HTMLElement;
	timeView!: HTMLElement;
	delta!: string;

	constructor() {
		super();

		this.initGameScreen();
		this.startGame();
	}

	onLoad = () => {
		this.gameTime = 0;

		this.timeView = document.querySelector(".time") as HTMLElement;
		this.deltaView = document.querySelector(".delta") as HTMLElement;

		const randomFood = Math.floor(Math.random() * foodList.length + 1);
		this.box = new Food(1, foodList[randomFood], this.screen);
	};

	onUpdate = (deltaTime: number) => {
		this.delta = deltaTime.toString();
		this.box.update(this.gameTime);
	};

	onRender = () => {
		this.timeView.textContent = `Time: ${this.gameTime.toFixed(2)} `;
		this.deltaView.textContent = `DELTA: ${this.delta} `;

		this.box.draw();
	};

	onPause = () => {};

	onResume = () => {};

	onExit = () => {};

	initGameScreen() {
		const screenElement = document.querySelector(
			".game-screen"
		) as HTMLBodyElement;
		this.screen = new GameScreen(screenElement);
	}
}
