alert ("Hey there,\n we are here to help you calculate the grades average one question and we will start...");
const gradesNumber = Number (prompt("how many grades would you like to check"));
let total= 0;
if (gradesNumber<0 || Number.isInteger(gradesNumber) === false) {
    alert ("please enter a valid number!")
}else {
    for (let i=0; i<gradesNumber; i++) {
    const newGrade = Number (prompt("enter a grade please"));
    total += newGrade;
    }
const average = total / gradesNumber ;
alert ("The average of all those grades is: " + average);
}