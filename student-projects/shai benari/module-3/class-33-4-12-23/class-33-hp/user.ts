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
console.log(users)