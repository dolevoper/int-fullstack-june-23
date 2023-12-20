// const topLimet = 9999;
// const bottomLimet = 999;
// const numberToFind = Math.floor(Math.random() * topLimet-bottomLimet) + bottomLimet;
// alert(numberToFind);
// let findNumber = "";
// if (numberToFind===999){ findNumber = "0000" }
// else {findNumber = numberToFind.toString()}
// alert(findNumber);
// let rewgusse=Number(prompt("gusse a number of 4 digest"));
// let gease=rewgusse.toString()
// for (let i=0;i<4; i++){
// if (gease.charAt(i)===findNumber.charAt(i)){alert("+")}
// else {alert("-")}
// }

const pawerResult = pawer(3,4);
alert("the pawer result is" +" "+ pawerResult)

let firstName = prompt("enter your first name");
let lasttName = prompt("enter your last name");
myName(firstName , lasttName);


function myName(firstName:string,lastName:string){
  const fn = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const ln = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    alert("my first name is: " +" " + fn + " "+ "my last name is: "+ ln);

}
function pawer(x:Number,y:Number){
    const resultPawer = x**y;
    return resultPawer}
    