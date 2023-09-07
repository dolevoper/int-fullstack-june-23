class NeedBar {
	public name: string;
	private value: number;
	private alertValue: number;
	private listenerAlertReached: Function;

	constructor(
		name: string,
		startValue?: number,
		alertValue?: number,
		listenerAlertValueReached?: Function
	) {
		this.name = name;
		this.alertValue = alertValue ? alertValue : 0;
		this.setValue(startValue ? startValue : 0);
		this.setAlertValueListener(listenerAlertValueReached);
	}

	private normalizeBarValue(amount: number) {
		amount = Math.floor(amount);

		amount =
			amount > 100
				? (amount = 100)
				: amount < 0
				? (amount = 0)
				: (amount = amount);

		return amount;
	}

	setValue(amount: number) {
		this.value = this.normalizeBarValue(amount);
		if (this.value <= this.alertValue) this.callAlertListener();
	}

	setFull() {
		this.setValue(100);
	}

	setEmpty() {
		this.setValue(0);
	}

	setAlertValueListener(listener: Function | undefined) {
		if (listener) this.listenerAlertReached = listener;
	}

	callAlertListener() {
		this.listenerAlertReached(this.value);
	}
}
