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
    balloon.style.bottom = 0 + "px";
    balloon.style.left = Math.random()* innerWidth + 'px';
    document.body.appendChild(balloon)
   
    

