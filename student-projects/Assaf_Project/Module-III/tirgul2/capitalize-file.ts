import { readFileSync, writeFileSync } from "fs";

const fileContents = readFileSync("./tirgul2/input.txt", "utf-8");
const output = fileContents
    .split("\n")
    .map((line) => `${line.charAt(0).toUpperCase()}${line.slice(1)}`)
    .join("\n");

// console.log(output);
writeFileSync("./tirgul2/output.txt", output);
