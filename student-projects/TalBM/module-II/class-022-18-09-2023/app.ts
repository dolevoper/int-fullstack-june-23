let clickCounter = 0;

document.addEventListener("click", addToCounter);

function addToCounter() {
    clickCounter++;
    console.log(clickCounter);
    localStorage.setItem("clicks", clickCounter.toString());
}

clickCounter = localStorage.getItem("clicks");





