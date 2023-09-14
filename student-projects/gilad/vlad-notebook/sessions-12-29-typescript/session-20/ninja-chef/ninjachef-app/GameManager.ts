export class GameManager {
	private score: number;

	constructor() {
		this.score = 0;
	}

	public addScore(amount: number) {
		this.score += amount;
	}

	public getScore(): number {
		return this.score;
	}

	public resetScore() {
		this.score = 0;
	}
}
