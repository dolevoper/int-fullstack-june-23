function triangle() {
  function choise() {
    const userChoise = prompt(
      "If you want to calculate the length of hypotenuse -- please enter 1. \n If you want to check if there is a right triangle with a certain side length -- please enter 2. \n Make your choise."
    );

    switch (userChoise) {
      case "1":
        hypotenuse();
        break;
      case "2":
        isTriangle();
        break;
      default:
        choise();
        break;
    }
  }
  choise();
}

function isTriangle() {
  //   console.log("triangle");
  let arrSides = [];

  for (let i = 0; i < 3; i += 1) {
    arrSides[i] = Number(
      prompt(`Please enter the length of the ${i + 1} side of a right triangle`)
    );
    if (!inputValidator(arrSides[i])) {
      i -= 1;
      arrSides.pop();
    }
    // console.log(arrSides);
  }

  arrSides.sort((a, b) => a - b);
  //   console.log(arrSides);

  const lengthOfHypotenuse = Math.sqrt(
    Math.pow(arrSides[0], 2) + Math.pow(arrSides[1], 2)
  );

  if (lengthOfHypotenuse === arrSides[2]) {
    alert("A right triangle with such sides can exist.");
  } else {
    alert("A right triangle with such sides cannot exist.");
  }
}

function hypotenuse() {
  console.log("hypo");
  let legsOfTriangle = [];
  for (let j = 0; j < 2; j += 1) {
    legsOfTriangle[j] = Number(
      prompt(`Please enter the length of ${j + 1} leg of a right triangle`)
    );
    if (!inputValidator(legsOfTriangle[j])) {
      j -= 1;
      legsOfTriangle.pop();
    }
  }

  const result = Math.sqrt(
    Math.pow(legsOfTriangle[0], 2) + Math.pow(legsOfTriangle[1], 2)
  );
  alert(`The length of hypotenuse is to ${result}`);
}

triangle();

function inputValidator(num) {
  return !isNaN(num) && num > 0;
}
