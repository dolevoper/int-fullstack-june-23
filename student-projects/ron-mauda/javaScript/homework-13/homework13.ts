const A = Number(prompt(("Enter length of leg a")))
const B = Number(prompt(("Enter length of leg b")))
const C = Number(prompt(("Enter length of leg c")))
const PythagorasOne = A**2 + B**2 ;
const PythagorasTwo = A**2 + C**2 ;
const PythagorasThree = B**2 + C**2 ;
const nonZero = A!==0 && B!==0 && C!==0
if ((PythagorasOne === C**2 || PythagorasTwo === B**2 || PythagorasThree === A**2) && nonZero  ){
    alert("yes")
} else {
    alert ("no")
}




