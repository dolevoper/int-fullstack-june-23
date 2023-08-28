import * as Templates from "./screen-templates.js";

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

const userExitKey = undefined;
const difficulties = initDifficulties();

gameLoop();
alert(Templates.messageExit);

function gameLoop() {
  let gameDifficulty = difficulties[0];

  do {
    switch (screenMainMenu()) {
      case "1":
      case "play":
        playGame(gameDifficulty);
        break;

      case "2":
      case "difficulty":
        gameDifficulty = screenDifficulty();
        break;

      case "3":
      case "rules":
        screenRules();
        break;

      case "4":
      case "exit":
        return;
    }
  } while (true);
}

function initDifficulties() {
  return [
    new Difficulty("easy", 1, 10, 4),
    new Difficulty("medium", 2, 10, 3),
    new Difficulty("hard", 3, 100, 6),
    new Difficulty("expert", 4, 100, 4),
    new Difficulty("impossible", 5, 1000, 6),
    new Difficulty("houdini", 6, 1000, 1),
  ];
}

function playGame(gameDifficulty: Difficulty) {
  const magicNumber = generateMagicNumber(1, gameDifficulty.maxRange);
  let houdiniTip = Templates.hintDefault;
  let gameResult = "LOSE";

  console.clear();
  console.log(`Shh.. the generated number is: ${magicNumber}`);

  for (let guesses = gameDifficulty.maxGuesses; guesses > 0; guesses--) {
    const playerGuess = screenGuess(houdiniTip, guesses, gameDifficulty);

    if (playerGuess === userExitKey) {
      return userExitKey;
    } else if (playerGuess === magicNumber) {
      gameResult = "WIN";
      break;
    } else {
      houdiniTip = `${playerGuess} ${
        playerGuess > magicNumber
          ? Templates.hintGuessAbove
          : Templates.hintGuessBelow
      }`;
    }
  }
  const endScreenMessage =
    gameResult === "WIN" ? Templates.messageGameWon : Templates.messageGameLost;

  alert(endScreenMessage);
}

function screenMainMenu() {
  return promptMenu(Templates.messageGameMenu, true);
}

function screenDifficulty() {
  let screenHint = "";

  do {
    const menu = formatDifficultyMenu(screenHint, difficulties);
    const menuResult = promptMenu(menu, true);

    if (isExitKey(menuResult)) {
      return userExitKey;
    } else {
      screenHint = `No such difficulty: ${menuResult}`;

      for (const difficulty of difficulties) {
        if (
          menuResult === difficulty.name ||
          Number(menuResult) === difficulty.level
        ) {
          return difficulty;
        }
      }
    }
  } while (true);
}

function screenGuess(
  guessTip: string,
  guessesLeft: number,
  difficulty: Difficulty
) {
  let screenHint = guessTip;

  do {
    const screen = formatGameScreen(screenHint, guessesLeft, difficulty);
    const userInput = promptMenu(screen, true);
    if (isExitKey(userInput)) {
      return userExitKey;
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

function screenRules() {
  confirm(Templates.messageGameRules);
}

function promptMenu(menu: string, repeatOnEmptyResult: boolean) {
  do {
    const userInputRaw = prompt(menu);
    const userInput = userInputRaw?.trim().toLowerCase();

    if (isExitKey(userInput)) {
      return userExitKey;
    }
    if (repeatOnEmptyResult && userInput === "") {
      continue;
    } else return userInput;
  } while (true);
}

function formatDifficultyMenu(hint: string, difficulties: Difficulty[]) {
  let difficultyMenu = `==============💪 Choose Difficulty 💪==============\n`;

  difficulties.forEach((difficulty) => {
    difficultyMenu += `${difficulty.level}) ${difficulty.name}  -   ${difficulty.maxRange} numbers  -   ${difficulty.maxGuesses} numbers\n`;
  });

  difficultyMenu += `\n${hint ? `⚠ ${hint}` : ""}`;

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

${hint ? `🧙‍♂️ Houdini says: "${hint}"` : ""}
`;
}

function generateMagicNumber(minRange: number, maxRange: number) {
  return Math.floor(Math.random() * maxRange + minRange);
}

function isExitKey(input: string) {
  return input === userExitKey ? true : false;
}
