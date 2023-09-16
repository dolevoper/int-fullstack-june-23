/*
# easy

1.  Write a JavaScript program that creates a button and add a click event listener to console.log a message when it's clicked.

2. Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.

3. Write a JavaScript function that changes the background color of an element when a mouse enters it.

# medium

1. Write a JavaScript program that listens to the arrows keys AND WASD keys, recognize the direction and MOVES a div of your choosing to that direction. each set of keys moves a diffrent div.

# hard

1. Write a JavaScript program that listens to the arrows keys recognize the direction and MOVES a div to your choosing to that direction.
with your mouse, listen to click event, and if the click is on the div you created, alert "HIT!"

*/

/*************************************** Easy 1 ****************************************/

var myContent = document.querySelector("#myContent") as HTMLDivElement;

var myBtn = document.createElement('button');
myBtn.innerHTML = 'Click me';
myContent.appendChild(myBtn);

myBtn.addEventListener("click", myFunc);

function myFunc() {
    alert("The button is clicked");

}
/*************************************** Easy 2 ****************************************/

var mySelect = document.createElement('select');
mySelect.id = "meir";
mySelect.innerHTML = '<option>1111111111</option><option>2222222222</option><option>3333333333</option>';
myContent.appendChild(mySelect);

mySelect.addEventListener("change", myChange);

var mySpan = document.createElement('span');
myContent.appendChild(mySpan);

function myChange() {
    mySpan.innerHTML = mySelect.value;

}
/*************************************** Easy 3 ****************************************/

var myBgColor = document.createElement('div');
myBgColor.innerHTML = 'Div for over';
myBgColor.style.background = "red";
myBgColor.style.display = "inline-block";
myBgColor.style.padding = "1%";
myBgColor.style.color = "#ffffff";
myBgColor.style.fontWeight = "bold";
myBgColor.style.fontFamily = "arial";
myBgColor.style.cursor = "pointer";
myBgColor.style.border = "2px solid black";
myContent.appendChild(myBgColor);

myBgColor.addEventListener("mouseover", changeBg);
myBgColor.addEventListener("mouseout", changeBackBg);

function changeBg() {
    myBgColor.style.background = "green";
}
function changeBackBg() {
    myBgColor.style.background = "red";
}

/*************************************** Medium ****************************************/

var myObjToMove = document.createElement('div');
myObjToMove.innerHTML = 'WASD<br>Move me by keys';
myObjToMove.style.background = "cyan";
myObjToMove.style.display = "inline-block";
myObjToMove.style.padding = "1%";
myObjToMove.style.textAlign = "center";
myObjToMove.style.color = "#000000";
myObjToMove.style.fontWeight = "bold";
myObjToMove.style.fontFamily = "arial";
myObjToMove.style.cursor = "pointer";
myObjToMove.style.border = "2px solid black";
myContent.appendChild(myObjToMove);

document.addEventListener('keydown', press);

function press(e) {
    switch (e.code) {
        case "KeyW":
            myObjToMove.style.transform += "translateY(-5px)";
            break;
        case "KeyA":
            myObjToMove.style.transform += "translateX(-5px)";
            break;
        case "KeyS":
            myObjToMove.style.transform += "translateY(5px)";
            break;
        case "KeyD":
            myObjToMove.style.transform += "translateX(5px)";
            break;
        default:
            return;
    }
}

/*************************************** Hard ****************************************/

var myPokimonDiv = document.createElement('div');
myPokimonDiv.id = "myPokimonDivId";
myPokimonDiv.style.color = "Yellow";
myPokimonDiv.style.background = "red";
myPokimonDiv.style.textAlign = "center";
myPokimonDiv.style.padding = "2% 5% 2% 5%";
myPokimonDiv.style.display = "inline-block";
myPokimonDiv.style.fontSize = "1.2em";
myPokimonDiv.style.fontWeight = "bold";
myPokimonDiv.style.fontFamily = "arial";
myPokimonDiv.style.border = "3px solid green";
myPokimonDiv.innerHTML = "Move the pokimon with arrows";
myContent.appendChild(myPokimonDiv);

document.addEventListener('keydown', myArrows);

function myArrows(e:KeyboardEvent) {

    var mycircYellow = document.querySelector("#circYellow");

    switch (e.code) {
        case "ArrowUp":
            //mycircYellow.style.transform = "rotate(270deg)";
            mycircYellow.style.transform += "translateY(-5px)";
            break;
        case "ArrowDown":
            //mycircYellow.style.transform="rotate(90deg)";
            mycircYellow.style.transform += "translateY(5px)";
            break;
        case "ArrowLeft":
            //mycircYellow.style.transform="rotate(180deg)";
            mycircYellow.style.transform += "translateX(-5px)";
            break;
        case "ArrowRight":
            //mycircYellow.style.transform="rotate(0deg)";
            mycircYellow.style.transform += "translateX(5px)";
            break;
        default:
            return;
    }
}

var myPokimonDivId = document.querySelector("#myPokimonDivId");
myPokimonDivId.onclick = function () {
    alert("HIT!");
};
