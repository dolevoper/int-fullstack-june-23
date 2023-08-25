const studentsGrades = Number (prompt("How many grades you want to enter?"))
if (isNaN (studentsGrades) || studentsGrades===null || studentsGrades <= 0) {
    alert("You didn't entered a valid number, please refresh the page and enter the number of grades you want to enter");
}
else {
    let sumGrades = 0;
    let average = 0;
    for (let student = 1; student <= studentsGrades; student++) {
        const grade = Number(prompt("Please enter the grade of student numer " + student));
        sumGrades = sumGrades + grade;
        const studentsleft = studentsGrades - student;
        average = sumGrades/student;
        if (student === studentsGrades) {
            alert("Grade enterd!\nIt was the last grade, the average is " + average)
        }
        else {alert ("Grade enterd!\nStudents left " + studentsleft + "\nPlease enter the next grade")
        }

    }
}