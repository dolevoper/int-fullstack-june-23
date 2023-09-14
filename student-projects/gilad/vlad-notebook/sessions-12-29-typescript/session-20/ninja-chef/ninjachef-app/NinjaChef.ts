import { Food } from "./Food.js";
import { foodList } from "./FoodType.js";
import { Game, GameState } from "./Game.js";
import { GameObject } from "./GameObject.js";
import { GameManager } from "./GameManager.js";
import { GameScreen } from "./GameScreen.js";
import { List } from "./List.js";
import { random } from "./helpers.js";

export class NinjaChef extends Game {
	static TAG = "NinjaChef";

	screen!: GameScreen;
	gameManager!: GameManager;

	gameObjects!: List<GameObject>;
	pauseButton!: HTMLElement;
	scoreView!: HTMLElement;
	livesView!: HTMLElement;
	timeView!: HTMLElement;
	delta!: string;

	constructor() {
		super();

		this.debugGameStateLogs(true);
		this.initGameScreen();
		this.initMenu();
		this.startGame();
	}

	onLoad = () => {
		this.gameManager = new GameManager();
		this.gameManager.resetScore();
		this.gameManager.setLives(3);

		this.timeView = document.querySelector(".time") as HTMLElement;

		this.gameObjects = new List("Game Objects in game");

		this.startNextLevel();
	};

	onUpdate = (deltaTime: number) => {
		this.delta = deltaTime.toString();

		this.updateAllGameObjects(this.deltaTime);

		if (this.gameObjects.length === 0) this.onNoMoreFood();
		if (this.gameManager.noMoreLives()) this.onGameOver();
	};

	onRender = () => {
		this.timeView.textContent = `Time: ${this.gameTime.toFixed(2)} `;
		this.scoreView.innerText = `${this.gameManager.getScore()}`;

		this.drawAllGameObjects();
	};

	onPause = () => {};

	onResume = () => {};

	onExit = () => {
		this.gameObjects.clearAll();
	};

	onGameOver() {
		console.log("Game Over! score: " + this.gameManager.getScore());
		this.exitGame();
	}

	onFoodClicked(food: Food) {
		console.log(`Food ${food.name} clicked`);
		food.destroy();
		this.gameObjects.remove(food);

		this.gameManager.addScore(1);
	}

	onFoodMissed(food: Food) {
		console.log("food missed");
		this.gameObjects.remove(food);
		this.gameManager.removeHeart(1);
		this.onLiveRemoved();
	}

	onNoMoreFood() {
		this.startNextLevel();
	}

	startNextLevel() {
		this.generateFood();
		this.gameManager.nextLevel();
		console.log(this.gameObjects);
	}

	updateAllGameObjects(gameTime: number) {
		this.gameObjects.forEach((object) => object.update(gameTime));
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
		this.livesView = document.querySelector(".lives") as HTMLElement;
	}

	generateFood() {
		const amoundPerLevel = random(2, this.gameManager.getLevel() * 2);

		for (let i = 0; i < amoundPerLevel; i++) {
			const randomFood = random(1, Math.random() * foodList.length);
			const newFood = new Food(i, foodList[randomFood], this.screen);
			newFood.setOnFoodClickedListener(this.onFoodClicked.bind(this));
			newFood.setOnFoodMissed(this.onFoodMissed.bind(this));
			this.gameObjects.add(newFood);
		}
		console.log(`Generated ${amoundPerLevel}`);
	}

	onLiveRemoved() {
		let livesText = "";
		for (let i = 0; i < this.gameManager.getLives(); i++) {
			livesText += "💖";
		}

		this.livesView.innerText = livesText;
	}
}
