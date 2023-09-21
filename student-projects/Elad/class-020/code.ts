//task number 1//
const buttonToClick = document.getElementById("buttonToClick")
const clickTimse = document.getElementById("clickTimse")
let clickerCount = 0

function updateClickCount (){
    clickerCount++
    clickTimse.textContent = clickerCount
}

/* function updatMultytims () {
    clickerCount = clickerCount+1*2
    clickTimse.textContent = clickerCount
} */

buttonToClick.addEventListener("click", updateClickCount);

//task number 2//
