<<<<<<< HEAD
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

import { freemem, totalmem } from 'os';
import {add, substract, devide, multiply} from './math.js';
import { emit } from 'process';


console.log( "add :" ,add(6,2));
console.log( "substract :" , substract(6,2));
console.log("devide :" ,devide(6,2));
console.log( "multiply :" , multiply(6,2));

function myName(name:string) {
    console.log('helow',name)
    
}

myName("shai");

const os = import('os');

let totalMemory = totalmem();
let freeMemory = freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`free memory: ${freeMemory}`);

// const EventEmitter = import('events');
// const emitter = new EventEmitter();

// emitter.on('messegeLogged', function(){
//     console.log('event triger');
// });
// emitter.emit('massege logged');
=======
let x = 2
let y = 3
console.log(x+y)
console.log("helow world");
const add = 5+6;
console.log(`add result : ${add} ` );
>>>>>>> shai/modl-3/34
