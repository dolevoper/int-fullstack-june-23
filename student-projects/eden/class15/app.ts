//alert ("welcome to your grade")
//const NumberToRead = Number (prompt ("how many grades would you like to enter?"));
//const firstNumber = Number (prompt("please enter a number"))
//const seconedNumber = Number (prompt("please enter a number"))
//const thirdNubmer = Number (prompt("please enter a number"))

//alert (firstNumber + seconedNumber + thirdNubmer)

 alert ("walocme to your grade calculator")
const Numberofstudents = Number (prompt ("how many grades would you like to enter?"));
if (Numberofstudents <=0 || Numberofstudents ===null || isNaN(Numberofstudents)) {
    alert ("you didnt enterd a vaild number do it again")
} else { let sum = 0;
    let avg = 0;
    for (let gradeofstudents = 0; gradeofstudents<Numberofstudents; gradeofstudents++) {
        const grades = Number (prompt ("Enter the grade of the student")) 
        if (grades<0 || grades===null || isNaN (grades) || grades>100) {
        alert ("nonononononon")
        gradeofstudents--;
        } 
         else { sum = sum+grades;
            
         }
        }
        avg = sum / Numberofstudents
    alert (avg)
}










