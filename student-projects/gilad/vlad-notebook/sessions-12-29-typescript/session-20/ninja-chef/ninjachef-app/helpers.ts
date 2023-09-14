export function log(tag: string, message: string) {
	console.log(`${tag} | ${message}`);
}

export function random(minimum: number, maximum: number): number {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
export function randomBoolean() {
	const random = Math.floor(Math.random() * 2) + 1;
	return random === 1 ? false : true;
}
