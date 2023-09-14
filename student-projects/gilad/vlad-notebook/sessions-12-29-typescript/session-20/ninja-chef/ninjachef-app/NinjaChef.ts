import { Food } from "./Food.js";
import { foodList } from "./FoodType.js";
import { Game } from "./Game.js";
import { GameObject } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { List } from "./List.js";

export class NinjaChef extends Game {
	static TAG = "NinjaChef";

	screen!: GameScreen;

	box!: GameObject;
	gameObjects!: List<GameObject>;
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

		this.gameObjects = new List("Game Objects in game");
		for (let i = 0; i < 3; i++) {
			const randomFood = Math.floor(Math.random() * (foodList.length - 1));
			this.gameObjects.add(new Food(1, foodList[randomFood], this.screen));
		}
	};

	onUpdate = (deltaTime: number) => {
		this.delta = deltaTime.toString();

		this.updateAllGameObjects(this.gameTime);
	};

	onRender = () => {
		this.timeView.textContent = `Time: ${this.gameTime.toFixed(2)} `;
		this.deltaView.textContent = `DELTA: ${this.delta} `;

		this.drawAllGameObjects();
	};

	onPause = () => {};

	onResume = () => {};

	onExit = () => {};

	updateAllGameObjects(gameTime: number) {
		this.gameObjects.forEach((object) => object.update(this.gameTime));
	}
	drawAllGameObjects() {
		this.gameObjects.forEach((object) => object.draw());
	}
	initGameScreen() {
		const screenElement = document.querySelector(
			".game-screen"
		) as HTMLBodyElement;
		this.screen = new GameScreen(screenElement);
	}
}
