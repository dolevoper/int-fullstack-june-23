import { Food } from "./Food";

export class FoodType {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

export const foodList = [
	new FoodType("Apple"),
	new FoodType("Carrot"),
	new FoodType("Banana"),
	new FoodType("Berries"),
	new FoodType("Lettuce"),
	new FoodType("Peanuts"),
	new FoodType("Tomato"),
	new FoodType("Watermelon"),
	new FoodType("Meat"),
	new FoodType("Bacon"),
	new FoodType("Chicken"),
	new FoodType("Steak"),
	new FoodType("Fish"),
	new FoodType("Cuttlefish"),
	new FoodType("Shrimp"),
	new FoodType("Hamburger"),
	new FoodType("Bubble-tea"),
	new FoodType("Pizza"),
	new FoodType("Cookie"),
];
