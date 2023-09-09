export enum Diets {
	Herbivore = 0,
	Carnivore = 1,
	Omnivore = 2,
}

export class Food {
	constructor(public name: string, public diet: Diets) {
		this.name = name;
		this.diet = diet;
	}

	toString(): string {
		return `${this.name}`;
	}
}

export const foodList = [
	new Food("Apple", Diets.Herbivore),
	new Food("Carrot", Diets.Herbivore),
	new Food("Meat", Diets.Carnivore),
	new Food("Fish", Diets.Carnivore),
	new Food("Dry Food", Diets.Omnivore),
];

function getFoodFromList(name: string) {
	return foodList.find((food) => food.name === name);
}

export class AnimalDiet {
	constructor(public diet: Diets) {
		this.diet = diet;
	}

	getName() {
		return Diets[this.diet];
	}

	getDiet() {
		return this.diet;
	}

	canEat(food: Food) {
		console.log("Can I eat " + food);
		return this.diet === food.diet ? true : false;
	}
}
