// =================================
// let counter = 0;

// function increaseCounter() {
//     counter++;
//     updateValueElement();
// }

// function decreaseCounter() {
//     counter--;
//     updateValueElement();
// }
// =================================
// const counter = {
//     value: 0,
//     increase() {
//         counter.value++;
//         updateValueElement();
//     },
//     decrease() {
//         counter.value--;
//         updateValueElement();
//     }
// };
// =================================
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

counter1.increase();

console.log(counter1.value, counter2.value);

counter2.increase();

console.log(counter1.value, counter2.value);
// =================================