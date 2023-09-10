//pick a name of a movie


alert ("walocme to your game")
const Numberofmovie = Number (prompt ("pick a number between 5-20"));
if (Numberofmobie <=4 || Numberofstudents ===null || isNaN(Numberofmovie)) {
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