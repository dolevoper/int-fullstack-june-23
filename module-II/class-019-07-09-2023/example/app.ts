
console.log("connected");

//truthy values
// "withContent", {} , [] , 2 (numbers other than 0), true

// //falsy values
// "", 0 , false, null undefiend


// DOM Manipulation

// GetElementByID()

const title = document.getElementById("main-heading") as HTMLHeadingElement;


// GetElementByClassName()
const listItems = document.getElementsByClassName("list-item") as HTMLCollectionOf<HTMLLIElement>

// for (let i = 0; i <listItems.length ; i++) {
//     listItems[i].style.color = "blue"
// }

// GetElementByTagName()
const listItemsTag = document.getElementsByTagName("li")

// querySelector()
const containerTag = document.querySelector("div")
const containerClass = document.querySelector(".container")
const h1Query = document.querySelector("#main-heading")

// querySelectorAll()
const listItemsQuery = document.querySelectorAll(".list-item")
// console.log(listItemsQuery)

// CSS
// in JS CSS is written in camelCase
// title.style.color = "blue"
// title.style.fontSize = "5rem"
// title.style.backgroundColor = "#00006a"

// Adding elements
//1. create element
//2. append it to parent

const ul = document.querySelector("ul") as HTMLUListElement;

const li = document.createElement("li")
ul.append(li)
li.innerText = "X-men"

li.classList.add("list-item")
li.classList.remove("list-item")

li.setAttribute("id", "red")
li.removeAttribute("id")

const a = document.querySelector("a") as HTMLAnchorElement;
a.setAttribute("href", "https://www.w3schools.com/jsref/obj_window.asp")

// const colorPicked = prompt("enter Color name:") 
// if (colorPicked) {
//     title.style.color = colorPicked
// }
// const AddToList = (list, content) => {
//     const li = document.createElement("li")
//     li.innerText = content
//     list.append(li)
// }

// const li = document.querySelector("li")
// console.log(li.innerHTML)
// console.log(li.innerText)
// console.log(li.textContent)

//add class, remove class, attributes, add elements remove elements inlie style,
// add div, add image



=======
console.log("connected")

