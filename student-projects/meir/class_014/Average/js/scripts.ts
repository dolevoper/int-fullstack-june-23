/*
1. Average grade calculator:
   - Ask the user how many grades he would like to enter
   - Read all the numbers
   - Calculate and print the average

\*\* Submit home project through a PR!
*/

initAvg();

function initAvg(){

    const gradesNum = prompt("How many grades you would like to enter","");

    const Status = valiadte(gradesNum);
    

    if(Status === "exit"){
        alert("You pushed on 'Cancel' buttom for exit");
        return;
    }

    if(Status){
        calcAvg(gradesNum);
    }else{
        alert("You need to enter valid number, try again");
        initAvg();
    }

}

function calcAvg(gradesNum){
    
    let allNums = 0;
        
    for(let i=1; i <= gradesNum; i++){
        const num = Number(prompt("Enter number now"));
        const avg = valiadte(num);

        if(avg){
            //alert("valid number");
            allNums = allNums + num;
        }else{
            alert("Not valid number, try again");
            initAvg();
        }
        
    }

    alert("The aveage is: " + allNums / gradesNum);
    
}

function valiadte(myGradesNum){

    if(myGradesNum === null){
        //alert("You pressed on cancel for exit");
        return "exit";
    }else if(isNaN(myGradesNum)){
        alert("Not a number");
        return false;
    }else if(myGradesNum < 0){
        alert("The number less from 1");
        return false;
    }else if(myGradesNum === ""){
        alert("The input is empty");
        return false;
    }else{
        //alert("OK, You Enter valid number");
        return true;
    }

}