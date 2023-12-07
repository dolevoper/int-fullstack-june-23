import { readFileSync } from "fs";

const textFile = readFileSync("./text.txt", "utf-8");

const output = textFile.split('\n').map((line) => line.charAt(0).toUpperCase() + line.slice(1)).join('\n');
console.log(output);

// let line = 1;
// for(let i = 0; i <textFile.length; i++){
//     if( textFile[i] === "\n"){
//         textFile.split('\n')
//      line++;
//     }
// }
// let lines =textFile.split('\n').length;
// console.log(line ,lines, "marker");

