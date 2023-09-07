console.log("connected");

TODO:
function getNumber(): Function | void {
  let num: string | number | null = prompt("Enter a number between 0-100:");
  if (num === null) {
    alert("please enter a number!");
    return getNumber();
  } else {
    num = Number(num);

    if (num < 15) {
      alert("smaller than 5");
      console.log("smaller than 5");
      return numDividedBy5(num);
    } else {
      console.log("enter else");
      alert("please enter a valid number!");
      return getNumber();
    }
  }
}


function numDividedBy5(a: number) {
  if (a % 5 === 0) {
    alert("divided!");
  } else {
    alert("fail!");
  }
}
