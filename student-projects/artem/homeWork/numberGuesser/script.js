const level = prompt('Please choose difficulty level before starting:\n 1. Easy - secret number between 1 and 10.\n 2. Hard - secret number between 1 and 100.\n 3. Impossible - secret number between 1 and 1000.');

if (level === null) {
    alert('You canceled the game');
    throw new Error('The game was canceled');
}


const cleanLevel = level
.toLocaleLowerCase()
.replaceAll(' ', '')

console.log(level);
console.log(cleanLevel, cleanLevel.length);

switch (cleanLevel) {
    case '1':
    case 'easy':
        // console.log('easy level');
        guesser(10);
        break;
    case '2':
    case 'hard':
        guesser(100)
        // console.log('hard level');
        break;
    case '3':
    case 'impossible':
        // console.log('impossible level');
        guesser(1000)
        break;
    default:
        console.log('Default');
}

function guesser(max) {
    const guess = [];
    const numberToGuess = Math.floor(Math.random() * max + 1);
    console.log(numberToGuess);
    const firstTryInput = prompt('Your fisrt try:');
    if (firstTryInput === null) {
        alert('You canceled the game');
        return;
    }
}


