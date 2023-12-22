console.log("connected");

// built-in events
const handleClick = (e: PointerEvent) => {
  e.stopPropagation();
  console.log(e);
};

// function handleClick(e:PointerEvent) {
//     console.log(e);
// }

//event listeners

const el:HTMLTableElement = document.querySelector("#outside")! ;
el.addEventListener("click", changeText);

function changeText(ev) {
  console.log(ev);
  const t2 = document.getElementById("t2") as HTMLTableCellElement;
  if (t2.firstChild?.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild!.nodeValue = "three";
  }
}

// const el = document.querySelector("#outside") as HTMLTableElement;
// el.addEventListener("click", () => {
//     const t2 = document.getElementById("t2") as HTMLTableCellElement;
//     if(t2.firstChild?.nodeValue === "three") {
//         t2.firstChild.nodeValue = "two"
//     } else  {
//         t2.firstChild!.nodeValue = "three"
//     }
// })

// event listeners #2

document.onkeydown = function (ev: KeyboardEvent) {
  console.log(ev);
  if (ev.code == "Escape") {
    alert("Escape!!!");
  }
};

window.onclick = function (ev: MouseEvent) {
  console.log("window clicked");
};

// removing event listeners

const element = document.querySelector("#root") as HTMLDivElement;

const handleMouseDown = () => {
  console.log("mouseDown");
};

element.addEventListener("mousedown", handleMouseDown);
// element.removeEventListener("mousedown", handleMouseDown);
