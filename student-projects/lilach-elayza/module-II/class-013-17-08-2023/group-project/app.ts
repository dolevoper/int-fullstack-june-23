const answer = prompt("What object do you want to calculate the area of?\n1. Square\n2. Circle\n3. Rectangle");

if (answer === null || answer === "") {
    alert("You didn't select a shape.");
} else {
    if (answer === "Square") {
        const sideLength = Number(prompt("Enter the side length: "));

        if (isNaN(sideLength) || sideLength <= 0) {
            alert("Invalid input. Length must be a positive number.");
        } else {
            const area = sideLength * sideLength;
            alert("Area of the square = " + area);
        }
    } else if (answer === "Rectangle") {
        const length1 = Number(prompt("Enter length: "));
        const length2 = Number(prompt("Enter width: "));

        if (isNaN(length1) || isNaN(length2) || length1 <= 0 || length2 <= 0) {
            alert("Invalid input. Lengths must be positive numbers.");
        } else {
            const area = length1 * length2;
            alert("Area of the rectangle = " + area);
        }
    } else if (answer === "Circle") {
        const radius = Number(prompt("Enter the radius: "));

        if (isNaN(radius) || radius <= 0) {
            alert("Invalid input. Radius must be a positive number.");
        } else {
            const area = Math.PI * radius ** 2;
            alert("Area of the circle = " + area);
        }
    } else {
        alert("Invalid shape selection.");
    }
}
