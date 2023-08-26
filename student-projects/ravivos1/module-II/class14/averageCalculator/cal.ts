const numberOfStudents = Number (prompt("How many grades you want to enter?"))
if (isNaN (numberOfStudents) || numberOfStudents === null || numberOfStudents <= 0) {
    alert("You didn't entered a valid number, please refresh the page and enter the number of grades you want to enter");
}
else {
    let sumGrades = 0;
    let average = 0;
    for (let student = 1; student <= numberOfStudents; student++) {
        const grade = Number(prompt("Please enter the grade (0-100) for student numer " + student));
        if (isNaN (grade) || grade===null || grade < 0 || grade > 100) {
            alert("You didn't entered a valid number, student doesn't count");
            student --;
        }
        else {
            sumGrades = sumGrades + grade;
            const studentsleft = numberOfStudents - student;
            average = sumGrades/student;
            if (student === numberOfStudents) {
                alert("Grade enterd!\nIt was the last grade, the average is " + average)
            }
            else {alert ("Grade enterd!\nStudents left " + studentsleft + "\nPlease continue to enter the next grade")
            }
        }

    }
}