const numberOfGuesses=Number(prompt("How Many Guesses do you whant?"));


alert("guess a number from 1 to 100");

for (let i= 0; i<numberOfGuesses; i++){
    alert("try again");
}

let input = prompt("what the number I thinking about?");
while (!input || input.trim().toLowerCase() !=="77") {
    input = prompt ("not the mumber, try again");
}

alert("good job");


