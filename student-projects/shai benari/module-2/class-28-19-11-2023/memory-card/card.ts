type Feedback = 0|1|2|3|4|5;

type Card = {
    front: string,
    back: string,
    lastFeedback?: Feedback,

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
    document.querySelector("#donMassge")!.innerHTML = "<h2></h2>"
   if(currenCardsIndx === cards.length -1){
    document.querySelector("#donMassge")!.innerHTML = "<h2>All done</h2>";
    return;
   }

    currenCardsIndx++;
    displyCurrentCard();
});

function parseFeedback(feedback: unknown): Feedback {
    const asNumber = Number(feedback);

    if (asNumber < 0 || asNumber > 5 || !Number.isInteger(asNumber)) {
        throw new Error();
    }

    return asNumber as Feedback;
}

 document.querySelector("#feedbackForm")?.addEventListener("submit" , function(e: SubmitEvent){
    e.preventDefault();
    
    const feedback = parseFeedback((e.submitter as HTMLButtonElement).value);
    parseFeedback(feedback);
    const sfeedback = String(feedback);
    document.querySelector("#donMassge")!.innerHTML ="You choose option #" + sfeedback;
  
    
 });


displyCurrentCard();



