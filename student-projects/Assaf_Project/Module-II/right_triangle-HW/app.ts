alert("Hello, please enter 3 numbers")

// 1st Number
const firstNumber = Number(prompt("#1"))
if (isNaN(firstNumber)) {
    alert("Please input only numerics")
} else if (firstNumber <= 0) {
    alert("Please enter a number which is larger then 0")
} else {

    // 2nd Number
    const secondNumber = Number(prompt("#2"))
    if (isNaN(secondNumber)) {
        alert("Please input only numerics")
    } else if (secondNumber <= 0) {
        alert("Please enter a number which is larger then 0")
    } else {

        // 3rd Number
        const thirdNumber = Number(prompt("#3"))
        if (isNaN(thirdNumber)) {
            alert("Please input only numerics")
        } else if (thirdNumber <= 0) {
            alert("Please enter a number which is larger then 0")
        } else {

            // conclusion
            if (firstNumber**2 + secondNumber**2 === thirdNumber**2 
             || firstNumber**2 + thirdNumber**2 === secondNumber**2 
             || secondNumber**2 + thirdNumber**2 === firstNumber**2) {
                alert("These numbers can be lengths of the sides of a right triangle")
            } else alert("this is not a right triangle")
        }
    }
}