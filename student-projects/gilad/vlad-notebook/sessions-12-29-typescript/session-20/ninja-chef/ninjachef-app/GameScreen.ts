import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

export class GameScreen {
	private view: HTMLElement;
	private rectangle!: Rectangle;

	private mutationObserver!: MutationObserver;

	constructor(screenElement: HTMLElement) {
		this.view = screenElement;
		this.attachMutationObserver();
	}

	public getScreenElement(): HTMLElement {
		return this.view;
	}

	public update() {
		this.rectangle = new Rectangle(this.fetchRectangle());
	}

	// check if point is out of screen, returns at which side
	public isOutOfScreen(point: Point): boolean {
		return this.rectangle.contains(point);
	}

	private fetchRectangle(): DOMRect {
		return this.view.getBoundingClientRect();
	}

	public closeScreen() {
		this.detachMutationObserver();
	}

	private onScreenChanged(mutations: MutationRecord[]) {
		mutations.forEach((mutation) => {
			console.log(mutation);
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
