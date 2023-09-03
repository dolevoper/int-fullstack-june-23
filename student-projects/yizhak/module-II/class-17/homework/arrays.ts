//Implement the join() method 

const animals = ["dog", "cat", "fish"];

let result = "";

for (let i = 0; i < animals.length; i++) {
    result += animals[i];

 if (i < animals.length - 1) {
    result += "/";
  }
}
alert(result);




