const myShape = Number(prompt("For circle press 1 \n for triangle press 2 \n for square press 3"));
if (myShape === 1) {
    const circleR = Number(prompt("please enter the circle Radius"));
    const circleArea = (circleR ** 2 * 3.14);
    alert(circleArea);
} else if (myShape === 2) {
    const triangleBase = Number(prompt("please enter the triangle Base"));
    const triangleHight = Number(prompt("please enter the triangle Hight"));
    const triangleArea = ((triangleBase * triangleHight) / 2);
    alert(triangleArea);
} else if (myShape === 3) {
    const squareHight = Number(prompt("please enter the square's hight"));
    const squareWidth = Number(prompt("please enter the square's width"));
    const squareleArea = ((triangleBase * triangleHight) / 2);
    alert(triangleArea);
}