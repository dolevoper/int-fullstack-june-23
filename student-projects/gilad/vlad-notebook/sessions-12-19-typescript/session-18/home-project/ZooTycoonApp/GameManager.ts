import { GameObject } from "./GameObjectInterface.js";
import { List } from "./List.js";

export class GameManager {
	private daysPassed: number;
	private gameObjects: List<GameObject>;

	constructor() {
		this.daysPassed = 1;
		this.gameObjects = new List("General Game Objects");
	}

	public nextDay() {
		this.daysPassed++;
		alert(`Another day passed, current day: ${this.daysPassed}`);
	}

	public skipDays(daysToSkip: number) {
		for (let i = 0; i < daysToSkip; i++) {
			this.nextDay();
		}
	}

	public getCurrentDay() {
		return this.daysPassed;
	}

	public addGameObject(gameObject: GameObject) {
		this.gameObjects.add(gameObject);
	}

	public removeGameObject(gameObject: GameObject) {
		this.gameObjects.remove(gameObject);
	}
}
