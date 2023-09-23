export function saveData(key: string, value: string) {
	localStorage.setItem(key, value);
}

export function getData(key: string): String | null {
	return localStorage.getItem(key);
}
