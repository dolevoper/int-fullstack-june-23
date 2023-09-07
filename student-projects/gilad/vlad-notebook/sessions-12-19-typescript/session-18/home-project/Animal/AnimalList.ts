class AnimalList {
	private name: string;
	private animals: Animal[];

	constructor(name: string) {
		this.name = name;
	}

	add(animal: Animal) {
		if (animal) this.animals.push(animal);
		console.log(`${animal.toString()} added to the list ${this.name}`);
	}

	getAll() {
		return this.animals;
	}

	getAnimalsByName(name: string) {
		const animalsByName = this.animals.filter(
			(animal) => animal.getName() === name
		);

		return animalsByName;
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
		return this.animals.find((animal) => animal.getBirthID());
	}
}
