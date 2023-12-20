let btn = document.querySelector(".buttonQoute");
let quote = document.querySelector(".qoute");
let person = document.querySelector(".person");



const quotes = [
    {
        quote: "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.",
        author: "Bill Gates",
        liked: false
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
btn.addEventListener("click" , function() {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].author;
    
})

