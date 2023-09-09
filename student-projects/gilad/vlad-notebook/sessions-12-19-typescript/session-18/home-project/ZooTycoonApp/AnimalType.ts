import { Diets, AnimalDiet } from "./AnimalDiet.js";

export enum Gender {
	Female,
	Male,
}

export class AnimalType {
	constructor(
		private name: string,
		private animalDiet: AnimalDiet,
		private sound: string,
		private emoji: string
	) {
		this.name = name;
		this.animalDiet = animalDiet;
		this.sound = sound;
		this.emoji = emoji;
	}

	getName() {
		return this.name;
	}

	getDiet() {
		return this.animalDiet;
	}

	getSound() {
		return this.sound;
	}

	getEmoji() {
		return this.emoji;
	}

	isAgressive() {
		return this.animalDiet.diet === Diets.Herbivore ? false : false;
	}
}

export const dietHerbivore = new AnimalDiet(Diets.Herbivore);
export const dietCarnivore = new AnimalDiet(Diets.Carnivore);
export const dietOmnivore = new AnimalDiet(Diets.Omnivore);

export const camel = new AnimalType("Camel", dietHerbivore, "grunt", "🐫");
export const bear = new AnimalType("Bear", dietCarnivore, "growl", "🐻");
export const human = new AnimalType("Human", dietOmnivore, "hello", "🧑");
