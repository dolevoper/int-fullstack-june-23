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

alert(pawer(2,4));

const firstName = prompt("enter your first name");
const lasttName = prompt("enter your last name");
myName(firstName,lasttName);

function myName(firstName:string,lastName:string){
    alert("my first name is: " +" " + firstName + " "+ "my last name is: "+lastName);
}
function pawer(x:Number,y:Number){
    return x**y}