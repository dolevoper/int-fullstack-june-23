import { Food } from "./AnimalDiet.js";
import { AnimalType } from "./AnimalType.js";
import { Animal } from "./Animal.js";
import { List } from "./List.js";

export class AnimalList extends List<Animal> {
	constructor(name?: string) {
		super(name);
	}

	getAnimalsByType(type: AnimalType) {
		return this.filter((animal) => animal.getType() === type) as AnimalList;
	}

	getByTypeName(typeName: string) {
		return this.filter(
			(animal) => animal.getType().getName() === typeName
		) as AnimalList;
	}

	getAnimalsByHungry() {
		return this.filter((animal) => animal.isHungry()) as AnimalList;
	}

	getAnimalsByThirsty() {
		return this.filter((animal) => animal.isThirsty()) as AnimalList;
	}

	getAnimalsBySad() {
		return this.filter((animal) => animal.isSad()) as AnimalList;
	}

	getAnimalsByHappy() {
		return this.filter((animal) => animal.isHappy()) as AnimalList;
	}

	getAnimalByBirthID(id: number) {
		return this.find((animal) => animal.getBirthID() === id);
	}

	getAnimalByName(name: string) {
		return this.find((animal) => animal.getName() === name);
	}

	feedAllAnimalsWithResults(food: Food) {
		return this.callMethodAll(
			"eat",
			`${this.getName()} feeded with ${food.name}`,
			food
		);
	}

	feedAllAnimals(food: Food) {
		this.forEach((animal) => animal.eat(food));
	}

	feedHungryAnimals(food: Food) {
		console.log(`feeding all HUNGRY animals with ${food.name}`);
		this.forEach((animal) => (animal.isHungry() ? animal.eat(food) : false));
	}

	waterAllAnimalsWithResults() {
		return this.callMethodAll("drink", `watered ${this.getName()}`);
	}

	waterAllAnimals() {
		this.forEach((animal) => animal.drink());
	}

	waterThirstyAnimals() {
		this.forEach((animal) => (animal.isThirsty() ? animal.drink() : false));
	}

	makeHappyAll() {
		this.forEach((animal) => animal.makeHappy());
	}
	makeSadAll() {
		this.forEach((animal) => animal.makeSad());
	}

	addHappinessAll(amount: number) {
		this.forEach((animal) => animal.addHappiness(amount));
	}

	reduceHappinessAll(amount: number) {
		this.forEach((animal) => animal.reduceHappiness(amount));
	}

	toString() {
		let animalsDescriptionList: string = "";

		for (const animal of this) {
			animalsDescriptionList += `\n ${animal.toString()}`;
		}

		return `Animal List: ${animalsDescriptionList}`;
	}
}
