import { GameType } from "./GameObjectInterface";

export enum Diets {
	Herbivore = 0,
	Carnivore = 1,
	Omnivore = 2,
	Fishivore = 3,
}

export class Food implements GameType {
	constructor(public name: string, private animalDiet: AnimalDiet) {
		this.name = name;
		this.animalDiet = animalDiet;
	}
	getTypeName(): string {
		return "food";
	}
	getName(): string {
		return this.name;
	}

	getDietAnimal() {
		return this.animalDiet;
	}
	getDietName(): string {
		return this.animalDiet.getName();
	}

	toString(): string {
		return `${this.name}`;
	}
}

export class AnimalDiet implements GameType {
	constructor(public diet: Diets) {
		this.diet = diet;
	}
	getTypeName(): string {
		return "animaldiet";
	}
	getDietName(): string {
		return this.getName();
	}

	getName() {
		return Diets[this.diet];
	}

	getDiet() {
		return this.diet;
	}

	canEat(food: Food) {
		if (this.getDiet() === Diets.Omnivore) return true;
		return this.diet === food.getDietAnimal().getDiet() ? true : false;
	}
}

export const dietHerbivore = new AnimalDiet(Diets.Herbivore);
export const dietCarnivore = new AnimalDiet(Diets.Carnivore);
export const dietOmnivore = new AnimalDiet(Diets.Omnivore);
export const dietFishivore = new AnimalDiet(Diets.Fishivore);

export const foodList = [
	new Food("Apple", dietHerbivore),
	new Food("Carrot", dietHerbivore),
	new Food("Banana", dietHerbivore),
	new Food("Berries", dietHerbivore),
	new Food("Lettuce", dietHerbivore),
	new Food("Peanuts", dietHerbivore),
	new Food("Tomato", dietHerbivore),
	new Food("Watermelon", dietHerbivore),

	new Food("Meat", dietCarnivore),
	new Food("Bacon", dietCarnivore),
	new Food("Chicken", dietCarnivore),
	new Food("Steak", dietCarnivore),

	new Food("Fish", dietFishivore),
	new Food("Cuttlefish", dietFishivore),
	new Food("Shrimp", dietFishivore),

	new Food("Hamburger", dietOmnivore),
	new Food("Bubble-Tea", dietOmnivore),
	new Food("Pizza", dietOmnivore),
	new Food("Cookie", dietOmnivore),
];
