class Counter {
  private _value = 0;

  constructor(private counterElement: HTMLElement, private storageKey: string) {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue !== null) {
        this._value = parseInt(storedValue, 10);
        this.updateValueElement();
    }
  }

  get value() {
    return this._value;
  }

  bindEvents() {
    this.counterElement
      .querySelector(".btn-increase")
      ?.addEventListener("click", this.increase.bind(this));
    this.counterElement
      .querySelector(".btn-double")
      ?.addEventListener("click", this.double.bind(this));
    this.counterElement
      .querySelector(".btn-divide")
      ?.addEventListener("click", this.divide.bind(this));
    this.counterElement
      .querySelector(".btn-decrease")
      ?.addEventListener("click", this.decrease.bind(this));
  }

  increase() {
    this._value++;
    this.updateValueElement();
    this.saveToStorage();
  }

  double() {
    this._value *= 2;
    this.updateValueElement();
    this.saveToStorage();
  }

  divide() {
    this._value /= 2;
    this.updateValueElement();
    this.saveToStorage();
  }

  decrease() {
    this._value--;
    this.updateValueElement();
    this.saveToStorage();
  }

  private updateValueElement() {
    const valueElement = this.counterElement.querySelector(".value");

    if (!valueElement) {
      return;
    }

    valueElement.textContent = this._value.toString();
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, this._value.toString());
  }
}

const counter1 = new Counter(document.getElementById("counter1")!, "counter1Value");
counter1.bindEvents();

const counter2 = new Counter(document.getElementById("counter2")!, "counter2Value");
counter2.bindEvents();
