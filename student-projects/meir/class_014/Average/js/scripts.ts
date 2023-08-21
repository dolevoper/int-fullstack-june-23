/*
1. Average grade calculator:
   - Ask the user how many grades he would like to enter
   - Read all the numbers
   - Calculate and print the average

2. Re-write guess my number using loops and `let` variables
   - Decide the number of guesses according to level
   - Or ask the user for how many guesses
   - Or infinite guesses

3. Choose any program we previously built and add number validation in a loop
   - Invalid number - show message and ask to enter a number again
   - Cancel - stop the program

\*\* Submit home project through a PR!
*/

initAvg();

function initAvg(){

    const gradesNum = Number(prompt("How many grades you would like to enter"));

    const Status = valiadte(gradesNum);
    

    if(Status === "exit"){
        alert("You pushed on 'Cancel' buttom for exit");
        return;
    }else{
        calcAvg(gradesNum,Status);
    }

}

function calcAvg(gradesNum:number, Status:boolean){
    
    let allNums = 0;

    if(Status){
        
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

        alert("Aveage is: " + allNums / gradesNum);
    }else{
        alert("Yot enter NOT valid number, Try again");
        initAvg();
    }
}

function valiadte(myGradesNum:number){

    if(myGradesNum === 0){
        //alert("לחצת על ביטול");
        return "exit";
    }else if(isNaN(myGradesNum)){
        //alert("הוזן קלט שאינו מספר");
        return false;
    }else if(myGradesNum <= 0){
        //alert("you enter number less from one");
        return false;
    } else {
        //alert("הוזן מספר חיובי");
        return true;
    }
    
}