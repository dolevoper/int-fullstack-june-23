// const numberToRead = Number(prompt("How many numbers whould you like to sum?"));

// i = i + 1
// i += 1
// i++

// i = i + 2
// i += 2
// i++++        ❌❌❌

// i = i * 2
// i *= 2

// i -= 5
// i /= 3

// for (initializer; condition; increment)

// 1. Print the iteration number with the message in the alert
// 2. Ask the user how many hellos to print
const hellos_num = Number(prompt('how many hellos to print?'))
for (let i = 1; i <= hellos_num ; i++) {
    alert("hello! " +'number ' + i);
}
// initializer          (i = 0)
// check condition      (i < 3 === 0 < 3 === true)
// run block
// run increment        (i = 1)
// check condition      (i < 3 === 1 < 3 === true)
// run block
// run increment        (i = 2)
// check condition      (i < 3 === 2 < 3 === true)
// run block
// run increment        (i = 3)
// check condition      (i < 3 === 3 < 3 === false)

// !null === true
// !"" === true
// 3. Ask the user for his age - exit only if he's 18 or above
// 4. Validate the input - if not a number/clicked cancel: show message and ask again
let input = prompt("Tell me when to stop");
while (!input || input.trim().toLowerCase() !== "stop") {
    input = prompt("Tell me when to stop");
}

alert("end");

// alert(firstNumber + secondNumber + thirdNumber);