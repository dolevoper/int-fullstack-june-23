const buttonOne = document.querySelector(".button1") as HTMLButtonElement
function buttomAlert(){
    alert("button one is clicked");
}
buttonOne.addEventListener("click" ,buttomAlert );

const Bgcolor = document.querySelector(".button2") as HTMLButtonElement
function changeBgcolor(){
    Bgcolor.style.backgroundColor = "red";

    alert("MOUSE OVER IS APPLIDE");
}
Bgcolor.addEventListener("mouseover" ,changeBgcolor );


const Status = document.querySelector(".button3") as HTMLButtonElement
function changStatus(){
    Status.innerText = "clicked"
}
Status.addEventListener("click" ,changStatus );

const Status1 = document.querySelector(".button3") as HTMLButtonElement
function changStatus1(){
    Status.innerText = "Enter"
}
Status.addEventListener("mouseover" ,changStatus1 );