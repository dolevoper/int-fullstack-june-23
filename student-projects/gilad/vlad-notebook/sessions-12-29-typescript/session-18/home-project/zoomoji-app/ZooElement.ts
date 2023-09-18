import { UIObject } from "./UIManager";

class ZooElement extends HTMLElement implements UIObject {
	private width!: number;
	private heigt!: number;

	constructor() {
		super();
	}
	declareElement(): void {
		throw new Error("Method not implemented.");
	}

	updateBoundaries() {
		const boundaries = this.getBoundingClientRect();
		if (
			screen.orientation.type === "portrait-primary" ||
			window.innerWidth < window.innerHeight
		) {
			this.width = boundaries.height;
			this.heigt = boundaries.width;
		} else {
			this.width = boundaries.width;
			this.heigt = boundaries.height;
		}
	}

	updateUI(): void {
		this.updateBoundaries();
	}
}
window.customElements.define("zoo-element", ZooElement);
