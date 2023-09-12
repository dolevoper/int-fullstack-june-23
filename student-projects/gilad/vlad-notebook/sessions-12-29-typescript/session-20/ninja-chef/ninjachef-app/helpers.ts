export function log(tag: string, message: string) {
	console.log(`${tag} | ${message}`);
}

export function calculateDeltaTime(time: number, previousTime: number): number {
	return time - previousTime;
}
