

//let sum = 0;
//const grade = Number(prompt("How many grades would you like to calculate?"))
//let i = Number (prompt("how many hellos to print?"))
//for (let i=1 ; i <= grade; i++) {

   // let sum = Number(prompt("GGG"))
    
    

}
//alert("")

//let sum = 0;
//const grade = Number(prompt("How many grades would you like to calculate?"))

// looping from i = 1 to n
// in each iteration, i is increased by 1
//for (let i = 1; i <= grade; i++) {
 //   let sum =   // sum = sum + i
}

//console.log('sum:', sum);

// Ask the user for the number of data points
let grades = parseInt(prompt("Enter the number of grades:"));

// Create an array to store the data points
let data = [];

// Loop to input the data points
for (let i = 0; i < grades; i++) {
    let input = parseFloat(prompt("Enter data point " + (i + 1) + ":"));
    data.push(input);
}

// Calculate the sum of the data points
let sum = 0;
for (let i = 0; i < grades; i++) {
    sum += data[i];
}

// Calculate the average
let average = sum / grades;

// Display the result
alert("The average is: " + average);

