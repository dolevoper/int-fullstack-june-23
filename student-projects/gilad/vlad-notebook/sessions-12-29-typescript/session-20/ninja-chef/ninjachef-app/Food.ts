import { FoodElement } from "./FoodElement.js";
import { FoodType } from "./FoodType.js";
import { GameObject } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";
import { random, randomBoolean } from "./helpers.js";

export class Food extends GameObject {
	foodType: FoodType;
	jumpStart!: number;
	jumpEnd!: number;
	jumpStartHeight!: number;
	jumpHeight!: number;
	jumpSpeed!: number;
	jumpDirection!: boolean;

	constructor(id: number, foodType: FoodType, screen: GameScreen) {
		super(id, foodType.name, screen);
		this.foodType = foodType;
		this.initialise();
	}

	public initialise(): void {
		this.generateFoodElement();
		this.setRandomJump();
	}

	public update(gameTime: number): void {
		this.moveParabaloic(
			this.position,
			this.jumpStart,
			this.jumpEnd,
			this.jumpStartHeight,
			this.jumpHeight,
			this.jumpSpeed,
			this.jumpDirection,
			gameTime
		);
	}

	public onExitScreen() {}

	public draw(): void {
		this.view.style.left = `${this.position.x}px`;
		this.view.style.top = `${this.position.y}px`;
	}

	public setRandomJump() {
		const minimumWidth = 300;
		const widthMargin = 100;
		let randomDirection = randomBoolean();
		const randomStartX = random(0, this.screen.getCenter().x);
		const randomEndX = random(
			randomStartX + minimumWidth,
			this.screen.boundaries.width - widthMargin
		);
		const randomHeight = random(
			this.screen.getCenter().y,
			this.screen.boundaries.height - 100
		);

		this.setJump(
			randomStartX,
			randomEndX,
			this.screen.boundaries.height,
			randomHeight,
			2,
			randomDirection
		);
	}
	public setJump(
		startX: number,
		endX: number,
		startY: number,
		height: number,
		speed: number,
		direction: boolean
	) {
		if (direction) this.position.x = startX;
		else this.position.x = endX;
		this.position.y = 0;

		this.jumpStart = startX;
		this.jumpEnd = endX;
		this.jumpStartHeight = startY;
		this.jumpHeight = startY - height;
		this.jumpSpeed = speed;
		this.jumpDirection = direction;

		console.log("screen width = " + this.screen.boundaries.width);
		console.log("start x = " + startX);
		console.log("end x = " + endX);
		console.log("start y = " + startY);
		console.log("height= " + height);
	}

	private generateFoodElement() {
		const foodElement = new FoodElement(this.foodType);
		this.setElement(foodElement);
	}
}
