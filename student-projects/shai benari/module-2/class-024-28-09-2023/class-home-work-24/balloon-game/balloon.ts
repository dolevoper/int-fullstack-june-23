const life = ["lf1" , "lf2" , "lf3" , "lf4" , "lf5"];
 let y = 0;
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
    balloon.style.bottom = y + "px";
    balloon.style.left = Math.random()* innerWidth + 'px';
    document.body.appendChild(balloon)
    balloon.onclick = () => {
    balloon.remove();
    // animate();
    
    }
}
const gameLoop = setInterval(createBalloon, 1000);
document.addEventListener('keydown', (ev) => {
    if( ev.key === 'Escape'){
        clearInterval(gameLoop);
    }
})
// function animate(){
//     if( y < innerHeight ){
//        y += 100;
//        createBalloon();
       
//     }
// }