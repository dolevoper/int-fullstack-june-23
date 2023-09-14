import { FoodElement } from "./FoodElement.js";
import { FoodType } from "./FoodType.js";
import { GameObject, OnGameObjectListener } from "./GameObject.js";
import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";
import { random, randomBoolean } from "./helpers.js";

export type onFoodMissedListener = (missedFood: Food) => void;

export class Food extends GameObject {
	foodType: FoodType;
	jumpStart!: number;
	jumpEnd!: number;
	jumpStartHeight!: number;
	jumpHeight!: number;
	jumpSpeed!: number;
	jumpDirection!: boolean;

	isInScreen!: boolean;
	onFoodClickedListener!: OnGameObjectListener;
	onFoodMissedListener!: onFoodMissedListener;

	constructor(id: number, foodType: FoodType, screen: GameScreen) {
		super(id, foodType.name, screen);
		this.foodType = foodType;
		this.initialise();
	}

	public initialise(): void {
		this.generateFoodElement();
		this.setRandomJump();
		this.initOnClick();
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
		this.updateIsInScreen();
		if (!this.isInScreen) {
			this.onFoodMissed();
		}
	}

	public updateIsInScreen() {
		this.isInScreen = this.position.y < this.screen.boundaries.height;
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

		const randomSpeed = random(50, 150);

		this.setJump(
			randomStartX,
			randomEndX,
			this.screen.boundaries.height,
			randomHeight,
			randomSpeed,
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
	}

	private generateFoodElement() {
		const foodElement = new FoodElement(this.foodType);
		this.setElement(foodElement);
	}

	public destroy() {
		this.screen.removeGameObject(this);
	}

	public onFoodMissed() {
		if (this.onFoodMissedListener) this.onFoodMissedListener(this);
	}

	private initOnClick() {
		this.setOnClickListener((event) => {
			if (this.onFoodClickedListener) this.onFoodClickedListener(event);
			this.destroy();
		});
	}

	public setOnFoodClickedListener(listener: OnGameObjectListener) {
		this.onFoodClickedListener = listener;
	}

	public setOnFoodMissed(listener: onFoodMissedListener) {
		this.onFoodMissedListener = listener;
	}
}
