export class List<T extends Object> extends Array<T> {
	private name: string;

	constructor(name?: string) {
		super();

		this.name = name ? name : "";
	}

	getName(): string {
		return !this.name ? "" : this.name + " ";
	}

	add(item: T) {
		if (item) this.push(item);
		// console.log(`${item.toString()} added to list ${this.getName()}`);
	}

	getAllByPropertyValue(
		property: string,
		value: any,
		listName?: string
	): List<T> | undefined {
		let convertedElement: any = this[0];

		if (!convertedElement.hasOwnProperty(property)) {
			`property ${property} is not a property of this type}`;
			return undefined;
		}

		const elementListByTypeValue: List<T> = new List<T>(
			listName ? listName : this.name
		);

		for (const element of this) {
			convertedElement = element;
			if (convertedElement[property] === value)
				elementListByTypeValue.add(element);
		}

		return elementListByTypeValue;
	}

	getAllByMethodValue(
		method: string,
		value: any,
		listName?: string
	): List<T> | undefined {
		const elementListByMethodValue: List<T> = new List(
			listName ? listName : this.name
		);

		if (this.length === 0) return elementListByMethodValue;

		let convertedElement: any = this[0];
		if (typeof convertedElement[method] !== "function") {
			console.log(`method ${method} is not a function of this type}`);
			return undefined;
		}

		for (const element of this) {
			convertedElement = element;
			if (convertedElement[method]() === value) {
				elementListByMethodValue.add(element);
			}
		}

		return elementListByMethodValue;
	}

	callMethodAll(
		method: string,
		listName?: string,
		...args: any
	): List<{ item: T; result: any }> | undefined {
		const methodResultsList = new List<{ item: T; result: any }>(
			listName ? listName : this.name
		);
		if (this.length === 0) return methodResultsList;

		let convertedElement: any = this[0];
		if (typeof convertedElement[method] !== "function") {
			console.log(`method ${method} is not a function of this type}`);
			return undefined;
		}

		for (const element of this) {
			convertedElement = element;
			methodResultsList.add({
				item: element,
				result: convertedElement[method](...args),
			});
		}

		return methodResultsList;
	}

	toString(): string {
		let itemsDescriptionText: string = `${this.getName()}List -`;

		for (let i = 0; i < this.length; i++) {
			itemsDescriptionText += `\n${i}) ${this[i]}`;
		}
		return itemsDescriptionText;
	}
}

export function hasProperty<T extends Object>(item: T, property: string) {
	return item.hasOwnProperty(property);
}
