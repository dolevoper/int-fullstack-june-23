import { Food } from "./AnimalDiet.js";
import { AnimalType } from "./AnimalType.js";
import { Animal } from "./Animal.js";

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

	feedAllAnimals(food: Food) {
		console.log(`feeding all animals with ${food.name}`);
		for (const animal of this.getAll()) {
			animal.eat(food);
		}
	}

	feedHungryAnimals(food: Food) {
		console.log(`feeding all HUNGRY animals with ${food.name}`);

		for (const animal of this.getAll()) {
			if (animal.isHungry()) animal.eat(food);
		}
	}

	waterAllAnimals() {
		console.log(`Watering all animals`);
		for (const animal of this.getAll()) {
			animal.drink();
		}
	}

	waterThirstyAnimals() {
		console.log(`Watering THIRSTY animals`);

		for (const animal of this.getAll()) {
			if (animal.isThirsty()) animal.drink();
		}
	}

	toString() {
		let animalsDescriptionList: string = "";

		for (const animal of this.getAll()) {
			animalsDescriptionList += `\n ${animal.toString()}`;
		}

		return `Animal List: ${animalsDescriptionList}`;
	}
}
