let chosenWord = prompt("please choose a word");

while (Number(chosenWord) || chosenWord === "") {
  chosenWord = prompt("please choose a WORD");
}

function toHalfCharCount(chosenWord) {
  return Math.floor((chosenWord.trim().length) / 2)
}

console.log(toHalfCharCount);

const isPalindrome = chosenWord.charAt(toHalfCharCount(chosenWord) - 1) === chosenWord.charAt(chosenWord.length-(toHalfCharCount(chosenWord)));

alert('Is the word/phrase: "' + chosenWord + '"\na palindrome?\n' + isPalindrome)