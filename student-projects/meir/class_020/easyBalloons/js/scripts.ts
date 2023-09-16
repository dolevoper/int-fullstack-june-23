
/*
# easy
1. create static divs on you DOM. and a picture of a balloon
2. if you click on one of these divs, its removed from the DOM.

extra: if all the divs are gone, alert the user and restart.
*/

initBaloon();

function initBaloon() {
    let counter: number = 5;
    let balloonsObj = document.querySelector("#balloonsContent");
    let myCounter = document.querySelector("#count");
    if (myCounter) {
        myCounter.innerHTML = counter.toString();
    }
    for (let i= 0; i < counter; i++) {
        let balloon: HTMLElement = document.createElement('div');
        balloon.style.display = "inline-block";
        balloon.style.width = "5em";
        balloon.style.height = "5em";
        balloon.style.cursor = "pointer";
        balloon.style.margin = "0 1% 0 0";
        balloon.style.background = "green";
        balloon.style.clipPath = "ellipse(25% 40% at 50% 50%)";
        balloon.style.border = "1px solid green";
        balloon.onclick = function () {
            if (counter <= 1) {
                alert("Game over, start again");
                counter = 6;
                initBaloon();
            }
            counter = counter - 1;
            balloon.style.display = "none";
            if (myCounter) {
                myCounter.innerHTML = counter.toString();
            }
        };
        if (balloonsObj) {
            balloonsObj.appendChild(balloon);
        }
    }
}

