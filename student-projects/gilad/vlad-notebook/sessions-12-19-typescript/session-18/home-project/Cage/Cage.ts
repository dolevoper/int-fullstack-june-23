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

		this.setSlots(4);
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

	setSlots(slots: number) {
		this.slots = slots;
	}

	getName() {
		return this.name;
	}

	getAnimalsList() {
		return this.animalsList;
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
		return this.cleanlinessBar.getValue() <= this.cleanlinessBar.getAlertValue()
			? true
			: false;
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
}
