export class GameManager {
	private score!: number;
	private lives!: number;
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
		this.level = 1;
	}

	public getLevel(): number {
		return this.level;
	}

	public setLives(amount: number) {
		this.lives = amount;
	}
	public getLives(): number {
		return this.lives;
	}
	public removeHeart(amount: number) {
		this.lives -= amount;
		if (this.lives < 0) this.lives = 0;
	}
}
