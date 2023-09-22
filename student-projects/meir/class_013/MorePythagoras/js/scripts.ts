/*
## More pythagoras

1. Prompt for 3 numbers
2. Validate all the numbers (should also be positive non-zero)
3. Check if the numbers can be lengths of the sides of a right triangle (in any order)

3, 4, 5 -> true
3, 4, 6 -> false
4, 3, 5 -> true
*/


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
