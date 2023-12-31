export class NeedBar {
	private name: string;
	private minValue: number;
	private maxValue: number;
	private value!: number;
	private alertValue: number;
	private listenerAlertReached!: Function;

	constructor(
		name: string,
		minValue: number,
		maxValue: number,
		startValue?: number,
		alertValue?: number,
		listenerAlertValueReached?: Function
	) {
		this.name = name;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.alertValue = alertValue ? alertValue : 0;
		this.setValue(startValue ? startValue : 0);
		this.setAlertValueListener(listenerAlertValueReached);
	}

	private normalizeBarValue(amount: number) {
		amount = Math.floor(amount);

		amount =
			amount > this.maxValue
				? (amount = this.maxValue)
				: amount < this.minValue
				? (amount = this.minValue)
				: (amount = amount);

		return amount;
	}

	setValue(amount: number) {
		this.value = this.normalizeBarValue(amount);
		if (this.isAlertingValue()) this.callAlertListener();
	}

	setAlertValue(amount: number) {
		if (amount < this.getValue() || amount > this.getValue()) return;

		this.alertValue = amount;
		if (this.isAlertingValue()) this.callAlertListener();
	}

	setFull() {
		this.setValue(100);
	}

	setEmpty() {
		this.setValue(0);
	}

	addValue(amount: number) {
		this.setValue(this.getValue() + amount);
	}

	reduceValue(amount: number) {
		this.setValue(this.getValue() - amount);
	}

	setAlertValueListener(listener: Function | undefined) {
		if (listener) this.listenerAlertReached = listener;
	}

	callAlertListener() {
		if (this.listenerAlertReached) this.listenerAlertReached(this.getValue());
	}

	getName() {
		return this.name + " bar";
	}

	getValue() {
		return this.value;
	}

	getAlertValue() {
		return this.alertValue;
	}

	isFull() {
		return this.getValue() === this.maxValue;
	}

	isEmpty() {
		return this.getValue() === this.minValue;
	}

	getStatus() {
		return `${this.getName()} is currently ${this.getValue} out of ${
			this.maxValue
		}`;
	}

	getMaxValue() {
		return this.maxValue;
	}

	getMinValue() {
		return this.minValue;
	}

	isAlertingValue() {
		return this.getValue() <= this.getAlertValue();
	}
}
