import { AnimalDiet } from "./AnimalDiet";

export interface GameObject {
	onDayPassed(): void;
	announce(message: string): void;

	getName(): string;
	getDiet(): AnimalDiet | undefined;
}

export interface GameType {
	getName(): string;
	getDietName(): string;
	getTypeName(): string;
}
