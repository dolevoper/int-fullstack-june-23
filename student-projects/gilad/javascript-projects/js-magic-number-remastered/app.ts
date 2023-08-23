import * as Templates from "./screen-templates.js";

const userExitKey = undefined;

class Difficulty {
  name: string;
  level: number;
  maxRange: number;
  maxGuesses: number;

  constructor(
    name: string,
    level: number,
    maxRange: number,
    maxGuesses: number
  ) {
    this.name = name;
    this.level = level;
    this.maxRange = maxRange;
    this.maxGuesses = maxGuesses;
  }
}

main();

function main() {
  let shouldRepeatGame: boolean;
  const difficulties = initDifficulties();

  alert(Templates.messageGameStart);

  if (!confirm(Templates.messageGameRules)) {
    alert(Templates.messageExit);
    return false;
  }

  do {
    shouldRepeatGame = false;

    const gameDifficulty = promptDifficulty(difficulties);

    if (gameDifficulty === userExitKey) {
      break;
    }

    const gameResult = playGame(gameDifficulty);

    if (gameResult === userExitKey) {
      break;
    } else {
      const endScreenMessage =
        gameResult === "WIN"
          ? Templates.messageGameWon
          : Templates.messageGameLost;

      alert(endScreenMessage);
    }
    shouldRepeatGame = confirm(Templates.messageRepeatGame);
  } while (shouldRepeatGame);

  alert(Templates.messageExit);
}

function playGame(gameDifficulty) {
  let houdiniTip =
    "An old trick well done is far better than a new trick with no effect";
  const magicNumber = generateMagicNumber(1, gameDifficulty.maxRange);
  console.log(magicNumber);
  for (let guesses = gameDifficulty.maxGuesses; guesses > 0; guesses--) {
    const playerGuess = promptGuess(houdiniTip, guesses, gameDifficulty);

    if (playerGuess === userExitKey) {
      return userExitKey;
    } else if (playerGuess === magicNumber) {
      return "WIN";
    } else {
      houdiniTip = `${playerGuess} ${
        playerGuess > magicNumber
          ? Templates.hintGuessAbove
          : Templates.hintGuessBelow
      }`;
    }
  }
  return "LOSE";
}

function initDifficulties() {
  const difficultyEasy = new Difficulty("easy", 1, 10, 3);
  const difficultyHard = new Difficulty("hard", 2, 100, 6);
  const difficultyImpossible = new Difficulty("impossible", 3, 1000, 9);

  const difficulties = [];
  difficulties.push(difficultyEasy);
  difficulties.push(difficultyHard);
  difficulties.push(difficultyImpossible);

  return difficulties;
}

function promptDifficulty(difficulties: Difficulty[]) {
  let screenHint = "";

  do {
    const promptMessage = formatDifficultyMenu(screenHint, difficulties);
    const userInputRaw = prompt(promptMessage);
    const userInput = userInputRaw?.trim().toLowerCase();

    if (userInput === userExitKey) {
      return userExitKey;
    } else if (userInput === "") {
      screenHint = "";
    } else {
      for (const difficulty of difficulties) {
        if (
          userInput === difficulty.name ||
          Number(userInput) === difficulty.level
        ) {
          return difficulty;
        }
      }
      screenHint = `No such difficulty: ${userInput}`;
    }
  } while (true);
}

function generateMagicNumber(minRange: number, maxRange: number) {
  return Math.floor(Math.random() * maxRange + minRange);
}

function promptGuess(
  guessTip: string,
  guessesLeft: number,
  difficulty: Difficulty
) {
  let screenHint = guessTip;

  do {
    const screen = formatGameScreen(screenHint, guessesLeft, difficulty);
    const userInput = prompt(screen)?.trim();

    if (userInput === userExitKey) {
      return userExitKey;
    } else if (userInput === "") {
      screenHint = Templates.hintGuessEmpty;
    } else {
      const userGuess = Number(userInput);

      const guessEvaluation = isNaN(userGuess)
        ? Templates.hintNotNumber
        : !Number.isInteger(userGuess)
        ? `${userGuess} ${Templates.hintNotWhole}`
        : userGuess < 1 || userGuess > difficulty.maxRange
        ? `${userGuess} ${Templates.hintNotInRange}`
        : "valid";

      if (guessEvaluation === "valid") {
        return userGuess;
      } else {
        screenHint = guessEvaluation;
      }
    }
  } while (true);
}

function formatDifficultyMenu(hint: string, difficulties: Difficulty[]) {
  let difficultyMenu = `==========================================\nPlease enter game difficulty:\n`;

  difficulties.forEach((difficulty) => {
    difficultyMenu += `${difficulty.level}) ${difficulty.name}  -   ${difficulty.maxRange} numbers\n`;
  });

  difficultyMenu += `==========================================\n${hint}`;

  return difficultyMenu;
}

function formatGameScreen(
  hint: string,
  guessesLeft: number,
  difficulty: Difficulty
) {
  return `======== Difficulty: ${difficulty.name} | Guesses: ${guessesLeft} / ${
    difficulty.maxGuesses
  } ========

                    Guess the magic number between
                                        1 - ${difficulty.maxRange}

${hint ? `Houdini says: "${hint}"` : ""}
`;
}
