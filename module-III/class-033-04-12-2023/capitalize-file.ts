import { readFileSync, writeFileSync } from "fs";

const fileContents = readFileSync("./input.txt", "utf-8");
const output = fileContents
    .split("\n")
    .map((line) => `${line.charAt(0).toUpperCase()}${line.slice(1)}`)
    .join("\n");

// console.log(output);
writeFileSync("./output.txt", output);
