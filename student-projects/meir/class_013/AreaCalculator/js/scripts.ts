/*
# Area calculator

1. Ask the user which shape he wnats?
   1 - Circle
   2 - Rectangle
   3 - Triangle
   4 - Trapezoid
   5 - Ellipse
2. Ask the user for the relevant lenghts
3. Show the area of the shape
4. Validate inputs
*/


const PI = 3.14159265359;
checkValidate();

function checkValidate(){

    const shaper = Number(prompt("Enter number of shape you want to calculator: \n1 -> Circle \n2 -> Rectangle \n3 -> Triangle \n4 -> Trapezoid \n5 -> Ellipse"));

    if (isNaN(shaper)) {
        alert("הוזן קלט שאינו מספר, נסה שנית");
        checkValidate();
    } else if (shaper === 0) {
        alert("הוזן 0 או לא הוזן כלום, נסה שנית");
        checkValidate();
    } else if (shaper < 0) {
        alert("הוזן מספר שלילי, נסה שנית");
        checkValidate();
    } else {
        alert("הוזן מספר חיובי וקורא לפונקציה");
        calculateShape(shaper);
    }
    
}

function calculateShape(shaper:number){

    if(shaper === 1){   // שטח מעגל
        
        const SquareArea = Number(prompt("Enter the radius of the square"));
        const mySquare = PI * SquareArea**2;

        document.write("The area of Square is: " + mySquare.toFixed(2));
    }

    if(shaper === 2){   // שטח מלבן
        
        const ribOne = Number(prompt("Enter rib-1 of Rectangle"));
        const ribTwo = Number(prompt("Enter rib-2 of Rectangle"));
        
        const myRectangle = ribOne * ribTwo;
        
        document.write("The area of Rectangle is: " + myRectangle.toFixed(2));
    }

    if(shaper === 3){   // שטח משולש

        const TriangleSide_1 = Number(prompt("Enter the side 1 of Triangle"));
        const TriangleSide_2 = Number(prompt("Enter the side 2 of Triangle"));
        const TriangleSide_3 = Number(prompt("Enter the side 3 of Triangle"));

        const s = (TriangleSide_1 + TriangleSide_2 + TriangleSide_3) / 2;
        const myTriangle = Math.sqrt(s * ((s - TriangleSide_1) * (s - TriangleSide_2) * (s - TriangleSide_3)));

        document.write("The area of Triangle is: " + myTriangle.toFixed(2));
    }

    if(shaper === 4){   // שטח טרפז

        const TrapezoidTopLine = Number(prompt("Enter Trapezoid Top Line"));
        const TrapezoidBaseLine = Number(prompt("Enter Trapezoid Base Line"));
        const TrapezoidHeightLine = Number(prompt("Enter Trapezoid Height Line"));

        const myTrapezoid = ((TrapezoidTopLine + TrapezoidBaseLine) / 2) * TrapezoidHeightLine;
        
        document.write("The area of Trapezoid is: " + myTrapezoid.toFixed(2));
    }

    if(shaper === 5){   // שטח אליפסה

        const EllipseLine_1 = Number(prompt("Enter Ellipse line 1"));
        const EllipseLine_2 = Number(prompt("Enter Ellipse line 2"));

        const myEllipse = PI * EllipseLine_1 * EllipseLine_2;

        document.write("The area of Ellipse is: " + myEllipse.toFixed(2));
    }

}