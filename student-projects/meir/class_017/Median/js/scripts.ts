
/*
    ## Median

    1. Write a function that accepts an array an returns the median value
*/


/* Example with strings */
/*
var names:string[] = new Array("Mary","Tom","Jack","Jill")  
disp(names);

function disp(arr_names:string[]) {
    let aa="";
   for(var i = 0;i<arr_names.length;i++) { 
      aa = aa + names[i] + ", ";
   }  

   alert(aa);
} 
*/

/* Example with strings */
/*
var names: string[] = new Array("Bary", "Aom", "Zack", "Rill")
disp(names);

function disp(arr_names: string[]) {
    alert(arr_names.sort());
} 
*/

var myNumbers: number[] = [20, 5, 3, 7];
disp(myNumbers);

function disp(arrayNums: number[]) {

    arrayNums.sort((a, b) => a - b);
    
    const midpoint = Math.floor(arrayNums.length / 2);
    let median = 0;

    if (arrayNums.length % 2 === 0) {
        alert("zugi");
        median = (arrayNums[midpoint - 1] + arrayNums[midpoint]) / 2
    } else {
        alert("e zugi");
        median = arrayNums[midpoint];
    }

    alert(median);
    
}

