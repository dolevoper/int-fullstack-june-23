import { readFileSync, writeFileSync } from "fs";


type user = {
    id: string
    firsName: string
    lestName:string
    phoneNumber: string

}
let users: user[]=[
 {
    id: "01",
    firsName: 'noam',
    lestName: 'yarden',
    phoneNumber: '052-3272153'
},
{
    id: "02",
    firsName: 'tal',
    lestName: 'avraham',
    phoneNumber: '052-3272397'
},
{
    id: "03",
    firsName: 'oren',
    lestName: 'avrahami',
    phoneNumber: '052-3272437'
}
];
users.push({
id: Math.random().toString(16).slice(2,8),
firsName:  process.argv[2],
lestName: process.argv[3],
phoneNumber: process.argv[4],
});

writeFileSync( "users.json", JSON.stringify( users ), "utf8" );

const fileContents = readFileSync("./users.json", "utf-8");

// console.log("The users are: " , fileContents);


//  for(let i =0; i<users.length + 1; i++){
//     let idValue = Object.values(users)[i];
//     let idKey = Object.keys(users)[i];
//     console.log();
// };

let ides = [''];
let idVal = users.map((elem) => {
    let getKeys = Object.keys(elem)[0];
    let getvalue = Object.values(elem)[0];
    ides.push(getvalue)
  });
 console.log(ides);




// import * as readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Is this example useful? [y/n] ', (answer:string) => {
//     switch(answer.toLowerCase()) {
//     case 'y':
//         console.log('Super!');
//         break;
//     case 'n':
//         console.log('Sorry!');
//         break;
//     default:
//         console.log('Invalid answer!');
//     }
//     rl.close();
// });


import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('please enter id:  ', (answer:string) => {
    for(let i =0; i<users.length+1; i++){
        if(answer === ides[i]){
            console.log(users[i-1]);
        }
        else{

            console.log(`The id you entard ${answer} do not much ${ides[i]}`)
        }
    }
   
    rl.close();
});