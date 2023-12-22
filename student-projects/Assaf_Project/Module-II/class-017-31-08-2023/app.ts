const stopSignal = -9999;

let currentNumber = Number(prompt(`Please enter a number (enter ${stopSignal} to finish)`));
let min = Infinity;
let secondMin = Infinity;

while (currentNumber !== stopSignal) {
    if (currentNumber < secondMin && currentNumber > min) {
        secondMin = currentNumber;
    } else if (currentNumber < min) {
        secondMin = min;
        min = currentNumber;
    }

    currentNumber = Number(prompt(`Please enter a number (enter ${stopSignal} to finish)`));
}

alert(`The smallest number entered was: ${min}`);
