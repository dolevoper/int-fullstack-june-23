/*
    filter method is a method that creates a new array with applies condition to an existing array.
*/

//first example

const arr1= [1,2,3,4,5,6,7,8,9,10];
const arrFiltered = arr1.filter(evenNum);

function evenNum(arr1:number){
    return arr1%2 === 0;
}

alert(arrFiltered);

//second example

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age:number) {
  return age >= 18;
}

alert(result);

//implemant to even numbers without filter

const arr2= [1,2,3,4,5,6,7,8,9,10];
const evenArr2:any = [];
let j=0;
for(let i =0;i<arr2.length;i++){
    if(arr2[i]%2===0)
    {
        evenArr2[j] = arr2[i];
        j++;
    }
}

alert(evenArr2);