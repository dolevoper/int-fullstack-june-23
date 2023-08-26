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

    //const myArrayText = ['Enter rig a', 'Enter rig b', 'Enter rig c'];
    //const myArray = [];
    let myArray: (number)[] = [];

    //const rib_A = Number(prompt('Enter rig a'));
    //const rib_B = Number(prompt('Enter rig b'));
    //const rib_C = Number(prompt('Enter rig c'));

    for (let i = 0; i <= 2; i++) {
        
        let yyy = prompt("Enter rig " + i ,"");
        
        const Status = validateNums(Number(yyy));

        if (Status === "exit") {
            alert("You choose exit!!!");
            return;
        }

        if (Status) {
            alert("valid number");
            myArray.push(Number(yyy));
        } else {
            alert("not valid number, try again");
            initPythagoras();
        }

    }
    alert("num is" + myArray);
}

function validateNums(myNums:number) {
    
    if (myNums === 0) {
        //alert("You pressed on cancel for exit");
        return "exit";
    }else if (isNaN(myNums)) {
        alert("Not a number");
        return false;
    }else if (myNums < 0) {
        alert("The number less from 1");
        return false;
    }else {
        alert("OK, You Enter valid number");
        return true;
    }
    
}


/*
const rib_A = Number(prompt("Enter rig a"));
const rib_B = Number(prompt("Enter rig b"));
const rib_C = Number(prompt("Enter rig c"));

if(rib_A <= 0 || rib_B <= 0 || rib_C <= 0){
    alert("not valid number");
}else {
    const ab = rib_A**2 + rib_B**2;
    const c = rib_C**2;
    if(ab > c){
        alert("Not equal - ab gritter then c");
    }else if(ab < c) {
        alert("Not equal - c gritter then ab");
    }else if(ab === c){
        alert("Equal - ab equal c");
    }
}
*/
