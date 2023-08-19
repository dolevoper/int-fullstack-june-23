const level = prompt('Please choose difficulty level before starting:\n 1. Easy - secret number between 1 and 10.\n 2. Hard - secret number between 1 and 100.\n 3. Impossible - secret number between 1 and 1000.');

if (level === null) {
    alert('You canceled the game');
    throw new Error('The game was canceled');
}

const cleanLevel = level
    .toLocaleLowerCase()
    .replaceAll(' ', '')

// console.log(level);
// console.log(cleanLevel, cleanLevel.length);

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
        // console.log('Default');
        alert('Wrong input')
}

// function guesser(max) {
//     const numberToGuess = Math.floor(Math.random() * max + 1);
//     console.log(numberToGuess);

//     //firstTry
//     const firstTryInput = prompt('Your first try:');
//     if (firstTryInput === null) {
//         alert('You canceled the game');
//         return;
//     }
//     if (+firstTryInput === numberToGuess) {
//         alert('You win!');
//         return;
//     }
//     if (+firstTryInput < numberToGuess) {
//         alert('The entered number is less than the given number.')
//     }
//     if (+firstTryInput > numberToGuess) {
//         alert('The entered number is less than the given number.')
//     }

//     //secondTry
//     const secondTry = prompt('Your second try:');
//     if (secondTry === null) {
//         alert('You canceled the game');
//         return;
//     }
//     if (+secondTry === numberToGuess) {
//         alert('You win!');
//         return;
//     }
//     if (+secondTry < numberToGuess) {
//         alert('The entered number is less than the given number.')
//     }
//     if (+secondTry > numberToGuess) {
//         alert('The entered number is bigger than the given number.')
//     }

//     //thirdTry
//     const thirdTry = prompt('Your third try:');
//     if (thirdTry === null) {
//         alert('You canceled the game');
//         return;
//     }
//     if (+thirdTry === numberToGuess) {
//         alert('You win!');
//         return;
//     } else {
//         alert(`You loose.... The number was ${numberToGuess}.`)
//     }
// }

function guesser(max) {
    const numberToGuess = Math.floor(Math.random() * max + 1);
    console.log(numberToGuess);

    //firstTry
    const firstTryInput = prompt('Your first try:');
    if (handleTry(numberToGuess, firstTryInput, max)) {
        return;
    }

    //secondTry
    const secondTry = prompt('Your second try:');
    if (handleTry(numberToGuess, secondTry, max)) {
        return;
    }

    const thirdTry = prompt('Your third try:');
    if (thirdTry === null) {
        alert('You canceled the game');
        return;
    }

    if (numberToGuess === +thirdTry) {
        alert('You win!');
    } else {
        alert(`You loose.... The number was ${numberToGuess}.`);
    }
}

function handleTry(correct, inputNumber, max) {
    if (inputNumber === null) {
        alert('You canceled the game');
        return true;
    }
    if (isNaN(inputNumber)) {
        alert('You must enter only numbers.');
        return false;
    }

    if (+inputNumber <= 0 || +inputNumber > max) {
        alert('The entered number is out of the range.');
        return false;
    }
    if (+inputNumber !== Math.floor(inputNumber)) {
        alert('You must enter whole number.');
        return false;
    }

    if (correct === +inputNumber) {
        alert('You win!');
        return true;
    }

    if (+inputNumber < correct) {
        alert('The entered number is less than the given number.');
    } else {
        alert('The entered number is more than the given number.');
    }
    return false;
}