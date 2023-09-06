// assignment #4
// let chosenWord = prompt("please choose a word");

// while (Number(chosenWord) || chosenWord === "") {
//   chosenWord = prompt("please choose a WORD");
// }

// const cleanPhrase = chosenWord.replace(/[ ,.!?;:``'’"']/g, "");

// function toHalfCharCount(cleanPhrase) {
//   return Math.floor(cleanPhrase.trim().length / 2);
// }

// const isPalindrome =
//   cleanPhrase.charAt(toHalfCharCount(cleanPhrase) - 1) ===
//   cleanPhrase.charAt(cleanPhrase.length - toHalfCharCount(cleanPhrase));

// alert(
//   'Is the word / phrase: "' + chosenWord + '"\na palindrome?\n' + isPalindrome
// );

// assignment #5
let chosenWord = prompt("please choose a word");

while (chosenWord === "") {
  chosenWord = prompt("please choose a WORD");
}

const cleanPhrase = chosenWord.replace(/[ ,.!?;:``'’"']/g, "");

function toHalfCharCount(cleanPhrase) {
  return Math.floor(cleanPhrase.trim().length / 2);
}

const isPalindrome =
  cleanPhrase.charAt(toHalfCharCount(cleanPhrase) - 1) ===
  cleanPhrase.charAt(cleanPhrase.length - toHalfCharCount(cleanPhrase));

alert(
  'Is the word/phrase/number: "' +
    chosenWord +
    '"\na palindrome?\n' +
    isPalindrome
);
