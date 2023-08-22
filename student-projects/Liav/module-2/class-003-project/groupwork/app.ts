const numerToRead = Number(prompt("How many number you want to sum?"));


let sum = 0;

for(let i = 1; i === numerToRead; i++){
    let insideLoop = Number(prompt(`Enter ${i} Number: `));
    sum += insideLoop;
}


// 3. Ask the user for his age - exit only if he's 18 or above
// 4. Validate the input - if not a number/clicked cancel: show message and ask again
let input = Number(prompt("Tell me what your age"));
while () {
    
}