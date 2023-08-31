const arr = [1, 4, 9, 16]

const newArr = arr.map((num) => Math.sqrt(num))

alert(newArr)

const newar = arr.map((x) => x * 2)

alert(newar)


function theNewMap(a, b){
   alert(a * b) 
}

theNewMap(5, arr)