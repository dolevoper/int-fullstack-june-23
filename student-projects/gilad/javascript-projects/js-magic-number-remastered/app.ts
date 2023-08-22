import * as Templates  from './screen-templates.js';

const difficultyEasy = "easy";
const rangeEasy = 10;
const totalGuessesEasy = 1;

const difficultyHard = "hard";
const rangeHard = 100;
const totalGuessesHard = 3;

const difficultyImpossible = "impossible";
const rangeImpossible = 1000;
const totalGuessesImpossible = 6;


alert(Templates.messageGameStart);

const canStartGame = confirm(Templates.messageGameRules);

if (!canStartGame) {
    alert(Templates.messageExit);

} else {
    const gameDifficulty = promptDifficulty(Templates.generateDifficultyMenu(rangeEasy, rangeHard, rangeImpossible));
    
    if (gameDifficulty === "exit") {
        alert(Templates.messageExit);

    } else {
        const gameRange =   (gameDifficulty === difficultyEasy ) ? rangeEasy :
                            (gameDifficulty === difficultyHard ) ? rangeHard : rangeImpossible;

        const guessesTotal =    (gameDifficulty === difficultyEasy ) ? totalGuessesEasy :
                                (gameDifficulty === difficultyHard ) ? totalGuessesHard : totalGuessesImpossible;

        const magicNumber = (Math.random() * gameRange) + 1;

        let houdiniTip = "An old trick well done is far better than a new trick with no effect.";
        let isGameWon = false;
        
        for (let guessesLeft = guessesTotal; guessesLeft > 0; guessesLeft--) {
            
            const currentGuess = promptGuess(houdiniTip, gameDifficulty, guessesLeft, guessesTotal, gameRange);

            if (currentGuess === magicNumber) {
                isGameWon = true;
                break;
            } else {
                houdiniTip = (currentGuess > magicNumber) ? Templates.messageGuessAbove : Templates.messageGuessBelow;
            }
        }

        alert(isGameWon ? Templates.messageGameWon : Templates.messageGameLost);

    }               
}


function promptDifficulty(message: string) {
    do {
        const userInput = prompt(message)?.trim().toLowerCase();
        
        switch (userInput) {
            case null:
                return "exit";

            case "":
                alert("Difficulty can't be empty.")
                break;

            case "1": case difficultyEasy:
                return "easy";

            case "2": case difficultyHard:
                return "hard";

            case "3": case difficultyImpossible:
                return "impossible";
            
            default:
                alert(`No such difficulty.`);
                break;
        }  

    } while (true);
}
 
function promptGuess(guessTip: string, gameDifficulty: string, guessesLeft: number, guessesTotal: number , gameRange: number) {

    let screenHint = guessTip;

    do {
        const screen = Templates.generateGameScreen(gameDifficulty, guessesLeft, guessesTotal, gameRange, screenHint);
        const userInput = prompt(screen);

        if (userInput === null) {
            alert(Templates.messageExit);
        } else {
            const userGuess = Number(userInput);

            const guessEvaluation =     isNaN(userGuess) ? Templates.messageNotNumber :
                                        !Number.isInteger(userGuess) ? Templates.messageNotWhole :
                                        (userGuess < 1 || userGuess > gameRange) ? Templates.messageNotInRange : "valid";
            
            if (guessEvaluation !== "valid") {
                screenHint = `${userGuess} ${guessEvaluation}`;
            }
            else {
                return userGuess;
            }
        }

    } while (true);
}
