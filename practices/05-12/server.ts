import os, {platform, type} from "os";

console.log(os.platform());

var x = 2
var y = 4
var z = x + y
// console.log(x + y)

const student = {
    name: "gili",
    lastName: "menahem",
    gili: "cool"
}

const {lastName} = student;
const {gili} = student;

console.log(gili)