
// 1. Print the iteration number with the message in the alert
// 2. Ask the user how many hellos to print
let hellosNum: number = 0;

do {
    hellosNum = Number(prompt("How many hellos to print?"));

} while ((isNaN(hellosNum)) || (hellosNum <= 0));

for (let i= 0; i < hellosNum; i++) {
    alert(`hello! x${i+1}`);
}

// 3. Ask the user for his age - exit only if he's 18 or above
// 4. Validate the input - if not a number/clicked cancel: show message and ask again
let input = prompt("Tell me when to stop");
while (!input || input.trim().toLowerCase() !== "stop") {
    input = prompt("Tell me when to stop");
}

alert("end");
