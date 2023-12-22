// function popBalloon(ev) {
//     console.log(ev);
//     const balloon = document.querySelector("balloon") as HTMLDivElement;
//     console.log(balloon);
// }

let popped = 0;
document.addEventListener('click', function(e){
    if(e.target.className=='balloon') {
        e.target.style.background='hsl(70, 31%, 85%)';
        e.target.textContent="pop!";
        popped++;
        checkAllPopped()
    }
});

function removeEvents(e){
    e.target.removeEvents('click',function(){
        
    })
};

function checkAllPopped(){
    if(popped==10){
        
    }
}




