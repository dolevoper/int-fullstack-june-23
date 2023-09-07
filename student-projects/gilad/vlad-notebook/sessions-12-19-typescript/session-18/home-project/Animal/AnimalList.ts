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

	// TODO - Implement a remove method.
}
