// const singlArray =[1,4,9,16];
// alert(singlArray)
// const rootAraay = singlArray.map((x) => Math.sqrt(x) );
// alert(rootAraay)
// const dubleArray = rootAraay.map((x) => x*2);
// alert(dubleArray)
const names = [ "shai", "or" ,"ntta","maaian", "boaz", "roni"];
const nationalitys =["iran","usa", "japan"]
alert(names);
const myFmely = names.slice(0,4);
alert("my famely: " + " " + myFmely);
names.push("yaron")
alert(names);
names.pop();
alert(names);
names.shift();
alert(names);
names.unshift("yotam");
alert(names);
names[0]="shai";
alert(names);
const namesNationality= names.concat(nationalitys);
alert(namesNationality);
const nN = namesNationality.concat("israel");
alert(nN);