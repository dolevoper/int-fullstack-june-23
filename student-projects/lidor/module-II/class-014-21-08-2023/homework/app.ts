
const gradesNum = Number(prompt("Enter how many grades you want to summarize?"));


const gradesArray: number[] = new Array(gradesNum)

for (let i = 0; i < gradesNum; i++) {
    const grade = Number(prompt("Enter your grade, please"));
    gradesArray[i] = grade
}


let sum = 0;
for (let i = 0; i < gradesNum; i++) {
    sum += gradesArray[i];
}


const average = sum / gradesNum;


alert("The average grade is: " + average.toFixed(0));

/* The toFixed(0) method call ensures that the average is rounded to 0 decimal places,
effectively displaying the average without any numbers after the decimal point. */