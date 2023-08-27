//function number 1

function printNumber(a: Number){
    for (let i = 1; i < a; i++) {
        alert(i);
    }
}
printNumber(7)

//function number 2
function isOdd(x: Number){
    if (x % 2 === 0) {
        return true;
      }
      else if (isNaN(x)) {
        return "Give a number";
      }
      else {
        return false;
      }  
}
isOdd(5)

//function number 3
function isEven(n: Number){
    if (x % 2 === 1) {
        return true;
      }
      else if (isNaN(n)) {
        return "Give a number";
      }
      else {
        return false;
      }  
}
isEven(3)
//function number 4