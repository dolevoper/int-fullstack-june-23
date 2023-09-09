import { Diets, Food } from "./AnimalDiet.js";
import { Gender, AnimalType } from "./AnimalType.js";
import { GameObject } from "./GameObjectInterface.js";
import { NeedBar } from "./NeedBar.js";

export class Animal implements GameObject {
	private birthId: number;
	private name: string;
	private gender: Gender;
	private type: AnimalType;
	private hunger: NeedBar;
	private hydration: NeedBar;
	private happiness: NeedBar;

	constructor(id: number, name: string, gender: Gender, type: AnimalType) {
		this.birthId = id;
		this.name = name;
		this.gender = gender;
		this.type = type;

		this.hunger = new NeedBar(
			"hunger",
			0,
			100,
			100,
			25,
			this.hungryAlert.bind(this)
		);
		this.hydration = new NeedBar(
			"hydration",
			0,
			100,
			100,
			50,
			this.thirstyAlert.bind(this)
		);
		this.happiness = new NeedBar(
			"happiness",
			0,
			4,
			4,
			2,
			this.sadAlert.bind(this)
		);
	}

	getBirthID() {
		return this.birthId;
	}

	getName() {
		return this.name;
	}

	getGender() {
		return this.gender;
	}

	getType() {
		return this.type;
	}

	getHungerBar() {
		return this.hunger;
	}

	getHydrationBar() {
		return this.hydration;
	}

	getHappinessBar() {
		return this.happiness;
	}

	getSound() {
		return this.getType().getSound();
	}

	isHungry() {
		return this.getHungerBar().isAlertingValue();
	}

	isHungerFull() {
		return this.getHungerBar().isFull();
	}

	isThirsty() {
		return this.getHydrationBar().isAlertingValue();
	}

	isSad() {
		return this.getHappinessBar().isAlertingValue();
	}

	isHappy() {
		return !this.isSad();
	}

	eat(food: Food, amount?: number): Boolean {
		if (!this.getType().getDiet().canEat(food)) {
			this.announce(
				`can't eat ${
					food.name
				}, ${this.getGenderPerfix()} a ${this.getType().getName()}!`
			);
			return false;
		}

		if (this.isHungerFull()) {
			this.announce(`wont eat ${food.name}, ${this.getGenderPerfix()} full!`);
			return true;
		}

		if (amount) {
			this.getHungerBar().addValue(amount);
			this.announce(`eaten ${amount} ${food.name}!`);
			return this.isHungerFull();
		} else {
			this.getHungerBar().setFull();
			this.announce(`eaten ${food.name}!`);
			return true;
		}
	}

	makeHungry() {
		this.getHungerBar().setEmpty();
	}

	makeThirsty() {
		this.getHydrationBar().setEmpty();
	}

	eatIfHungry(food: Food, amount?: number): Boolean {
		return !this.isHungry() ? true : this.eat(food, amount);
	}

	drink(amount?: number) {
		if (amount) {
			this.getHydrationBar().addValue(amount);
			this.announce(`drinked ${amount} water!`);
		} else {
			this.getHydrationBar().setFull();
			this.announce(`drinked until hydration!`);
		}
	}

	drinkIfThirsty(amount?: number) {
		return !this.isThirsty() ? true : this.drink(amount);
	}

	addHappiness(amount: number) {
		if (amount <= 0) return;
		this.getHappinessBar().addValue(amount);
		this.announce(`is now happier by ${amount}!`);
	}

	makeHappy() {
		this.getHappinessBar().setFull();
	}

	reduceHappiness(amount: number) {
		if (amount <= 0) return;
		this.getHappinessBar().reduceValue(amount);
		this.announce(`is now sadder by ${amount}!`);
	}

	makeSad() {
		this.getHappinessBar().setEmpty();
	}

	announce(message: string) {
		console.log(`${this.toString()} ${message} ${this.getSound()}`);
	}

	hungryAlert() {
		this.announce("is hungry!");
	}

	thirstyAlert() {
		this.announce("is thirsty!");
	}

	sadAlert() {
		this.announce("is sad!");
	}

	toString() {
		return `${this.getType().getEmoji()} ${this.getGender()} ${this.getType().getName()} ${this.getName()}`;
	}

	getGenderPerfix(): string {
		return `${this.getGender() === Gender.Female ? "s" : ""}he's`;
	}
	onDayPassed(): undefined {
		this.getHungerBar().reduceValue(1);
		this.getHydrationBar().reduceValue(1);

		const isSatisfiedHunger = this.eatIfHungry(
			new Food("Banana", Diets.Herbivore)
		);
		const isSatisfiedThirst = this.drinkIfThirsty();

		if (!isSatisfiedHunger || isSatisfiedThirst)
			this.getHappinessBar().reduceValue(-1);
	}
}
