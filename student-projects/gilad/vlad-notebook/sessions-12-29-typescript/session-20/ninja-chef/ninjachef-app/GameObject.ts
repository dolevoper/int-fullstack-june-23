import { GameScreen } from "./GameScreen.js";
import { Point } from "./Point.js";
import { Rectangle } from "./Rectangle.js";

export class GameObject {
	protected screen: GameScreen;
	public view!: HTMLElement;
	public hitbox!: Rectangle;
	public position!: Point;

	public id: number;
	public name: string;

	constructor(id: number, name: string, screen: GameScreen) {
		this.id = id;
		this.name = name;

		this.screen = screen;
	}

	public initialise() {}

	public update(gameTime: number) {}

	public draw() {}

	protected setElement(view: HTMLElement) {
		this.view = view;
		this.hitbox = new Rectangle(view.getBoundingClientRect());
		this.position = new Point(this.hitbox.x, this.hitbox.y);
		this.screen.addGameObject(this);
	}

	protected moveParabaloic(
		object: Point,
		startX: number,
		endX: number,
		startY: number,
		vertexY: number,
		speed: number,
		direction: boolean,
		time: number
	) {
		const width = endX - startX;
		const height = startY - vertexY;

		const k = startY - height;
		const h = startX + width / 2;

		const stretch = height / Math.pow(width / 2, 2);
		if (direction) object.x += speed * time;
		else object.x -= speed * time;

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
