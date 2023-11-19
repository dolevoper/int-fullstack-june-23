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
    document.querySelector("#currentCard .card__back")!.textContent = currentCard.back;
   
};
document.querySelector("#btnFlip")?.addEventListener("click" , function() {
    document.querySelector("#currentCard")?.classList.toggle("card--flipped");
});
document.querySelector("#btnNextCard")?.addEventListener("click" , function() {
   if(currenCardsIndx === cards.length -1){
    document.querySelector("#donMassge")!.innerHTML = "<h2>All done</h2>";
    return;
   }

    currenCardsIndx++;
    displyCurrentCard();
});
displyCurrentCard();

