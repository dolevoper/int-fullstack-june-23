import { readFileSync } from "fs";

const fileContents = readFileSync("./input.txt", "utf-8");

console.log(fileContents.split("\n").length);

// let lines = 0;
// for (let i = 0; i < fileContents.length; i++) {
//     if (fileContents[i] === "\n") {
//         ++lines;
//     }
<<<<<<< HEAD
// }  
=======
// }
>>>>>>> shai/modl-3/34

// console.log(lines);