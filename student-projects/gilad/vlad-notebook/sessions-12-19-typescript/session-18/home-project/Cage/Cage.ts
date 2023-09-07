enum Biome {
	grassland,
	dessert,
	antartica,
	jungle,
	forst,
}

class Cage {
	private name: string;
	private animalsList: AnimalList;

	private level: number;
	private biome: Biome;
	private slots: number;

	private cleanliness: NeedBar;

	constructor(name: string) {
		this.name = name;
	}

	setLevel(level: number) {
		this.level = level;
	}

	setBiome(biome: Biome) {
		this.biome = biome;
	}

	setSlots(slots: number) {
		this.slots = slots;
	}
}
