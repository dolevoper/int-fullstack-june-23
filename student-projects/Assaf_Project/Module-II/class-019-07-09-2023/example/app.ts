const title = document.getElementById("my-header") as HTMLHeadingElement;
// title.style.color = "blue";

const container = document.querySelector(".container") as HTMLDivElement;
// container.style.color = "red";
console.log(container);

// const listItem = document.querySelectorAll(".list-item")
// listItem[1].style.color = "yellow"

const ul = document.querySelector("ul") as HTMLUListElement;

const li = document.createElement("li");

ul.append(li);
li.innerText = "lorem, ipsum.";

const body = document.querySelector("body");

const button = document.querySelector("button");
button?.addEventListener("click", darkMode);

const darkModeSelected = document.querySelector(".dark-mode");
function darkMode() {
  if (body) {
    body.classList.add("dark-mode");
    button?.innerText = "change to light mode";
  }
}

function lightMode() {
  if (darkModeSelected) {
    darkModeSelected.classList.remove("dark-mode");
    button.innerText = "change to dark mode";
  }
}
