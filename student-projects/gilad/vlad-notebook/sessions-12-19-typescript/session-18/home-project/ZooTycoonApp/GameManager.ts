export class GameManager {
	private daysPassed: number;

	constructor() {
		this.daysPassed = 1;
	}

	public nextDay() {
		this.daysPassed++;
		alert(`Another day passed, current day: ${this.daysPassed}`);
	}

	public skipDays(daysToSkip: number) {
		for (let i = 0; i < daysToSkip; i++) {
			this.nextDay();
		}
	}

	public getCurrentDay() {
		return this.daysPassed;
	}
}
