import { FoodType } from "./FoodType";

export class FoodElement extends HTMLElement {
	private imageView: HTMLDivElement;

	constructor(food: FoodType) {
		super();

		this.classList.add("food");
		this.classList.add(food.name);
		this.imageView = document.createElement("div") as HTMLDivElement;
		this.imageView.style.background = `url("./assets/food/${food.name}.svg") no-repeat`;
		this.imageView.classList.add("food__img");
		this.imageView.style.backgroundSize = `contain`;
		this.imageView.style.width = `100%`;
		this.imageView.style.height = `100%`;

		this.append(this.imageView);
	}
}
customElements.define("food-object", FoodElement);
