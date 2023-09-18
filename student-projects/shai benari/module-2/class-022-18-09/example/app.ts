// console.log("connected")

// const username = "gili123"

// //session storage
// window.sessionStorage.setItem("id", username)
// // sessionStorage.removeItem("id")
// // console.log(sessionStorage.getItem("name"))

// //local storage

// window.localStorage.setItem("localStorage", "123456")

// const testLocalStorage = localStorage.getItem("localStorage")


// // localStorage.removeItem("id")

// // console.log(localStorage.getItem("id"))
let num = localStorage.getItem("click") ? localStorage.getItem("click") : 0;
// let num ;
// if (localStorage.getItem("click")) {
//     num = localStorage.getItem("click")
// } else {
//     num = 0
// }
let count = document.querySelector(".btn") as HTMLButtonElement
let root = document.querySelector(".root") as HTMLDivElement

root.innerHTML = `${num}`
function buttoonClick(){
    console.log(" The buttoon is clicked");
    num++
    root.innerHTML = `${num}`
    window.localStorage.setItem( "click", `${num}`)
}
count.addEventListener("click", buttoonClick);
// window.localStorage.setItem( "click", JSON.stringify(num))

let arry =[];


