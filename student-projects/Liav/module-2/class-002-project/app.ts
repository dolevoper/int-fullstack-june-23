const a = Number(prompt("Enter length of leg a"));
const b = Number(prompt("Enter length of leg b"));
const cSquared = a ** 2 + b ** 2;
const c = Math.sqrt(cSquared);

if (a === null || b === null) {
    alert("worng input");

}else{

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      alert("worng input must be positive number");
    } else {
      const cSquared = a ** 2 + b ** 2;
      const c = Math.sqrt(cSquared);
  
      alert("Hypotenuse = " + c);
    }
  }
