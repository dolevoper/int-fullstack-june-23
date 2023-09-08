import { Food } from "./AnimalDiet.js";
import { NeedBar } from "./NeedBar.js";
import { Animal } from "./Animal.js";
import { AnimalList } from "./AnimalList.js";

export enum Biome {
	grassland,
	dessert,
	antartica,
	jungle,
	forest,
}

export class Cage {
	private name: string;
	private animalsList: AnimalList;

	private biome: Biome;

	private cleanlinessBar: NeedBar;
	private foodBar: NeedBar;
	private waterBar: NeedBar;

	constructor(name: string, startBiome?: Biome) {
		this.name = name;

		this.setBiome(startBiome !== undefined ? startBiome : Biome.grassland);
		this.cleanlinessBar = new NeedBar(
			"cleanliness",
			0,
			2,
			2,
			1,
			this.dirtyCageAlert
		);
		this.foodBar = new NeedBar("food tray", 0, 4, 5, 0, this.noFoodAlert);
		this.waterBar = new NeedBar("water tray", 0, 4, 5, 0, this.noWaterAlert);

		this.animalsList = new AnimalList();
	}

	addAnimal(animal: Animal) {
		this.animalsList.add(animal);
	}

	setBiome(biome: Biome) {
		this.biome = biome;
	}

	getName() {
		return this.name;
	}

	getAnimalsList() {
		return this.animalsList;
	}

	getAnimals() {
		return this.animalsList.getAll();
	}

	getBiome() {
		return this.biome;
	}

	getCleanlinessBar() {
		return this.cleanlinessBar;
	}

	getFoodBar() {
		return this.foodBar;
	}

	getWaterBar() {
		return this.waterBar;
	}

	isDirty() {
		return this.cleanlinessBar.isAlertingValue();
	}

	dirtyCageAlert() {
		console.log(`Cage ${this.getName()} is dirty! `);
	}

	noFoodAlert() {
		console.log(`Cage ${this.getName()} has no food! `);
	}

	noWaterAlert() {
		console.log(`Cage ${this.getName()} has no water! `);
	}

	feedAllAnimals(food: Food) {
		this.announce(`Feeding all animals with ${food.name}`);
		this.getAnimalsList().feedAllAnimals(food);
	}

	feedHungryAnimals(food: Food) {
		this.announce(`Feeding HUNGRY animals with ${food.name}`);
		this.getAnimalsList().feedHungryAnimals(food);
	}

	waterAllAnimals() {
		this.announce(`Watering all animals`);
		this.getAnimalsList().waterAllAnimals();
	}

	waterThirstyAnimals() {
		this.announce(`Watering THIRSTY animals`);
		this.getAnimalsList().waterThirstyAnimals();
	}

	addHappinessToAllAnimals() {
		for (const animal of this.getAnimals()) {
			animal.reduceHappiness(-1);
		}
	}

	announce(message: string) {
		console.log(`${this.toString()} | ${message}`);
	}

	containingAnimalsToString() {
		return `${this.toString()} - ${this.getAnimalsList().toString()}`;
	}

	toString() {
		return `Cage ${this.getName()}`;
	}
}
