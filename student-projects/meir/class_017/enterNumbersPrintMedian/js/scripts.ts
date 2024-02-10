/*
## Median

2. Write a program that reads an arbitrary amount of numbers from the user and prints the median
*/
const numOfTimeLoop = 5;
var myNumbers: number[] = [];

for (let i = 0; i < numOfTimeLoop; i++) {
    const myPromptNums = Number(prompt("Enter numbers to array", ""));
    myNumbers.push(myPromptNums);
}

disp(myNumbers);

function disp(arrayNums: number[]) {

    arrayNums.sort((a, b) => a - b);

    const midpoint = Math.floor(arrayNums.length / 2);
    let median = 0;

    if (arrayNums.length % 2 === 0) {
        alert("zugi");
        median = (arrayNums[midpoint - 1] + arrayNums[midpoint]) / 2
    } else {
        alert("e zugi");
        median = arrayNums[midpoint];
    }

    alert("The median is:\n" + median);

}
