import { foodList } from "./AnimalDiet.js";
import { Gender, camel, bear } from "./AnimalType.js";
import { Animal } from "./Animal.js";
import { Cage, Biome } from "./Cage.js";

function zoo() {
	const animalA = new Animal(0, "Yulia", Gender.Female, camel);
	const animalB = new Animal(1, "Vlad", Gender.Male, bear);

	animalA.eat(foodList[2]); // eat meat

	const cage = new Cage("Camels", Biome.dessert);
	cage.addAnimal(animalA);
	cage.addAnimal(animalB);

	console.log(cage.getAnimals());
	cage.feedAllAnimals(foodList[1]); // feed carrot

	const animalVlad = cage.getAnimalsList().getAnimalByName("Vlad");
	console.log(animalVlad);
}

zoo();
