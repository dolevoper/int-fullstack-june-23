const valueElement = document.getElementById("value");

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

    get value() {
        return this._value;
    }

    public increase() {
        this._value++;
        updateValueElement();
    }

    public decrease() {
        this._value--;
        updateValueElement();
    }

    public doble() {
        this._value *= 2;
        updateValueElement();
    }

    public divide() {
        this._value /= 2;
        updateValueElement();
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increase();

console.log(counter1.value, counter2.value);

counter2.increase();

console.log(counter1.value, counter2.value);
// =================================
document.getElementById("doble")?.addEventListener("click", function () {
    counter1.doble();
})
document.getElementById("btn-increase")?.addEventListener("click", counter1.increase.bind(counter1));

document.getElementById("divide")?.addEventListener("click", function () {
     counter1.divide();
})

document.getElementById("btn-decrease")?.addEventListener("click", function () {
    counter1.decrease();
});

function updateValueElement() {
    if (!valueElement) {
        return;
    }

    valueElement.textContent = `${counter1.value}`;
}
