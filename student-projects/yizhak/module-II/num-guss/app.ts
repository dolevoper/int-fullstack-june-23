
alert("Let's play a game")

alert("Let's play a game");


const secretnum = Math.floor(Math.random() * 10) + 1;
const number = Number(prompt("Guess a number from 1 to 10:"));

//valid the secret's range
if (number < 1 || number > 10 || isNaN(number)) {

    alert("Please enter a valid number between 1 and 10.");
}

// valid the number (is a number, whole)
if (number === null){
    alert("please enter a valid number between 1 and 10");

  alert("Please enter a valid number between 1 and 10.");
}

// valid the number (is a number, whole)
if (number === null) {
  alert("please enter a valid number between 1 and 10");

}

//check the geuss
if (secretnum === number) {
<
    alert("Wow you guessed the right number")
} else if (number < secretnum) {
    alert("Too low. Try Again!")
} else {
    alert("Too high. Try Again!")

=======
  alert("Wow you guessed the right number");
} else if (number < secretnum) {
  alert("Too low. Try Again!");
} else {
  alert("Too high. Try Again!");
}

