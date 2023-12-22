export class Point {
	constructor(public x: number, public y: number) {}

	public distanceFrom(x: number, y: number): number {
		return Point.distance(this, new Point(x, y));
	}

	public getMiddleBetween(x: number, y: number) {
		return Point.getMiddleOfLine(this, new Point(x, y));
	}

	static getMiddleOfLine(pointA: Point, pointB: Point): Point {
		const xMiddle = (pointA.x + pointB.x) / 2;
		const yMiddle = (pointA.y + pointB.y) / 2;

		return new Point(xMiddle, yMiddle);
	}

	static distance(pointA: Point, pointB: Point): number {
		return Math.abs(
			Math.sqrt(
				Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
			)
		);
	}
}
