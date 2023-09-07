class NeedBar {
	private name: string;
	private minValue: number;
	private maxValue: number;
	private value: number;
	private alertValue: number;
	private listenerAlertReached: Function;

	constructor(
		name: string,
		minValue: number,
		maxValue: number,
		startValue?: number,
		alertValue?: number,
		listenerAlertValueReached?: Function
	) {
		this.name = name;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.alertValue = alertValue ? alertValue : 0;
		this.setValue(startValue ? startValue : 0);
		this.setAlertValueListener(listenerAlertValueReached);
	}

	private normalizeBarValue(amount: number) {
		amount = Math.floor(amount);

		amount =
			amount > this.maxValue
				? (amount = this.maxValue)
				: amount < this.minValue
				? (amount = this.minValue)
				: (amount = amount);

		return amount;
	}

	setValue(amount: number) {
		this.value = this.normalizeBarValue(amount);
		if (this.value <= this.alertValue) this.callAlertListener();
	}

	setFull() {
		this.setValue(100);
	}

	setEmpty() {
		this.setValue(0);
	}

	addValue(amount: number) {
		this.setValue(this.getValue() + amount);
	}

	reduceValue(amount: number) {
		this.setValue(this.getValue() - amount);
	}

	setAlertValueListener(listener: Function | undefined) {
		if (listener) this.listenerAlertReached = listener;
	}

	callAlertListener() {
		this.listenerAlertReached(this.value);
	}

	getName() {
		return this.name + " bar";
	}

	getValue() {
		return this.value;
	}

	getAlertValue() {
		return this.alertValue;
	}

	getStatus() {
		return `${this.getName()} is currently ${this.getValue} out of ${
			this.maxValue
		}`;
	}

	isAlertingValue() {
		return this.getValue() <= this.getAlertValue() ? true : false;
	}
}

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

const camel = new AnimalType("Camel", dietHerbivore, "grunt");
const bear = new AnimalType("Bear", dietCarnivore, "growl");

class Animal {
	private birthId: number;
	private name: string;
	private gender: Gender;
	private type: AnimalType;
	private hunger: NeedBar;
	private hydration: NeedBar;
	private happiness: NeedBar;

	constructor(id: number, name: string, gender: Gender, type: AnimalType) {
		this.name = name;
		this.gender = gender;
		this.type = type;

		this.hunger = new NeedBar("hunger", 0, 100, 100, 25, this.hungryAlert);
		this.hydration = new NeedBar(
			"hydration",
			0,
			100,
			100,
			50,
			this.thirstyAlert
		);
		this.happiness = new NeedBar("happiness", 0, 4, 4, 2, this.sadAlert);
	}

	getBirthID() {
		return this.birthId;
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

	getSound() {
		this.getType().getSound();
	}

	isHungry() {
		return this.getHungerBar().isAlertingValue();
	}

	isThirsty() {
		return this.getHydrationBar().isAlertingValue();
	}

	isSad() {
		return this.getHappinessBar().isAlertingValue();
	}

	isHappy() {
		return !this.isSad();
	}

	eat(food: Food, amount?: number) {
		if (!this.getType().getDiet().canEat(food)) {
			this.announce(
				` can't eat ${food.name}, he's a ${this.getType().getName()}!`
			);
		}

		if (amount) {
			this.getHungerBar().addValue(amount);
			this.announce(` eaten ${amount} food!`);
		} else {
			this.getHungerBar().setFull();
			this.announce(` drinked until hydration!`);
		}
	}

	drink(amount?: number) {
		if (amount) {
			this.getHydrationBar().addValue(amount);
			this.announce(` drinked ${amount} water!`);
		} else {
			this.getHydrationBar().setFull();
			this.announce(` drinked until hydration!`);
		}
	}

	addHappiness(amount?: number) {
		if (amount) {
			this.getHappinessBar().addValue(amount);
			this.announce(` is now happier by ${amount}!`);
		} else {
			this.getHappinessBar().setFull();
			this.announce(` is now fully happy!`);
		}
	}

	reduceHappiness(amount?: number) {
		if (amount) {
			this.getHappinessBar().reduceValue(amount);
			this.announce(` is now sadder by ${amount}!`);
		} else {
			this.getHappinessBar().setEmpty();
			this.announce(` is now fully sad!`);
		}
	}

	announce(message: string) {
		console.log(`${this.toString()} + ${message} ${this.getSound()}`);
	}

	toString() {
		return `${this.getGender()} ${this.getType().getName()} - ${this.getName()}`;
	}

	hungryAlert() {
		console.log(`${this.type.getName()} - ${this.name} is hungry!`);
	}

	thirstyAlert() {
		console.log(`${this.type.getName()} - ${this.name} is thirsty!`);
	}

	sadAlert() {
		console.log(`${this.type.getName()} - ${this.name} is sad!`);
	}
}

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

enum Biome {
	grassland,
	dessert,
	antartica,
	jungle,
	forest,
}

class Cage {
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
		const animalsList = this.getAnimals();

		for (const animal of animalsList) {
			animal.eat(food);
		}
	}

	feedHungryAniamsl(food: Food) {
		const hungryAnimalsList = this.getAnimalsList().getAnimalsByHungry();

		for (const animal of hungryAnimalsList) {
			animal.eat(food);
		}
	}

	addHappinessAllAnimals() {
		for (const animal of this.getAnimals()) {
			animal.reduceHappiness(-1);
		}
	}
}

function zoo() {
	const animalA = new Animal(0, "Yulia", Gender.Female, camel);
	const animalB = new Animal(0, "Vlad", Gender.Male, bear);

	console.log(animalA.getName());
}

zoo();
