import { Food } from "./Food.js";
import { foodList } from "./FoodType.js";
import { Game, GameState } from "./Game.js";
import { GameObject } from "./GameObject.js";
import { GameManager } from "./GameManager.js";
import { GameScreen } from "./GameScreen.js";
import { List } from "./List.js";

export class NinjaChef extends Game {
	static TAG = "NinjaChef";

	screen!: GameScreen;
	gameManager!: GameManager;

	gameObjects!: List<GameObject>;
	pauseButton!: HTMLElement;
	scoreView!: HTMLElement;
	timeView!: HTMLElement;
	delta!: string;

	constructor() {
		super();

		this.initGameScreen();
		this.initMenu();
		this.startGame();
	}

	onLoad = () => {
		this.gameManager = new GameManager();
		this.gameManager.resetScore();

		this.gameTime = 0;

		this.timeView = document.querySelector(".time") as HTMLElement;

		this.gameObjects = new List("Game Objects in game");

		for (let i = 0; i < 3; i++) {
			const randomFood = Math.floor(Math.random() * (foodList.length - 1));
			const newFood = new Food(i, foodList[randomFood], this.screen);
			newFood.setOnFoodClickedListener(this.onFoodClicked.bind(this));
			newFood.setOnFoodMissed(this.onFoodMissed.bind(this));
			this.gameObjects.add(newFood);
		}
	};

	onUpdate = (deltaTime: number) => {
		this.delta = deltaTime.toString();

		this.updateAllGameObjects(this.gameTime);
	};

	onRender = () => {
		this.timeView.textContent = `Time: ${this.gameTime.toFixed(2)} `;
		this.scoreView.innerText = `${this.gameManager.getScore()}`;

		this.drawAllGameObjects();
	};

	onPause = () => {};

	onResume = () => {};

	onExit = () => {};

	onFoodClicked() {
		console.log("food clicked");
		this.gameManager.addScore(1);
	}

	onFoodMissed(food: Food) {
		console.log("food missed");
		food.destroy();
		this.gameObjects.remove(food);
		this.gameManager.addScore(-1);
	}

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

	initMenu() {
		this.pauseButton = document.querySelector(".pause") as HTMLElement;

		this.pauseButton.addEventListener("click", () => {
			console.log("pause clicked");
			if (this.getState() === GameState.RUNNING) this.pauseGame();
			else if (this.getState() === GameState.PAUSED) this.resumeGame();
		});

		this.scoreView = document.querySelector(".score") as HTMLElement;
	}
}
