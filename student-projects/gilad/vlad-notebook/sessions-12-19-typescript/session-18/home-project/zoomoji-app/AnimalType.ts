import {
	Diets,
	AnimalDiet,
	dietFishivore,
	dietHerbivore,
	dietOmnivore,
	dietCarnivore,
} from "./AnimalDiet.js";
import { List } from "./List.js";

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

export const seal = new AnimalType("Seal", dietFishivore, "bark", "🦭");
export const camel = new AnimalType("Camel", dietHerbivore, "grunt", "🐫");
export const penguin = new AnimalType("Penguin", dietFishivore, "honk", "🐧");
export const human = new AnimalType("Human", dietOmnivore, "hello", "🧑");
export const lizard = new AnimalType("Lizard", dietOmnivore, "hissing", "🦎");

export const alpaca = new AnimalType("Alpaca", dietHerbivore, "snorting", "🦙");
export const zebra = new AnimalType("Zebra", dietHerbivore, "bray", "🦓");

export const tiger = new AnimalType("Tiger", dietCarnivore, "roar", "🐅");

export const rhino = new AnimalType("Rhino", dietHerbivore, "trumpet", "🦏");

export const hippo = new AnimalType("Hippo", dietHerbivore, "honks", "🦛");

export const gorilla = new AnimalType("Gorilla", dietOmnivore, "grunt", "🦍");

export const giraffe = new AnimalType("Giraffe", dietHerbivore, "bleat", "🦒");
export const elephant = new AnimalType(
	"Elephant",
	dietHerbivore,
	"trumpet",
	"🐘"
);

export const animalTypes = new List<AnimalType>("Animal Types");
animalTypes.add(camel);
animalTypes.add(seal);
animalTypes.add(penguin);
animalTypes.add(human);
animalTypes.add(lizard);
animalTypes.add(alpaca);
animalTypes.add(zebra);
animalTypes.add(tiger);
animalTypes.add(rhino);
animalTypes.add(hippo);
animalTypes.add(gorilla);
animalTypes.add(giraffe);
animalTypes.add(elephant);
