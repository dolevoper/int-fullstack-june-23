const lowerBoundary = 999;
const upperBoundary = 9999;
const rawSecretCode =
  Math.floor(Math.random() * (upperBoundary - lowerBoundary)) + lowerBoundary;
const secretCode = rawSecretCode === 999 ? "0000" : rawSecretCode.toString();

const guess = prompt("Please enter your guess:")?.trim();

if (guess === secretCode) {
  alert("Congratulations! You won!");
} else if (guess === null) {
  alert("Bye bye!");
} else if (guess === "0000") {
  hitsCheck(guess);
} else {
  const guessAsNumber = Number(guess);

  if (
    isNaN(guessAsNumber) ||
    !Number.isInteger(guessAsNumber) ||
    guessAsNumber < lowerBoundary + 1 ||
    guessAsNumber > upperBoundary
  ) {
    alert("Please enter a valid guess!");
  } else {
    hitsCheck(guess);
  }
}

function hitsCheck(guess: string) {
  const firstDigit = secretCode.charAt(0) === guess.charAt(0) ? "🟢" : "🔴";
  const secondDigit = secretCode.charAt(1) === guess.charAt(1) ? "🟢" : "🔴";
  const thirdDigit = secretCode.charAt(2) === guess.charAt(2) ? "🟢" : "🔴";
  const fourthDigit = secretCode.charAt(3) === guess.charAt(3) ? "🟢" : "🔴";

  alert(
    "This was not the secret code, here are your hits:\n\n" +
      firstDigit +
      secondDigit +
      thirdDigit +
      fourthDigit
  );
}
