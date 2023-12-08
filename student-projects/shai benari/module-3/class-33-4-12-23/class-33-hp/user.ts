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

console.log("The users are: " , fileContents);