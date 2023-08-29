// const reqierd = Number(prompt("Enter number of loops"));
//  for(let i=1; i<reqierd+1; i++){alert("heloow"+i)
//  let index1=(i)
//  alert(index1)
// }
// alert("end")
//  let age= Number(prompt("enter your age"));
//  while (age < 18){
//   age=Number(prompt("enter your age"));
//  }
//   alert("end");
let gradeSum = Number(0);
let grade = Number(0);

const gradesAverage =Number(prompt("Anter numbers of graded for average "));
for (let i=1; i<=gradesAverage; i++){
    let grade = Number(prompt("Anter your grade number: " + i));
    gradeSum += grade;
}
alert("your average grade is: " + gradeSum/gradesAverage);
