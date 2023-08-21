//define level of difficulty of the game
let lev = prompt('Please choose difficulty level before starting:\n 1. Easy - secret number between 1 and 10.\n 2. Hard - secret number between 1 and 100.\n 3. Impossible - secret number between 1 and 1000.');

if (lev === null) {
    alert('You canceled the game');
    throw new Error('The game was canceled');
}

let cleanLev = lev
    .toLocaleLowerCase()
    .trim();

// console.log(level);
// console.log(cleanLevel, cleanLevel.length);

switch (cleanLev) {
    case '1':
    case 'easy':
        // console.log('easy level');
        guess(10);
        break;
    case '2':
    case 'hard':
        guess(100)
        // console.log('hard level');
        break;
    case '3':
    case 'impossible':
        // console.log('impossible level');
        guess(1000)
        break;
    default:
        // console.log('Default');
        alert('Wrong input')
}

function guess(max) {

    //define quantity of user attempts
    let attempt = Number(prompt("How much tries do you need?"));


    const numberToGuess = Math.floor(Math.random() * max + 1);
    console.log(numberToGuess);

    for (let i = 1; i <= attempt; i += 1) {
        let userInput = prompt(`Your ${i} try:`);
        if (userInput === null) {
            alert('You canceled the game');
            return;
        }

        if (isNaN(+userInput)) {
            alert('You must enter only numbers.');
        }
        if (+userInput === numberToGuess) {
            alert('You win!');
            return;
        }

        if (+userInput <= 0 || +userInput > max) {
            alert('The entered number is out of the range.');
        }
        if (+userInput !== Math.floor(+userInput)) {
            alert('You must enter whole number.');
        }
        if (i < attempt && +userInput < numberToGuess) {
            alert('The entered number is less than the given number.')
        }
        if (i < attempt && +userInput > numberToGuess) {
            alert('The entered number is bigger than the given number.')
        }
        if (i === attempt) {
            alert(`You loose, the number was ${numberToGuess}.`)
        }
    }
}