import * as Storage from "./Storage.js";

export interface Serializable {
	STORAGE_KEY: string;
	save(): void;
	load(): number;
	delete(): void;
}

export class SerializableList<T> extends Array<T> implements Serializable {
	STORAGE_KEY: string;

	constructor(storageKey: string, arrayLength?: number) {
		super(arrayLength ?? 0);

		this.STORAGE_KEY = storageKey;
	}

	save() {
		if (this.length === 0) return;

		Storage.save<SerializableList<T>>(this.STORAGE_KEY, this);
	}

	load(): number {;

		const loadedList = Storage.load<SerializableList<T>>(this.STORAGE_KEY);
		if(!loadedList) return -1;

		loadedList.forEach((element) => {
			this.push(element);
		});

		return this.length;
	}

	delete(): void {
		Storage.remove(this.STORAGE_KEY)
	}
}
