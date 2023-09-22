/*
# Arrays home project

1. Choose any array method (use MDN to find) that we did not cover during class. Implement it on your own using for/while loops. This must be submitted as a function, not as free code.
2. Choose one of the projects bellow and implement it.

## Median

1. Write a function that accepts an array an returns the median value
2. Write a program that reads an arbitrary amount of numbers from the user and prints the median
3. Extra challange: write 2 versions of the median function, first using array methods and second iterating over the array directly with for/while loops.
<details>
    <summary>? Hint</summary>
    Read about Array.prototype.sort in MDN
</details>

## Basic to do list

Write a simple to do list program.  
Should have the following features:

1. Add todos
2. List all todos
3. Remove todo from the list
4. Clear list

Extra challenge:  
Make the list persist between refreshes

## Tic tac toe

Write a 2 player tic tac toe game.

<details>
    <summary>? Hint</summary>
    Arrays can be nested:
    <code>
        <pre>
const arr = [[1, 2], [], [3, 4]];
// arr is of type number[][]
        </pre>
    </code>
</details>
*/

/* 
reduce method 
    הפונקציה מעגלת את המספרים במערך מהאיבר השני והלאה, ולא נוגעת באיבר הראשון.
    היא מסכמת את האיברים מהשני והלאה ואחר כך מחברת את האיבר הראשון לתוך הסכום של שאר האיברים
*/

const myNumbers = [15.5, 2.3, 1.1, 4.7];
alert(myNumbers.reduce(getSum));

function getSum(total:number, num:number) {
  return total + Math.round(num);
}