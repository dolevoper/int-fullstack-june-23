 alert (
    "please enter 3 number that more than zero: "
)
 
const number1 = Number(prompt(
    "Enter the first number:"
));

const number2 =Number( prompt(
    "Enter the second number:"
    ));

const number3 = Number(prompt(
    "Enter the third number:"
    ));


const good_numbers = number1 > 0 && number2 > 0 && number3 > 0

if (good_numbers ){
    alert ("All numbers are positive ");
}
    else {
        alert("There are negative numbers.");
    
    
        
}




const number_1 = number1**2 
const number_2 = number2**2 
const number_3 = number3**2 

const sum_number12= number_1 + number_2
const sum_number13= number_1 + number_3
const sum_number23= number_2 + number_3



const right_triangel = sum_number12 == number_3 || sum_number13 == number_2 || sum_number23 == number_1

 if (right_triangel){
    alert("we got a right triangel");
 }
 else {
    alert("sorry we dont get a right triangel");
 }








