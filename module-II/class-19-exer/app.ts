// const TEST = document.querySelector("#ss") as HTMLUListElement
// console.log(TEST)
// const s2 = document.getElementById("ss")
// console.log(s2)
// const aa = document.createElement("li")
// TEST.append(aa)
// aa.innerText= "aaaaaaa"
// aa.classList.add("aaa")
// // aa.classList.remove("aaa")
const hedar = document.getElementById("hedar") as HTMLHeadElement;
hedar.style.color = "red"
hedar.style.fontSize = "5rem"
hedar.style.backgroundColor = "blue"
console.log(hedar)
const ulTest = document.querySelector("ul") as HTMLUListElement
const liTest = document.createElement("li") 
ulTest.append(liTest);
liTest.innerText = "my text";
console.log(ulTest);


