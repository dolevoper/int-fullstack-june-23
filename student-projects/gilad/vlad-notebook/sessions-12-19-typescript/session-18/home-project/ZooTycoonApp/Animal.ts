import { Food } from "./AnimalDiet.js";
import { Gender, AnimalType, camel, bear } from "./AnimalType.js";
import { NeedBar } from "./NeedBar.js";

export class Animal {
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

		this.hunger = new NeedBar("hunger", 0, 100, 100, 25, this.hungryAlert);
		this.hydration = new NeedBar(
			"hydration",
			0,
			100,
			100,
			50,
			this.thirstyAlert
		);
		this.happiness = new NeedBar("happiness", 0, 4, 4, 2, this.sadAlert);
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

	isThirsty() {
		return this.getHydrationBar().isAlertingValue();
	}

	isSad() {
		return this.getHappinessBar().isAlertingValue();
	}

	isHappy() {
		return !this.isSad();
	}

	eat(food: Food, amount?: number) {
		if (!this.getType().getDiet().canEat(food)) {
			this.announce(
				`can't eat ${food.name}, ${
					this.getGender() === Gender.Female ? "s" : ""
				}he's a ${this.getType().getName()}!`
			);
		} else {
			if (amount) {
				this.getHungerBar().addValue(amount);
				this.announce(`eaten ${amount} ${food.name}!`);
			} else {
				this.getHungerBar().setFull();
				this.announce(`eaten ${food.name}!`);
			}
		}
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

	addHappiness(amount?: number) {
		if (amount) {
			this.getHappinessBar().addValue(amount);
			this.announce(`is now happier by ${amount}!`);
		} else {
			this.getHappinessBar().setFull();
			this.announce(`is now fully happy!`);
		}
	}

	reduceHappiness(amount?: number) {
		if (amount) {
			this.getHappinessBar().reduceValue(amount);
			this.announce(`is now sadder by ${amount}!`);
		} else {
			this.getHappinessBar().setEmpty();
			this.announce(`is now fully sad!`);
		}
	}

	announce(message: string) {
		console.log(`${this.toString()} ${message} ${this.getSound()}`);
	}

	toString() {
		return `${this.getType().getEmoji()} ${this.getGender()} ${this.getType().getName()} ${this.getName()} -`;
	}

	hungryAlert() {
		console.log(`${this.type.getName()} - ${this.name} is hungry!`);
	}

	thirstyAlert() {
		console.log(`${this.type.getName()} - ${this.name} is thirsty!`);
	}

	sadAlert() {
		console.log(`${this.type.getName()} - ${this.name} is sad!`);
	}
}

export class AnimalList {
	private name: string;
	private animals: Animal[];

	constructor() {
		this.animals = [];
	}

	add(animal: Animal) {
		if (animal) this.animals.push(animal);
		console.log(`${animal.toString()} added to the list`);
	}

	getAll() {
		return this.animals;
	}

	getAnimalsByType(type: AnimalType) {
		return this.animals.filter((animal) => animal.getType() === type);
	}

	getAnimalsByTypeName(typeName: string) {
		return this.animals.filter(
			(animal) => animal.getType().getName() === typeName
		);
	}

	getAnimalsByHungry() {
		return this.animals.filter((animal) => animal.isHungry());
	}

	getAnimalsByThirsty() {
		return this.animals.filter((animal) => animal.isThirsty());
	}

	getAnimalsBySad() {
		return this.animals.filter((animal) => animal.isSad());
	}

	getAnimalsByHappy() {
		return this.animals.filter((animal) => animal.isHappy());
	}

	getAnimalByID(id: number) {
		return this.animals.find((animal) => animal.getBirthID() === id);
	}

	getAnimalByName(name: string) {
		return this.animals.find((animal) => animal.getName() === name);
	}
}
