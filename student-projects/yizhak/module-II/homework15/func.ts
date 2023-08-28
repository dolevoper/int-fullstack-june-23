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
    if (n % 2 === 1) {
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
function isPalindrome(word: string) {
    if (word.split('').reverse().join('') === word){
        return true;
    }
    else {
        return false;
    }
    
  }
//split() פונקציה שמפרידה את כל האותיות בקלט
//revers() פונקציה שעושה רוורסינג למחרוזת המתקבלת
//join() (פונקציה שמחברת הכל בחזרה (עם רווח באמצע
// ובסוף תנאי שבודק אם הקלט דומה לקלט שעבר את התהליך הזה
isPalindrome("")

//function number 6
/*function safeDiv(a,b: Number) {
    if(b === 0){
        return null;
    }
    else {
        return d;
    }
}
safeDiv(7, 5) */



