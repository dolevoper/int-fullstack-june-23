enum Diets {
	Herbivore = 0,
	Carnivore = 1,
	Omnivore = 2,
}

class Food {
	constructor(public name: string, public diet: Diets) {
		this.name = name;
		this.diet = diet;
	}
}

const foodList = [
	new Food("Apple", Diets.Herbivore),
	new Food("Carrot", Diets.Herbivore),
	new Food("Meat", Diets.Carnivore),
	new Food("Fish", Diets.Carnivore),
	new Food("Dry Food", Diets.Omnivore),
];

function getFoodFromList(name: string) {
	return foodList.find((food) => food.name === name);
}

class AnimalDiet {
	constructor(public diet: Diets) {
		this.diet = diet;
	}

	getName() {
		return Diets[this.diet];
	}

	getDietId() {
		return this.diet;
	}

	canEat(food: Food) {
		return this.diet === food.diet ? true : false;
	}
}

const dietHerbivore = new AnimalDiet(Diets.Herbivore);
const dietCarnivore = new AnimalDiet(Diets.Carnivore);
