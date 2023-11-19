type Card = {
    front: string,
    back: string,
};
const cards: Card[] = [
    {
        front: "Pen",
        back: "עט"
    },
    {
        front: "man",
        back: "איש"
    },
    {
        front: "card",
        back: "קלף",
    },
    {
        front: "numbr",
        back: "מספר",
    },
    {
        front: "time",
        back: "זמן",
    }

];
let currenCardsIndx = 0;

function displyCurrentCard(){
    const currentCard = cards[currenCardsIndx];
    document.querySelector("#currentCard .card__front")!.textContent = currentCard.front;
    document.querySelector("#currentCard .card__back")!.textContent = currentCard.front;
   
};
document.getElementById("btnFlip")?.addEventListener("click" , function() {
    document.getElementById("currentCard")?.classList.toggle("card--flipped");
});
document.getElementById("#btnNextCard")?.addEventListener("click" , function() {
   if(currenCardsIndx === cards.length -1){
    return;
   }

    currenCardsIndx++;
    displyCurrentCard();
});
displyCurrentCard();

