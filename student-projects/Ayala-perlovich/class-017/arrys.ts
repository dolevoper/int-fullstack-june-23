
const arr = [2, 5, 7, 20, 30, 40, 44, 21, 27];
function sum(a, b){
    return a+b;

}
//  1 reduce -סריקה על המערך 

const arr = [2, 5, 7, 20, 30, 40, 44, 21, 27];
// function sum(a, b){
//     return a+b;

// }


function sum(a, b){
    return a*b;
}

function sum(a, b){
    return a > b ? a:b;
}
// function sum(a, b){
//     return a > b ? a:b;
// }

const asum = arr.reduce(sum);
alert(asum);

//************************************ */
// (1 Median
//I)
function Median(arr){
    const Mid = Math.floor(arr.length / 2);
    const sorteArr = arr.sort((a, b)=> a - b);
    if(arr.length % 2 === 0){
        return(sorteArr[Mid -1]+ sorteArr[Mid])/ 2;

    }else{
       return sorteArr[Mid];
    }
}

const arr =[11, 12, 13, 14, 15, 16, 17, 18, 19];
alert(Median(arr));


//II)
const input = prompt("Enter a list of numbers separated by spaces:");
const numArray = input.split(" ").map(Number);

function calculateMedian(numbers) {
    //     // למיין את מערך המספרים
  numbers.sort(function(a, b) {
    return a - b;
  });

//     // קבל את האינדקס האמצעי של המערך
  const middleIndex = Math.floor(numbers.length / 2);

    // בדוק אם למערך יש מספר אי זוגי או זוגי של אלמנטים
  if (numbers.length % 2 === 0) {

 // אם למערך יש מספר זוגי של אלמנטים, חשב את הממוצע של שני המספרים האמצעיים
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    // אם למערך יש מספר אי זוגי של אלמנטים, החזר את המספר האמצעי
    return numbers[middleIndex];
  }
}

const median = calculateMedian(numArray);

if (!isNaN(median)) {
  alert("Median: " + median);
} else {
  alert("Invalid input. Please enter a list of numbers separated by spaces.");
}

// // OR
//   const numbers = [1, 2, 3, 4, 5];
//   const median = calculateMedian(num);
//   alert(median); // Output: 3


//III)
//version 1
function median(arr) {
    //למיין את המערך בסדר עולה
    arr.sort((a, b) => a - b);
    const length = arr.length;
    //  אם האורך הוא אי זוגי או זוגי
    if (length % 2 === 0) {
      // אם זוגי, קח את הממוצע של שני המספרים האמצעיים
      const midIndex = length / 2;
      return (arr[midIndex - 1] + arr[midIndex]) / 2;
    } else {
      // אם אי זוגי, קח את המספר האמצעי
      const midIndex = Math.floor(length / 2);
      return arr[midIndex];
    }
  }

const numbers = [1, 2, 3, 4, 5, 6, 7];
const filteredNumbers = numbers.filter(num => num % 2 === 0);
const medianOfFiltered = median(filteredNumbers);
alert("Median of filtered numbers: " + medianOfFiltered);
//************ * OR/
// const mappedNumbers = numbers.map(num => num * 2);
// const medianOfMapped = median(mappedNumbers);
// alert("Median of mapped numbers: " + medianOfMapped); 

//version 2 ********

function medianWithOneLoop(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        const midIndex = Math.floor(arr.length / 2);

    }

    const midIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[midIndex - 1] + arr[midIndex]) / 2;
    } else {
        return arr[midIndex];
    }
}

const numbers = [5, 2, 9, 1, 5, 6];
const medianResult = medianWithOneLoop(numbers);
alert("Median calculated with a for loop:" + medianResult);  
