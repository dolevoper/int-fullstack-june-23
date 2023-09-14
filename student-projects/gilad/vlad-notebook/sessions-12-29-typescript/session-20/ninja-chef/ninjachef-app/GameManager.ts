export class GameManager {
	private score!: number;
	private level!: number;

	constructor() {
		this.resetScore();
		this.resetLevels();
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

	public nextLevel() {
		this.level++;
	}

	public resetLevels() {
		this.level = 0;
	}

	public getLevel(): number {
		return this.level;
	}
}
