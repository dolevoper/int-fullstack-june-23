import { Rectangle } from "./Rectangle.js";

export class GameObject {
	public view: HTMLElement;
	public hitbox: Rectangle;

	constructor(view: HTMLElement) {
		this.view = view;
		this.hitbox = new Rectangle(view.getBoundingClientRect());
	}
}
