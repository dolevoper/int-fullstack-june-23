class Counter {
  private _value = 0;

  constructor(private counterElement: HTMLElement) {}

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
      .querySelector(".btn-decrease")
      ?.addEventListener("click", this.decrease.bind(this));
  }

  increase() {
    this._value++;
    this.updateValueElement();
  }

  double() {
    this._value *= 2;
    this.updateValueElement();
  }

  decrease() {
    this._value--;
    this.updateValueElement();
  }

  private updateValueElement() {
    const valueElement = this.counterElement.querySelector(".value");

    if (!valueElement) {
      return;
    }

    valueElement.textContent = this._value.toString();
  }
}

const counter1 = new Counter(document.getElementById("counter1")!);
counter1.bindEvents();

const counter2 = new Counter(document.getElementById("counter2")!);
counter2.bindEvents();