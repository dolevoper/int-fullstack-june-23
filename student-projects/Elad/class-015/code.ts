// level 1 vers 2//
const inputnum = prompt("Please enter a number");
const usernum = Number(inputnum);

if (usernum <= 0 || usernum === null || isNaN(usernum)) {
  alert("Please enter a valid number");
} else {
  conactnumbefore(inputNumber);
}

function conactnumbefore(inputNumber: string) {
  for (let i = 0; i < usernum; i++) {
    let curentnum = i + 1;

    if (curentnum === 1) {
      inputNumber = "1";
    } else if (curentnum === usernum) {
      alert(
        "your number was " +
          usernum +
          "\nthe numbers befor it are:\n " +
          inputNumber
      );
    } else {
      inputNumber = inputNumber + ", " + curentnum;
    }
  }
}

// level 2 vers 2//
const is_odd_num_input = prompt("Please enter a number and we will check whether it is odd or even");
const is_odd_num_input_as_number = Number(is_odd_num_input);

printnumifodd(is_odd_num_input);

function printnumifodd (is_odd_num_input: number) {
  if (Number.isInteger(is_odd_num_input_as_number / 2)) {
    alert(is_odd_num_input + " is not a odd num");
  } else {
    alert(is_odd_num_input + " is an odd num");
  }
}

//level 8 vers 1 //
/* alert("fizzbuzz game");

const fizzbuzzuserinput = prompt("please enter a number");
const fizzbuzzuserinputnum = Number(fizzbuzzuserinput); */
