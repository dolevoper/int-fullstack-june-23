console.log("connected");

let wordToGuess;

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const wordsDB = ["table", "pasta", "gilim"];

////
const handleSubmit = (ev) => {
  ev.preventDefault();

  const wordToCheck = (ev.target.word.value).toLowerCase();
  console.log(wordToCheck.length);
  if (!wordToCheck) {
    alert("Please enter a word!");
    return;
  } else if (wordToCheck.length != 5) {
    alert("please enter 5 letters word");
    return;
  }

  checkWord(wordToCheck)
};

const onLoad = () => {
    getRandomWord();
    addLettersToScreen();
}
////

const getRandomWord = () => {
  wordToGuess = wordsDB[getRandomArbitrary(0, wordsDB.length - 1)];
  console.log(wordToGuess);
};

const addLettersToScreen = () => {
  const letterList = document.querySelector("#letterList");
  let html = "";
  letters.forEach((letter) => {
    html += `<p>${letter}</p>`;
  });

  letterList?.innerHTML = html;
};

const checkWord = (word) => {
    const lettersEntered = word.split('')
    const chosenWord = wordToGuess.split('')

    for(let i = 0; i < lettersEntered.length; i++) {
        if (lettersEntered[i] === chosenWord[i]) {
            console.log(`Match! ${lettersEntered[i]}`)
            addWordGuessedToScreen(lettersEntered[i], "green")
        }
        else {
            console.log(`No Match! ${lettersEntered[i]}`)
            if (wordToGuess.includes(lettersEntered[i])) {
                console.log("yellow")
                addWordGuessedToScreen(lettersEntered[i], "yellow")
            } else {
                console.log("red")
                addWordGuessedToScreen(lettersEntered[i], "red")
            }
        }
    }
}

function addWordGuessedToScreen(letter, className) {
    const guessedWords = document.querySelector("#guessedWords")
    guessedWords?.innerHTML += `<p class="${className}">${letter}</p>`
}

///

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
