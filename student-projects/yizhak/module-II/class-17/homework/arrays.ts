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

// home project
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));

