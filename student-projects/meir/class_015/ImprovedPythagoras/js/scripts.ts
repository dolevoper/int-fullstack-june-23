/*
## More pythagoras

1. Prompt for 3 numbers
2. Validate all the numbers (should also be positive non-zero)
3. Check if the numbers can be lengths of the sides of a right triangle (in any order)

3, 4, 5 -> true
3, 4, 6 -> false
4, 3, 5 -> true

Improved pythagoras.
Ask the user if he wants to calculate the hypotenuse of know if 3 values are a valid right triangle edges.
Run the correct program - divide to functions, validate inputs etc...

*/


initPythagoras();


function initPythagoras() {

    const sideA = Number(prompt('Enter side a'));
    const sideB = Number(prompt('Enter side b'));
    const sideC = Number(prompt('Enter side c'));

    const Status = validateNums(sideA, sideB, sideC);

    if (Status === "exit") {
        alert("You choose exit!!!");
        return;
    }

    if (Status) {
        //alert("valid number");        
        calcNums(sideA, sideB, sideC)

    } else {
        alert("not valid number, try again");
        initPythagoras();
    }

}

function calcNums(sideA: number, sideB: number, sideC: number) {
    const ab = sideA ** 2 + sideB ** 2;
    const c = sideC ** 2;
    if (ab > c) {
        alert("Not equal - ab gritter then c");
    } else if (ab < c) {
        alert("Not equal - c gritter then ab");
    } else if (ab === c) {
        alert("Equal - ab equal c");
    }
}

function validateNums(sideA: number, sideB: number, sideC: number) {

    if (sideA === 0 || sideB === 0 || sideC === 0) {
        //alert("You pressed on cancel for exit");
        return "exit";
    } else if (Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
        alert("Not a number");
        return false;
    } else if (sideA < 0 || sideB < 0 || sideC < 0) {
        alert("The number less from 1");
        return false;
    } else {
        //alert("OK, You Enter valid number");
        return true;
    }

}
