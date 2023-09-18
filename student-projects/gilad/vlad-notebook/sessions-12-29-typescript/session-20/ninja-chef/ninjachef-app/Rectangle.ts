import { Point } from "./Point.js";

export enum RectangleSide {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT,
}

export class Rectangle extends DOMRectReadOnly {
	readonly center;

	readonly topLeft;
	readonly topRight;
	readonly bottomLeft;
	readonly bottomRight;

	constructor(domRectangle: DOMRect) {
		super(
			domRectangle.x,
			domRectangle.y,
			domRectangle.width,
			domRectangle.height
		);

		this.topLeft = new Point(domRectangle.left, domRectangle.top);
		this.topRight = new Point(domRectangle.right, domRectangle.top);

		this.bottomLeft = new Point(domRectangle.left, domRectangle.bottom);
		this.bottomRight = new Point(domRectangle.right, domRectangle.bottom);

		this.center = Rectangle.getCenterOfRectangle(this);
	}

	public contains(point: Point): boolean {
		return (
			this.topLeft.x <= point.x &&
			point.x <= this.bottomRight.x &&
			this.topLeft.y <= point.y &&
			point.y <= this.bottomRight.y
		);
	}

	static getCenterOfRectangle(rectangle: Rectangle): Point {
		const xMiddle = Point.getMiddleOfLine(
			rectangle.topLeft,
			rectangle.topRight
		);
		const yMiddle = Point.getMiddleOfLine(
			rectangle.topLeft,
			rectangle.bottomLeft
		);

		return new Point(xMiddle.x, yMiddle.y);
	}
}
