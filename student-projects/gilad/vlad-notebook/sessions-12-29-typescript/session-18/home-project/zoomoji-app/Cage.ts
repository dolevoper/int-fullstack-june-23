import { AnimalDiet, Food } from "./AnimalDiet.js";
import { NeedBar } from "./NeedBar.js";
import { Animal } from "./Animal.js";
import { AnimalList } from "./AnimalList.js";
import { GameObject, GameType } from "./GameObjectInterface.js";
import { List } from "./List.js";

export class Biome implements GameType {
	constructor(public name: string) {}
	getTypeName(): string {
		return "biome";
	}
	getDietName(): string {
		return "";
	}
	getName(): string {
		return this.name;
	}
}

export const biomesList = new List<Biome>("biomes");

biomesList.add(new Biome("grassland"));
biomesList.add(new Biome("dessert"));
biomesList.add(new Biome("tundra"));
biomesList.add(new Biome("forest"));
biomesList.add(new Biome("mudland"));

export class Cage implements GameObject {
	private name: string;
	private animalsList: AnimalList;

	private biome!: Biome;

	private cleanlinessBar: NeedBar;
	private foodTray: NeedBar;
	private waterTray: NeedBar;

	constructor(name: string, startBiome?: Biome) {
		this.name = name;

		this.setBiome(startBiome ? startBiome : biomesList[0]);
		this.cleanlinessBar = new NeedBar(
			"cleanliness",
			0,
			2,
			2,
			1,
			this.dirtyCageAlert
		);
		this.foodTray = new NeedBar("food tray", 0, 4, 5, 0, this.noFoodAlert);
		this.waterTray = new NeedBar("water tray", 0, 4, 5, 0, this.noWaterAlert);

		this.animalsList = new AnimalList();
	}
	getDiet(): AnimalDiet | undefined {
		return undefined;
	}

	addAnimal(animal: Animal) {
		this.animalsList.add(animal);
	}

	setBiome(biome: Biome) {
		this.biome = biome;
	}

	getName() {
		return this.name;
	}

	getAnimals() {
		return this.animalsList;
	}

	getBiome() {
		return this.biome;
	}

	getCleanlinessBar() {
		return this.cleanlinessBar;
	}

	getFoodBar() {
		return this.foodTray;
	}

	getWaterBar() {
		return this.waterTray;
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
		this.announce(`Feeding all animals with ${food.name}`);
		this.getAnimals().feedAllAnimals(food);
	}

	feedHungryAnimals(food: Food) {
		this.announce(`Feeding HUNGRY animals with ${food.name}`);
		this.getAnimals().feedHungryAnimals(food);
	}

	waterAllAnimals() {
		this.announce(`Watering all animals`);
		this.getAnimals().waterAllAnimals();
	}

	waterThirstyAnimals() {
		this.announce(`Watering THIRSTY animals`);
		this.getAnimals().waterThirstyAnimals();
	}

	makeAllAnimalsSad() {
		this.getAnimals().makeSadAll();
	}
	addHappinessToAllAnimals() {
		this.getAnimals().addHappinessAll(1);
	}

	redceHappinessToAllAnimals() {
		this.getAnimals().reduceHappinessAll(1);
	}

	announce(message: string) {
		console.log(`${this.toString()} | ${message}`);
	}

	containingAnimalsToString() {
		return `${this.toString()} - ${this.getAnimals().toString()}`;
	}

	toString() {
		return `Cage ${this.getName()}`;
	}

	onDayPassed(): undefined {
		this.announce("cleanliness reduced by 1");
		this.getCleanlinessBar().reduceValue(1);
	}
}
