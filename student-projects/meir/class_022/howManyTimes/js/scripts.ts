/*
1. create a program that counts how many times the user clicked since opening the website. when refresh it still remmbers the number.
*/

let count: number = 0;

document.addEventListener('click', myClicks);
let myClickVal = localStorage.getItem("myClicks");

if (myClickVal === null) {
    localStorage.setItem("myClicks", String(count + 1));
} else {
    myClickVal = localStorage.getItem("myClicks");
    const aaa = document.addEventListener("click",myClicks);
}

function myClicks() {
    count = Number(localStorage.getItem("myClicks")) + 1;
    localStorage.setItem("myClicks", String(count));
}

