const balloonQuantity = 10;

type balloon = {
    x: number;
    y: number;
    speed: number;
    color: number;
};


function createBalloon(): balloon {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = 0;
    const speed = Math.floor(Math.random() * 10) + 1;
    const color =  Math.floor(Math.random() * 4);
    return { x, y, speed, color };
}

function mainloop() {


    //draw the balloons

    for (let i=0;i < balloonQuantity; ++i ) {

        

    }
}



let myBalloons: balloon[] = new Array(balloonQuantity);

for (let i=0;i < balloonQuantity; ++i ) {

    myBalloons[i] = createBalloon();
}






