let courseCount = Number(prompt("From how many courses would you like to get an average"));

// loop until gets a number or cacnelled
while (isNaN(courseCount)) {
    courseCount = Number(prompt("Please enter a number (not a text) for how many courses you would like to average"));
}
let allGrades = 0;

// loop the amount of courses to collect
for (let i = 1; i <= courseCount; i++) {
    let grade = Number(prompt("Enter grade for course number " + i));

    // this cancellation works for cacnel but is wrong if the grade is actually = 0
    // if (!grade) {
    //     break;
    (allGrades += grade)
}

// math
const averageGrade = (allGrades / courseCount);

// quick exit on cancellation
if (courseCount && allGrades !== 0) {
    alert("Your average grade is:\n" + averageGrade);
}
