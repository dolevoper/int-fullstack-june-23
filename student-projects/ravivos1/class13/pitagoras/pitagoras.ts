alert("Hello to Pitagoras checking.\nContinue to check if the tringle is a right triangle")
const a = Number(prompt("Enter length of leg a"));
if (a === null || a<=0 || isNaN(a)) {
    alert ("Please enter a valid and positive number for leg a")
}
else {
    const b = Number(prompt("Enter length of leg b"));
    if (b === null || b<=0 || isNaN(b)) {
        alert ("Please enter a valid and positive number for leg b")
    }
    else {
        const c = Number(prompt("Enter length of leg c"));
        if (c === null || c<=0 || isNaN(c)) {
            alert ("Please enter a valid and positive number for leg b")
        }
        else if (c < a || c < b) {
            alert("Leg c must be the longest length")
        }
        else {
            if (a**2 + b**2 === c**2) {
                alert ("The triangle is a right triangle!")
            }
            else {
                alert ("The triangle is not a right triangle.")
            }
        }
    }
}

