export interface GameObject {
	onDayPassed(): void;
	announce(message: string): void;
}
