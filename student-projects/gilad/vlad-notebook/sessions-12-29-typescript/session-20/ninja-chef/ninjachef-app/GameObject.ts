import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";
import { Rectangle } from "./Rectangle.js";

export class GameObject {
	protected screen: GameScreen;
	public view: HTMLElement;
	public hitbox: Rectangle;
	public position: Point;

	public id: number;
	public name: string;
	public imageUrl: string;

	constructor(
		id: number,
		name: string,
		view: HTMLElement,
		imageUrl: string,
		screen: GameScreen
	) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;

		this.view = view;
		this.hitbox = new Rectangle(view.getBoundingClientRect());
		this.position = new Point(this.hitbox.x, this.hitbox.y);

		this.screen = screen;
	}

	public initialise() {}

	public update(gameTime: number) {}

	public draw() {}

	protected moveParabaloic(
		object: Point,
		startPoint: Point,
		endPoint: Point,
		vertexY: number,
		speed: number,
		time: number
	) {
		const width = endPoint.x - startPoint.x;
		const height = startPoint.y - vertexY;

		const k = height;
		const h = startPoint.x + width / 2;

		const stretch = k / Math.pow(width / 2, 2);

		object.x += speed * time;
		object.y = k + stretch * Math.pow(object.x - h, 2);
	}

	protected moveSinusWave(
		offset: number,
		amplitude: number,
		fullCycleInSeconds: number,
		time: number,
		timeoffset: number
	): number {
		const frequency = 6 * fullCycleInSeconds;
		return offset + amplitude * Math.sin(frequency * time + timeoffset);
	}
}
