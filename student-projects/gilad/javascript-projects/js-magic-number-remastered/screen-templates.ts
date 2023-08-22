
export const messageExit = "Exiting Game.";

export const messageGuessEmpty = "Did you even guess?";
export const messageNotNumber = "That is not a number!";
export const messageNotWhole = " is not a whole number!";
export const messageNotInRange = "is out of range!";

export const messageGuessAbove = "is above the magic number";
export const messageGuessBelow = "is below the magic number";

export const messageGameWon = "WIN! You outsmared Houdini!";
export const messageGameLost = "GAME OVER! Houdini outsmared you, again.";


export const messageGameStart = `
====================================
                Welcome to Magic Number Game!
====================================
`;

export const messageGameRules = `                                         • Game Rules •
1. Pick a range of numbers.
2. Houdini will magically pick a number between this range.
3. You'll have to guess which number it is!
4. Each attempt, Houdini will guide you with hot / cold hints.
5. You'll only have limited guesses, so choose your numbers wisely!

================= Are you ready? =================
`;

export function generateDifficultyMenu(hint: string, rangeEasy: number, rangeHard: number, rangeImpossible: number) {
return `
==========================================
|                                Please enter game difficulty:                         |
|                                 1) Easy             -         ${rangeEasy}                               |
|                                 2) Hard            -         ${rangeHard}                             |
|                                 3) Impossible   -         ${rangeImpossible}                           |
==========================================
${hint}
`;}

export function generateGameScreen(gameDifficulty: string, guessesLeft: number, guessesTotal: number , gameRange: number, houdiniHint: string) {
return `======== Difficulty: ${gameDifficulty} | Guesses: ${guessesLeft} / ${guessesTotal} ========

                         Guess the magic number between
                                             1 - ${gameRange}

${ houdiniHint === "" ? "" : `Houdini says: "${houdiniHint}"` }
`;}
