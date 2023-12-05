
/*
const title = document.getElementById("main-heading") as HTMLHeadingElement;

const listItems = document.getElementById("list-item") as HTMLCollectionOf<HTMLLIElement>;

const listItemsTag = document.getElementsByTagName("li");

const containerTag = document.querySelector("div");
const containerClass = document.querySelector(".container");
const h1Query = document.querySelector("main-heading");

const listItemsQuery = document.querySelectorAll(".list-item");
console.log(listItemsQuery);
*/


const newItem = document.createElement("li");
const wrongLink = document.createElement("a");
const picture = document.createElement("img");

// const listItems = document.getElementsByTagName("ul");
const listItems = document.querySelector("ul");


//listItems[0].append(newItem);
listItems?.append(newItem);



wrongLink.textContent = wrongLink.href;
wrongLink.href = "https://www.youtube.com/watch?v=AWVUp12XPpU&ab_channel=BerlinerPhilharmoniker";
wrongLink.style.color = "black";

newItem?.append(wrongLink);