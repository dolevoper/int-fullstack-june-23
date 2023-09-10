//const arr = [1, 2, 3, 4, 5, 6, 7, "hi"]
//let elemment;
//arr.forEach((alert))


//const arr = ["eden", "lola", "din"];
//let elemment
//arr.forEach((alert))

const arr1 = ["aladin", "alice", "sharek", "spongbob"];
const arr2 = [1, 2, 3, 4];
const arr3 = ["eden", "hilla", "din", "ben"];

const eden = [arr1, arr2, arr3];


function printarrays(arrays){

    for (i= 0; i < arrays.length ;  i++ ){
        for (j =0; j < arrays[i].length ; j++){
            alert (arrays[i][j]);           
        }   
    }
}

printarrays(eden);
