const shape = Number(prompt("please choose the shape you want to calculate: 0 for a square, 1 for a rectanle and 2 for a circle"));

if (shape === 0) {

    const a = Number(prompt("enter the length of the tzela of the squzre"));
    alert("the are of the square is"+(a*a));
} else if (shape === 1) {
    const a = Number(prompt("enter the length of the first tzela of the rectange"));
    const b = Number(prompt("enter the length of the second tzela of the rectange"));
    alert("the are of the rectangle is"+(a*b));
} else if (shape === 2) {
    const a = Number(prompt("enter the redius of the circle"));
    alert("the area of the circle is"+(a*a)*Math.PI);
} else alert("Invalid choice");
