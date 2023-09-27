interface Serializable {
	STORAGE_KEY: string;
	save(): number;
	load(): number;
	delete(): void;
}

class SerializableList<T> extends Array<T> implements Serializable {
	STORAGE_KEY: string;

	constructor(storageKey: string, arrayLength?: number) {
		super(arrayLength ?? 0);

		this.STORAGE_KEY = storageKey;
	}

	save(): number {
		if (this.length === 0) return -1;

		const serializedSelf = JSON.stringify(this);
		localStorage.setItem(this.STORAGE_KEY, serializedSelf);

		return 1;
	}

	load(): number {
		const loadedItems = localStorage.getItem(this.STORAGE_KEY);
		if (!loadedItems) return -1;

		const parsedItems: this = JSON.parse(loadedItems);
		parsedItems.forEach((element) => {
			this.push(element);
		});
		return 1;
	}

	delete(): void {
		localStorage.removeItem(this.STORAGE_KEY);
	}
}
