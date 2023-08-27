//const fiveDoubled = double(5);
//alert(fiveDoubled);
//function double(x: number) { // x = 5
//    const xDoubled = x * 2;
//    alert("double!");
//
//    return xDoubled;
//}


//const input = prompt("ffk")
//alert()
//function prompt(x : number) {
//    const input = Number(prompt("tell the number"));
//    const wholeNumbers = x * 2;
//
//    return wholeNumbers;
//}





// 1. printTo
//**Input** - a number
//**Output** - print all the whole numbers from 1 to the input number

//let num = Number(prompt("please write integer number :"));
//while(num===null || Number.isInteger(num)===false || num<1){
//
// num = Number(prompt("please give again  integer number :"))
//}
//
//const input = wholeNumber(num);
//
//function wholeNumber(x: number) {
//    let data = []
//    for(let i =1 ; i <=x ; i++){
//        data.push(i);
//    }
//    return data ;
//}
//alert(input);



//2. isOdd
//   **Input** - a number
//   **Output** - return true if the number is odd, false otherwise

//let num = Number(prompt("what is your number:"));
//
//if (Number.isInteger(num)===false || num === null) {
//    alert("Error")
//} else {
//const input = evenOrOdd(num);
//
//function evenOrOdd(x: number){
//    if (x % 2 !== 0){
//        return "true" ;
//    } else {
//        return "false" ;
//    }
//}
//alert(input);
//}



//3. isEven
//   **Input** - a number
//   **Output** - return true if the number is even, false otherwise

//let num = Number(prompt("what is your number:"));
//
//if (Number.isInteger(num)===false) {
//    alert("Error")
//} else if(num === null){  //              <<< =========    *******not working*******
//    throw new Error("");
//}else{
//    const input = evenOrOdd(num);
//
//function evenOrOdd(x: number){
//    if (x % 2 === 0){
//        return "true" ;
//    } else {
//        return "false" ;
//    }
//}
//alert(input);
//}

//4. isPalindrome
//   **Input** - a string
//   **Output** - return true if the string is a palindrome, false otherwise

//let input = checkPalindrome(String(prompt("what is your word ?")));
//function checkPalindrome(x : string) {
//    for(let i=0 ; i<x.length/2 ; i++){
//        if(x[i] !== x[x.length-1-i]){
//            return "no palindrome";
//        } else {
//            return "This is palindrome";
//        }
//    }
//}
//alert(input);


//5. improved isPalindrome
//   **Input** - a string or a number
//   **Output** - return true if the input is a palindrome, false otherwise

//let input = checkPalindrome(prompt("what is your word ?"));
//function checkPalindrome(x) {
//    for(let i=0 ; i<x.length/2 ; i++){
//        if(x[i] !== x[x.length-1-i]){
//            return "false";
//        } else {
//            return "true";
//        }
//    }
//}
//alert(input);

//6. safeDiv
//   **Input** - 2 numbers
//   **Output** - return `null` if the second number is 0, the ratio between the numbers

//const numFirst = Number(prompt("please write your first number : "));
//const numSecond = Number(prompt("please write your second number : "));
//let result = ratio(numFirst , numSecond);
//function ratio(x : number, y :number){
//
//    if ((isNaN(x)) || (isNaN(y))){
//        return "Error";
//    } else {
//        if(y===0){
//            return null;
//        } else {
//            return Number(x/y);
//        }
//    }
//
//}
//alert(result);



//7. improved safeDiv
//   **Input** - 2 numbers
//   **Output** - the ratio between the numbers
//   If the second number is 0, the program should not compile
//

// ********************not complated*************************


//const numFirst = Number(prompt("please write your first number : "));
//const numSecond = Number(prompt("please write your second number : "));
//let result = ratio(numFirst , numSecond);
//function ratio(x : number, y :number){
//
//    if ((isNaN(x)) || (isNaN(y))){
//        return "Error";
//    } else {
//        if(y===0){
//
//        } else {
//            return Number(x/y);
//        }
//    }
//
//}
//alert(result);


//8. fizzBuzz
//   **Input** - a number
//   **Output** - print all the whole numbers from 1 to the input.
//   If the number has a 5 or is divisible by 5, print "fizz" instead.
//   If the number has a 7 or is divisible by 7, print "buzz" instead.
//   If it's both, print "fizzbuzz"

// ********************not complated*************************

//const input = fizzBuzz(prompt("what is your number ?"));
//
//function fizzBuzz(x : number) {
//    let data = []
//    if(x === null) {
//        alert("bye")
//    } else if (isNaN(x)){
//        alert("Error")
//    } else if (Number.isInteger(x/5) && Number.isInteger(x/7)){
//        alert("fizzbuzz");
//    } else if(Number.isInteger(x/5)){
//        alert("fizz");
//
//    } else if (Number.isInteger(x/7)) {
//        alert("buzz");
//    } else {
//        for(let i=1 ; i<=x ; i++) {
//            data.push(i)
//
//        }
//        alert(data);
//    }
//
//
//}
