import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor(Math.random()*10 +1);
let num2 = Math.floor(Math.random()*10 +1);
let answer = num1+num2

rl.question(`what is the ${num1} + ${num2} ? \n`,(userInput=>{
   if(Number(userInput) === answer)
   rl.close()
else {
    rl.setPrompt("in correct answer try again");
    rl.prompt();

    rl.on('line',(userInput)=>{
        if(Number(userInput) === answer){
            rl.close() 
        }
        else{
            rl.setPrompt(`Your answer ${userInput} correct answer try again \n`); 
            rl.prompt()
        }
    })
}


});

rl.on('close', () =>{
    console.log(`Your anwer ${answer} is correct!!!`)
})