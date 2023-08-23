import * as Templates from "./screen-templates.js";

const userExitKey = undefined;

const difficultyEasy = "easy";
const rangeEasy = 10;
const totalGuessesEasy = 3;

const difficultyHard = "hard";
const rangeHard = 100;
const totalGuessesHard = 6;

const difficultyImpossible = "impossible";
const rangeImpossible = 1000;
const totalGuessesImpossible = 9;

alert(Templates.messageGameStart);

const canStartGame = confirm(Templates.messageGameRules);

if (!canStartGame) {
  alert(Templates.messageExit);
} else {
  const gameDifficulty = promptDifficulty();

  if (gameDifficulty === "exit") {
    alert(Templates.messageExit);
  } else {
    const gameRange =
      gameDifficulty === difficultyEasy
        ? rangeEasy
        : gameDifficulty === difficultyHard
        ? rangeHard
        : rangeImpossible;

    const guessesTotal =
      gameDifficulty === difficultyEasy
        ? totalGuessesEasy
        : gameDifficulty === difficultyHard
        ? totalGuessesHard
        : totalGuessesImpossible;

    const magicNumber = Math.random() * gameRange + 1;

    let houdiniTip =
      "An old trick well done is far better than a new trick with no effect";
    let isGameWon = false;
    let guessesLeft = guessesTotal;
    for (; guessesLeft > 0; guessesLeft--) {
      const currentGuess = promptGuess(
        houdiniTip,
        gameDifficulty,
        guessesLeft,
        guessesTotal,
        gameRange
      );

      if (currentGuess === userExitKey) {
        break;
      } else if (currentGuess === magicNumber) {
        isGameWon = true;
        break;
      } else {
        houdiniTip = `${currentGuess} ${
          currentGuess > magicNumber
            ? Templates.messageGuessAbove
            : Templates.messageGuessBelow
        }`;
      }
    }

    const endScreenMessage = isGameWon
      ? Templates.messageGameWon
      : guessesLeft === 0
      ? Templates.messageGameLost
      : Templates.messageExit;
    alert(endScreenMessage);
  }
}

function promptDifficulty() {
  let screenHint = "";
  do {
    const userInputRaw = prompt(
      Templates.generateDifficultyMenu(
        screenHint,
        rangeEasy,
        rangeHard,
        rangeImpossible
      )
    );
    const userInput = userInputRaw?.trim().toLowerCase();

    switch (userInput) {
      case userExitKey:
        return "exit";

      case "":
        screenHint = "Difficulty can't be empty.";
        break;

      case "1":
      case difficultyEasy:
        return "easy";

      case "2":
      case difficultyHard:
        return "hard";

      case "3":
      case difficultyImpossible:
        return "impossible";

      default:
        screenHint = `No such difficulty: ${userInput}`;
        break;
    }
  } while (true);
}

function promptGuess(
  guessTip: string,
  gameDifficulty: string,
  guessesLeft: number,
  guessesTotal: number,
  gameRange: number
) {
  let screenHint = guessTip;

  do {
    const screen = Templates.generateGameScreen(
      gameDifficulty,
      guessesLeft,
      guessesTotal,
      gameRange,
      screenHint
    );
    const userInput = prompt(screen)?.trim();
    if (userInput === userExitKey) {
      return userExitKey;
    } else if (userInput === "") {
      screenHint = Templates.messageGuessEmpty;
    } else {
      const userGuess = Number(userInput);

      const guessEvaluation = isNaN(userGuess)
        ? Templates.messageNotNumber
        : !Number.isInteger(userGuess)
        ? `${userGuess} ${Templates.messageNotWhole}`
        : userGuess < 1 || userGuess > gameRange
        ? `${userGuess} ${Templates.messageNotInRange}`
        : "valid";

      if (guessEvaluation === "valid") {
        return userGuess;
      } else {
        screenHint = guessEvaluation;
      }
    }
  } while (true);
}
