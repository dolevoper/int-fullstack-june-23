/*
Choose any program we previously built and add number validation in a loop
   - Invalid number - show message and ask to enter a number again
   - Cancel - stop the program
*/

initNumber();

function initNumber(){
    
    const myNums = prompt("Enter a response","");

    const Status = valiadte(myNums);

    if(Status === "exit"){
        return;
    }

    if(Status){
        alert("OK, You Enter valid number");
    }else {
        alert("Not ok, You Enter invalid number, try again");
        initNumber();
    }

}

function valiadte(myNums){

    if(myNums === null){
        alert("You pressed on cancel for exit");
        return "exit";
    }else if(isNaN(myNums)){
        alert("Not a number");
        return false;
    }else if(myNums < 0){
        alert("The number less from 1");
        return false;
    }else if(myNums === ""){
        alert("The input is empty");
        return false;
    }else{
        //alert("OK, You Enter valid number");
        return true;
    }

}