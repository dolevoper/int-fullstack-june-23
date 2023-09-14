import { FoodElement } from "./FoodElement.js";
import { FoodType } from "./FoodType.js";
import { GameObject } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";

export class Food extends GameObject {
	foodType: FoodType;
	jumpStart!: Point;
	jumpEnd!: Point;
	jumpHeight!: number;
	jumpSpeed!: number;

	constructor(id: number, foodType: FoodType, screen: GameScreen) {
		super(id, foodType.name, screen);
		this.foodType = foodType;
		this.initialise();
	}

	public initialise(): void {
		this.generateFoodElement();

		this.position.x = 50;
		this.position.y = this.screen.boundaries.height;
		const start = new Point(50, this.screen.boundaries.height);
		const end = new Point(
			this.screen.boundaries.width - 50,
			this.screen.boundaries.height
		);

		this.setJump(start, end, 500, 1);
	}

	public update(gameTime: number): void {
		this.moveParabaloic(
			this.position,
			this.jumpStart,
			this.jumpEnd,
			this.jumpHeight,
			this.jumpSpeed,
			gameTime
		);
	}

	public onExitScreen() {}

	public draw(): void {
		this.view.style.left = `${this.position.x}px`;
		this.view.style.top = `${this.position.y}px`;
	}

	public setJump(start: Point, end: Point, height: number, speed: number) {
		this.jumpStart = start;
		this.jumpEnd = end;
		this.jumpHeight = height;
		this.jumpSpeed = speed;
	}

	private generateFoodElement() {
		const foodElement = new FoodElement(this.foodType);
		this.setElement(foodElement);
	}
}
