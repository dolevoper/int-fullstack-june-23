const students = Number (prompt("How many grades you want to enter?"))
if (students <18 || isNaN (students) || students===null || students <= 0) {
    alert("You didn't entered a valid number, please refresh the page and enter the number of grades you want to enter");
}
else {
    for (let i = 1; i <= students; i++) {
        const studentsleft = students - i;
        const grade = Number(prompt("student number " + i + "\nStudents left " + studentsleft + "\nPlease enter the next grade"));
        if (i===1) {
            const sum = grade;
        }
        else {
            const sum = sum + grade;
        }
        const avg = sum/i;
    }
    alert ("The average is " + avg)
}