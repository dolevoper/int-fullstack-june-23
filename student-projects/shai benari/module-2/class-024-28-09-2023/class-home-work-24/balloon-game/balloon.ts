playGame()

function playGame(){
    createBalloon();
    createBalloon();
    createBalloon();
    }
    document.querySelectorAll('.balloon-img').forEach((balloon) => {
        balloon.addEventListener('click',(event) => {
         balloon.remove();
         if(  document.querySelectorAll('.balloon-img').length === 0){
            alert("no more balloons")
            window.location.reload;
            playGame()
         }   
        })
    })


function createBalloon(){
    const balloon = document.createElement('div');
    balloon.className ='balloon-img';
    const img = document.createElement('img');
    img.src = "blue-balloon.png";
    img.alt = "balloon";
    balloon.appendChild(img);
    balloon.style.top = Math.random()* innerHeight + 'px';
    balloon.style.left = Math.random()* innerWidth + 'px';
    document.body.appendChild(balloon)
     console.log(balloon)
}

// const balloonUp = document.createElement('img');
// balloonUp.src = "blue-balloon.png";
// balloonUp.className = "balloon";

// let mouse = {
//     x: undefined,
//     y: undefined,
// }

// balloonUp.addEventListener('click' , (e) => {
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

