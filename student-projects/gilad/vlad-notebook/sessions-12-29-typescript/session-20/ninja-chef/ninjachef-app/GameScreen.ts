import { Point } from "./Point.js";
import { Rectangle } from "./Rectangle.js";

export class GameScreen {
	private view: HTMLElement;
	public boundaries!: Rectangle;

	private mutationObserver!: MutationObserver;

	constructor(screenElement: HTMLElement) {
		this.view = screenElement;
		this.attachMutationObserver();
		this.update();
	}

	public getScreenElement(): HTMLElement {
		return this.view;
	}

	public update() {
		this.boundaries = new Rectangle(this.fetchRectangle());
	}

	public getCenter(): Point {
		return this.boundaries.center;
	}

	public isOutOfScreen(point: Point): boolean {
		return this.boundaries.contains(point);
	}

	private fetchRectangle(): DOMRect {
		return this.view.getBoundingClientRect();
	}

	public closeScreen() {
		this.detachMutationObserver();
	}

	private onScreenChanged(mutations: MutationRecord[]) {
		mutations.forEach((mutation) => {
			this.update();
		});
	}

	private attachMutationObserver() {
		const configuration = { attributes: true };
		this.mutationObserver = new MutationObserver(this.onScreenChanged);
		this.mutationObserver.observe(this.view, configuration);
	}

	private detachMutationObserver() {
		if (this.mutationObserver) this.mutationObserver.disconnect();
	}
}
