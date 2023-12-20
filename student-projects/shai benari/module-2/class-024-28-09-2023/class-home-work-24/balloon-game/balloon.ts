
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
    
    
    }
}
const gameLoop = setInterval(createBalloon, 1000);
document.addEventListener('keydown', (ev) => {
    if( ev.key === 'Escape'){
        clearInterval(gameLoop);
    }
})
