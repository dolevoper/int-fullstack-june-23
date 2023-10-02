/*
------------------- GAME "LOOP" LOGIC:
    Game Opening:
    [] Greet player
    [] Explain player the game instructions
    [] Ask player if he wants to start
        [] IF player accepted:
            [] continue to game setting.
        [] ELSE player declined game, *exit game*


    Game Setting:
    [] Prompt player for difficulty, showing him possible difficulties.

    [] Validate player's inputted difficulty value:
        [] IF input is NOT empty AND player NOT pressed cancel:
            [] lowercase difficulty value to avoid case sensetivity.
            [] trim any whitespaces.    
            [] Check what difficulty inputted by player.
                [] IF difficulty is valid option:
                    [] Set the magic number range according to difficulty. // used ternary 
                    [] continue to game initialization.
                [] ELSE no such difficulty, explain why and *exit game*.

        [] ELSE difficulty input is invalid, explain why and *exit game*.
    


    Game Initialization:
    [] Generate a random number according to player's difficulty selection.


    Game Start:
    [] print 'Start Game' message
    
    [] repeat 3 times (without loops!):
        [] Prompt player for a guessed number.

        [] Check the inputted guessed number:
            [] IF player NOT pressed cancel: 
                [] Validate inputted guessed number - is number, is wholenumber, is in range,
                    and lastly check if guessed number is RIGHT or WRONG:
                            [] IF guessed number is invalid or WRONG
                                [] IF guessed WRONG:
                                    [] Show if guessed number above or below magic number
                                [] ELSE:
                                    [] Show failure reason
                                [] continue to next guess
                            [] ELSE guessed number is valid and NOT wrong, it means we WON! :):
                                SHOW WIN MESSAGE WITH NUMBER OF ATTEMPTS.
            [] ELSE player pressed cancel, explain why and *exit game*.
    
    [] Exit the Game
            
------------------- EXERCISE KEY TARGETS:

[x] 1. Generate a random whole number between 1 and 10. Prompt the user to guess it. Show the appropriate message if the user was able/not able to guess.
[x] 2. Validate the numbers (is a number, whole, in the secret's range)
[x] 3. If the user guessed wrong, tell him if his guess was higher or lower than the secret number.
[x] 4. Ask the user for difficulty level before starting:
   - Easy - secret number between 1 and 10
   - Hard - secret number between 1 and 100
   - Impossible - secret number between 1 and 1000
   - Don't forget to adjust the validation
[x] 5. Accept the following answers for difficulty: easy, Easy, 1, EaSy, haRd, harD, 2, 3, IMPOSSIBLE etc...
[x] 6. Trailing spaces in difficulty level should be ignored (" eASy ")
[x] 7. Give the user 3 guesses (don't use `let`/`var`)
[x] 8. If during any guess, the user hits "cancel", stop the game immediately.

*/

//============================================================================================= Game inits

/* Difficulty Ranges */

const difficultyEasy = "easy";
const difficultyHard = "hard";
const difficultyImpossible = "impossible";

const rangeEasy = 10;
const rangeHard = 100;
const rangeImpossible = 1000;
const rangeMin = 1;
const rangeInvalid = -1;

/* Message Templates */

// Game start messages
// [ ] TODO - Redesign.

const msgGameOpening = `Welcome to \"Magic Number\" game!`;
const msgGameInstructions = `
Game Instructions:

    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Blanditiis quas officia laudantium quasi in ad amet.
    Quae dignissimos officia rem explicabo exercitationem
    similique atque laudantium.

Are you ready?
`;
const msgGameDifficultySelect = `
==========================================
|                                Please enter game difficulty:                         |
|                                 1) Easy             -         ${rangeEasy}                                |
|                                 2) Hard            -         ${rangeHard}                              |
|                                 3) Impossible   -         ${rangeImpossible}                           |
==========================================
`;


// Guessing messages
// [ ] TODO - Redesign.

const msgGuessScreenHeadStart = `\n======== Difficulty:`;
const msgGuessScreenHeadMid = `- Guess:`; 
const msgGuessScreenHeadEnd = `/ 3 ========`
const msgGuessScreenBody =`
              Please guess the magic number between
                                      1 - `;


// Guess messages

const msgGameWon = "SUCCESS! You have guessed the magic number"
const msgGameOver = "GAME OVER! You're out of guesses, better luck next time!"

const msgGuessWrong = "                                     STRIKE!\n                       Your guess is incorrect!";
const msgGuessNotNumber = "                                     STRIKE!\n                       Your guess is not a number!";
const msgGuessNotWhole = "                                     STRIKE!\n                Your guess is not a whole number!";
const msgGuessNotRange = "                                     STRIKE!\n                       Your guess is not in range!";

// Misc messages
const msgPlayerExitGame = "You chose to exit the game.";



//============================================================================================= Game Logic Start 

console.log("showing game intro message");
alert(msgGameOpening);

console.log("Showing game instructions");
const isPlayerStartedGame = confirm(msgGameInstructions);

if (isPlayerStartedGame) {
    console.log("player has started the game, prompting for game difficulty");

//============================================================================================= Difficulty Selection & Range asignment

    // Prompting for game difficulty
    const gameDifficultyRaw = prompt(msgGameDifficultySelect);
    console.log(`Raw difficuly input: ${gameDifficultyRaw}`);

    // Check if difficulty value is NOT empty AND player did NOT pressed cancel
    if (gameDifficultyRaw !== null) {

        if (gameDifficultyRaw !== "") {

            // lowercasing & trimming whitespaces
            const gameDifficultyFormatted = gameDifficultyRaw.toLocaleLowerCase().trim();
            console.log(`Formatted raw difficuly input: ${gameDifficultyFormatted}`);
            
            /*
                Using nested ternary expressions.
                
                If difficulty entered as a number, convert it to the appropriate text name. for 
                This could have been avoided, comparing entered difficulty both with text & number
                in the same row, but it rather allows us the convenience of code readability and
                displaying game difficulty as text in future menus.
            */
           const gameDifficulty =  (gameDifficultyFormatted === "1") ? difficultyEasy :
                                    (gameDifficultyFormatted === "2") ? difficultyHard :
                                    (gameDifficultyFormatted === "3") ? difficultyImpossible :
                                    gameDifficultyFormatted;
                                    
            console.log(`Final game difficulty value is: ${gameDifficulty}`);
                                    /*
                Using nested ternary expressions.

                Choose the magic number range according to chosen difficulty.
                If magicRange is assigned with `rangeInvalid`, that means the chosen difficulty
                does not match with any of the available difficulty options.
            */
            const magicRange =  (gameDifficulty === difficultyEasy) ? rangeEasy : 
                                (gameDifficulty === difficultyHard) ? rangeHard :
                                (gameDifficulty === difficultyImpossible) ? rangeImpossible :
                                rangeInvalid; 

            console.log(`Magic range is set to: ${magicRange}`);

//============================================================================================= Random magic number generation

            if (magicRange !== rangeInvalid) {

                /*
                    We generate a random number between a range of min & max - *inclusive*

                    Math.random gives us a random decimal number between 0 - 1.
                    To make the max and min values inclusive, 
                    we scale the random value to our desired max of range and add 
                    the min as an offset:
                            (Math.random() * max) + min
                    Because we want to recieve a whole number (an integer), we floor the 
                    generated result:
                            Math.floor( (Math.random() * max) + min )

                */

                console.log(`Generating a random magic number between the range 1 - ${magicRange}`);

                const magicNumber = Math.floor( (Math.random() * magicRange) + rangeMin );

                console.log(`The generated magic number is... ${magicNumber} ! :)`);

//============================================================================================= Number Guessing
//============================================================================================= FIRST GUESS
                console.log("Prompting for first guess");

                // Prompt player for first guess, cast inputted string to a number.
                const playerInput = prompt(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 1 ${msgGuessScreenHeadEnd} ${msgGuessScreenBody} ${magicRange}`);
                console.log(`First input is: ${playerInput}`);

                if (playerInput !== null) {
                    const playerGuess = Number(playerInput);
                    // Validate guessed value - if is a number , if a whole number and if in secret's range.
                    // At the end, check if guess is right or wrong!
                    const guessResult = (isNaN(playerGuess)) ? msgGuessNotNumber :
                                        (!Number.isInteger(playerGuess)) ? msgGuessNotWhole :
                                        ((playerGuess < 1) || (playerGuess > magicRange)) ? msgGuessNotRange :
                                        (playerGuess !== magicNumber) ? msgGuessWrong : "WIN";

                    // Continue only if the player did not win OR chose to exit the game
                    if (guessResult !== "WIN") {

                        // Used ternary to check if failure reason is due to wrong guess, and wether to print "ABOVE" or "BELOW" hint.
                        // If reason is not wrong guess, assign an empty value to avoid printing. 
                        const hint = (guessResult === msgGuessWrong) ? 
                                        `Your guess ${playerGuess} is ${(playerGuess > magicNumber) ? "ABOVE" : 
                                                                                                         "BELOW" } the magic number!` : "";

                        // Print failure reason with game header
                        alert(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 1 ${msgGuessScreenHeadEnd}\n${guessResult}\n${hint}`);
//============================================================================================= SECOND GUESS

                        console.log("Prompting for second guess")

                        // Prompt player for second guess, cast inputted string to a number.
                        const playerInput = prompt(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 2 ${msgGuessScreenHeadEnd} ${msgGuessScreenBody} ${magicRange}`);
                        console.log(`Second input is: ${playerInput}`);

                        if (playerInput !== null) {
                            const playerGuess = Number(playerInput);
                            const guessResult = 
                                                (isNaN(playerGuess)) ? msgGuessNotNumber :
                                                (!Number.isInteger(playerGuess)) ? msgGuessNotWhole :
                                                ((playerGuess < 1) || (playerGuess > magicRange)) ? msgGuessNotRange :
                                                (playerGuess !== magicNumber) ?  msgGuessWrong : "WIN";

                            if (guessResult !== "WIN") {

                                const hint = (guessResult === msgGuessWrong) ? 
                                                    `Your guess ${playerGuess} is ${(playerGuess > magicNumber) ? "ABOVE" : 
                                                                                                                 "BELOW" } the magic number!` : "";

                                // Print failure reason with game header
                                alert(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 2 ${msgGuessScreenHeadEnd}\n${guessResult}\n${hint}`);

//============================================================================================= Third Guess

                                console.log("Prompting for third guess")

                                // Prompt player for third guess, cast inputted string to a number.
                                const playerInput = prompt(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 3 ${msgGuessScreenHeadEnd} ${msgGuessScreenBody} ${magicRange}`);
                                console.log(`Third input is: ${playerInput}`);

                                if (playerInput !== null) {
                                    const playerGuess = Number(playerInput);
                                    const guessResult = 
                                                        (isNaN(playerGuess)) ? msgGuessNotNumber :
                                                        (!Number.isInteger(playerGuess)) ? msgGuessNotWhole :
                                                        ((playerGuess < 1) || (playerGuess > magicRange)) ? msgGuessNotRange :
                                                        (playerGuess !== magicNumber) ?  msgGuessWrong : "WIN";
                
                                    if (guessResult !== "WIN") {
                                        // Print failure reason with game header
                                        alert(`${msgGuessScreenHeadStart} ${gameDifficulty} ${msgGuessScreenHeadMid} 3 ${msgGuessScreenHeadEnd}\n${guessResult}`);
                                        // This is the last attempt, therefore not winning means GAME OVER.
                                        alert(msgGameOver);
                                        
//============================================================================================= GAME GUESSING WIN CASES & EXIT CASES
                                    } else { // THIRD GUESS WIN
                                        console.log("player won after third attempt");
                                        alert(`${msgGameWon} on your third attempt in ${gameDifficulty} difficlty!\n Clucth!`)
                                    }
                                } else {
                                    alert(msgPlayerExitGame);
                                }
                            } else { // SECOND GUESS WIN
                                console.log("player won after second attempt");
                                alert(`${msgGameWon} on your second attempt in ${gameDifficulty} difficlty!\n Impressive!`)
                            }
                        } else {
                            alert(msgPlayerExitGame);
                        }
                    } else { // FIRST GUESS WIN
                        console.log("player won after first attemp");
                        alert(`${msgGameWon} on your first attempt in ${gameDifficulty} difficlty!\n WOW!`)
                    }
                } else {
                    alert(msgPlayerExitGame);
                }

//============================================================================================= GAME MENU EXIT CASES

            } else {
                alert(`Entered difficulty ${gameDifficulty} is not an available option.`);
            }
        } else {
            alert("Difficulty can not be empty.")
        }
    } else {
        alert(msgPlayerExitGame);
    }
}

console.log("exiting game");
alert("Exiting Game.")


