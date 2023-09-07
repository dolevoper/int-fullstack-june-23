class Animal {
	private hunger: NeedBar;
	private hydration: NeedBar;
	private happiness: NeedBar;

	constructor(
		private name: string,
		private gender: Gender,
		private type: AnimalType
	) {
		this.name = name;
		this.gender = gender;
		this.type = type;

		this.hunger = new NeedBar("hunger", 0, 100, 100, 25, this.hungry);
		this.hydration = new NeedBar("hydration", 0, 100, 100, 50, this.thirsty);
		this.happiness = new NeedBar("happiness", 0, 4, 4, 2, this.sad);
	}

	hungry() {
		console.log(`${this.type.getName()} - ${this.name} is hungry!`);
	}

	thirsty() {
		console.log(`${this.type.getName()} - ${this.name} is thirsty!`);
	}

	sad() {
		console.log(`${this.type.getName()} - ${this.name} is sad!`);
	}

	getName() {
		return this.name;
	}

	getGender() {
		return this.gender;
	}

	getType() {
		return this.type;
	}

	getHungerBar() {
		return this.hunger;
	}

	getHydrationBar() {
		return this.hydration;
	}

	getHappinessBar() {
		return this.happiness;
	}

	toString() {
		return `${this.getGender()} ${this.getType().getName()} - ${this.getName()}`;
	}
}
