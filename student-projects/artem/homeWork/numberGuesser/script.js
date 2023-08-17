const level = prompt('Please choose difficulty level before starting:\n 1. Easy - secret number between 1 and 10.\n 2. Hard - secret number between 1 and 100.\n 3. Impossible - secret number between 1 and 1000.')
    .toLocaleLowerCase()
const cleanLevel = level.replaceAll(' ', '')
console.log(level);
console.log(cleanLevel, cleanLevel.length);
switch (cleanLevel) {
    case '1':
    case 'easy':
        console.log('easy level');
        break;
    case '2':
    case 'hard':
        console.log('hard level');
        break;
    case '3':
    case 'impossible':
        console.log('impossible level');
        break;
    default:
        console.log('Default');
}