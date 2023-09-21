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
let grade = 0;
let gradeSum = 0;
const gradesNumbers = Number(prompt("Anter the nubers of grades to make an average to"))
for ( let i=1; i<=gradesNumbers; i++ ){
    let grade=Number(prompt("Anter grade "))
    let gradeSum = gradeSum+grade
    alert(gradeSum)
}