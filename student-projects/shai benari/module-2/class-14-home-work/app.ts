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
// let gradeSum = Number(0);
// let grade = Number(0);

// const gradesAverage =Number(prompt("Anter numbers of grades for average "));
// for (let i=1; i<=gradesAverage; i++){
//     let grade = Number(prompt("Anter your grade number: " + i));
//      if ( grade <1 ){
//      alert("use only positiv numbers")
//      break
// }
//     else {
//    gradeSum += grade;
// }
// }
// alert("your average grade is: " + gradeSum/gradesAverage);

// if (isNaN(guessAsNumber) || !Number.isInteger(guessAsNumber) || guessAsNumber < lowerBoundary + 1 || guessAsNumber > upperBoundary)

const level = prompt("for easy level anter: easy\n for hard level anter hard\n for very hard level enter: impossible"); 
let guessNumber = Number(prompt("enter the number of gsses you "))
for (let i=1; i<=guessNumber; i++){
    if (level==="easy"){let randomnum = Math.floor(Math.random() * 10) + 1};
    alert(randomnum);
    const guessNumber = Number(prompt("guss a number betwin 1 and 10"));
    if(randomnum===guessNumber){alert("your guss is right")}
    else if(guessNumber<1 || guessNumber>10){alert("your guss is out of range")}
    else{alert("your guss is wrong")}
    if(guessNumber<randomnum){alert("your guss is less then the number")}
    if(guessNumber>randomnum){alert("your guss is bigger then the number")}
}