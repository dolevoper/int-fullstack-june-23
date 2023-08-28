/* 
    Exercise: 
        Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

    Vlad's Notes:
    * When given 3 side of a triangle to calculate a triangle's area, we can use the Heron's Formula.
        1. first, we calculate the semi-perimeter of a triangle:
            semiperimeter = (a + b + c) / 2
        2. Then, we calculate the area using the semiperimeter: 
            area = √( s * (s-a) * (s-b) * (s-c) )
    https://en.wikipedia.org/wiki/Heron%27s_formula

    * To be able to calculate the area using square root, I'll be using the Math.sqrt() method
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

    * I'll be cutting the resulted float to 3 digits after decimal point with toFixed.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/

function calcTriangleArea( sideA: number, sideB: number, sideC: number ) {

    const semip = ( sideA + sideB + sideC ) / 2;
    const area = Math.sqrt( semip * (semip - sideA) * (semip - sideB) * (semip - sideC) )

    return area.toFixed(3);
}

console.log( calcTriangleArea(5, 6, 7) );