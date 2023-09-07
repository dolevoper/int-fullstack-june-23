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
console.log(listItemsQuery)
