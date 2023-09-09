
const chooseOption = prompt(" a. Show random quote\n  b. Show quote by Id\n  c. Show quote by author` ");
 alert(chooseOption);
 while (chooseOption !== null){
  userChoise(chooseOption);
 }

 function userChoise(chooseOption:string){
    switch(chooseOption.trim()){
            case "a":
            randomChoice(1);
            break;
            case "b":
            choiseById(1);
            break;
            default:
             alert("Use leters from the menu");

    }
}
 

function randomChoice(random:number){
    let qoutLength = quotes.length -1;
    // alert(qoutLength);
     let choice = Math.floor(Math.random() * qoutLength);
     alert(choice);
     let quote = quotes[choice];
     alert(`${quote.quote}`);
}
function choiseById(id:number){
    let qoutLength = quotes.length -1;
    let idChoise = Number(prompt(`Enter id anumber btwin 0 and ` + qoutLength));
    alert(idChoise);
    let quote = quotes[idChoise]; 
    alert(`${quote.quote}`);
} 
 function choiseByAuthor(author:string){
    const authorName = prompt("Enter auothor name")?.trim();
    alert(authorName);
    const quotesByAuthor = author in quotes;
        alert(quotesByAuthor);
    };
    // alert(`${quotesByAuthor.quote}`);

const quotes = [
    {
        quote: "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.",
        author: "Bill Gates",
        liked:  false
    },
    {
        quote: "No man goes before his time—unless the boss leaves early.",
        author: "Groucho Marx"
    },
    {
        quote: "If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.",
        author: "John Gotti"
    },
    {
        quote: "Show me a man who is a good loser and I’ll show you a man who is playing golf with his boss.",
        author: "Jim Murray"
    },
    {
        quote: "People who work sitting down get paid more than people who work standing up.",
        author: "Ogden Nash"
    },
    {
        quote: "You can’t have a million dollar dream with a minimum wage worth ethic.",
        author: "Zig Ziglar"
    },
    {
        quote: "Doing nothing is very hard to do… you never know when you’re finished.",
        author: "Leslie Nielsen"
    },
    {
        quote: "Lisa, if you don’t like your job you don’t strike. You just go in every day and do it really halfway. That’s the American way.",
        author: "Homer Simpson"
    },
    {
        quote: "Sometimes the best part of my job is that the chair swivels",
        author: "Unknown"
    },
    {
        quote: "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
        author: "Robert Frost"
    },
    {
        quote: "The best way to appreciate your job is to imagine yourself without one.",
        author: "Oscar Wilde"
    },
    {
        quote: "Most people work just hard enough not to get fired and get paid just enough money not to quit.",
        author: "George Carlin"
    },
    {
        quote: "The taxpayer – that’s someone who works for the federal government but doesn’t have to take the civil service examination.",
        author: "Ronald Reagan"
    },
    {
        quote: "I told my boss 2 companies were after me and I needed a raise to stay at my present job. He asked which 3 were interested. I said the gas, electric, and cable.",
        author: "Unknown"
    },
    {
        quote: "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all.",
        author: "Sam Ewing"
    },
    
];

randomChoice(1);
choiseById(1)
choiseByAuthor("d");
