// let x = 2
// let y = 3
// console.log(x+y)
// console.log("helow world");
// const add = 5+6;
// console.log(`add result : ${add} ` );

// import os from "os";

// import path from "path";

const path = import('path')
console.log(path)

import {add, substract, devide, multiply} from './math.js';


console.log( "add :" ,add(6,2));
console.log( "substract :" , substract(6,2));
console.log("devide :" ,devide(6,2));
console.log( "multiply :" , multiply(6,2));

function myName(name:string) {
    console.log('helow',name)
    
}

myName("shai");