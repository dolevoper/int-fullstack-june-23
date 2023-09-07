enum Gender {
	Female,
	Male,
}

class AnimalType {
	constructor(
		private name: string,
		private animalDiet: AnimalDiet,
		private sound: string
	) {
		this.name = name;
		this.animalDiet = animalDiet;
		this.sound = sound;
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

	isAgressive() {
		return this.animalDiet.diet === Diets.Herbivore ? false : false;
	}
}

const animalTypesList = [
	new AnimalType("Camel", dietHerbivore, "grunt"),
	new AnimalType("Bear", dietCarnivore, "growl"),
];
