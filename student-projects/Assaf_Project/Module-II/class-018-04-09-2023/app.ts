// 1. Convert more strings to objects in the quotes array (don't forget to uncomment the new quotes)
// 2. Add "liked" field to all quotes. Initial value should be false. Add menu option to like quote by id
// 3. Add menu option to see random liked quote

function app() {
  showRandomQuote();

  const promptText = `Welcome to quotes app!

What would you like to do?
    1. Show random quote
    2. Show quote by Id
    3. Show quote by author
    4. like quote by id number
    5. Show random liked quotes`;
    console.log(quotes[1])

  let userInput = prompt(promptText);

  while (userInput !== null) {
    handleUserInput(userInput);
    userInput = prompt(promptText);
  }
}

function handleUserInput(userInput: string) {
  switch (userInput.trim()) {
    case "1":
      showRandomQuote();
      break;
    case "2":
      showQuoteById();
      break;
    case "3":
      showQuoteByAuthor();
      break;
    case "4":
      likeQuoteById();
      break;
    case "5":
      showRandomLikedQuote();
      break;
    default:
      alert("Please choose an option from the menu using their numbers.");
  }
}

function showRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  showQuote(quoteIndex);
}

function showQuoteById() {
  const userInput = Number(
    prompt(`Please enter quote Id between 1 and ${quotes.length}`)
  );

  if (
    isNaN(userInput) ||
    !Number.isInteger(userInput) ||
    userInput < 1 ||
    userInput > quotes.length
  ) {
    alert("Invalid quote Id.");
    return;
  }

  showQuote(userInput - 1);
}

function showQuoteByAuthor() {
  const userInput = prompt("Please enter the author's name")?.trim();
  const quotesByAuthor = quotes.filter(function (quote) {
    return quote.author.toLowerCase() === userInput?.toLowerCase();
  });

  if (!quotesByAuthor.length) {
    alert(`No quotes by ${userInput} in our database.`);
  }

  const randomIndex = Math.floor(Math.random() * quotesByAuthor.length);
  const originalQuoteIndex = quotes.indexOf(quotesByAuthor[randomIndex]);

  showQuote(originalQuoteIndex);
}

function showQuote(index: number) {
  const quote = quotes[index];

  alert(`Quote #${index + 1}:\n“${quote.quote}”\n\n${quote.author}`);
}

function likeQuoteById() {
  const index = Number(
    prompt(`Please enter quote Id between 1 and ${quotes.length}`)
  );
  return quotes[index].isLiked === true;
}

// “No man goes before his time—unless the boss leaves early.”
const quotes = [
  {
    quote:
      "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.",
    author: "Bill Gates",
    isLiked: false,
  },
  {
    quote: "No man goes before his time—unless the boss leaves early.",
    author: "Groucho Marx",
    isLiked: false,
  },
  {
    quote:
      "If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.",
    author: "John Gotti",
    isLiked: false,
  },
  {
    quote:
      "Show me a man who is a good loser and I’ll show you a man who is playing golf with his boss.",
    author: "Jim Murray",
    isLiked: false,
  },
  {
    quote:
      "People who work sitting down get paid more than people who work standing up.",
    author: "Ogden Nash",
    isLiked: false,
  },
  {
    quote:
      "You can’t have a million dollar dream with a minimum wage worth ethic.",
    author: "Zig Ziglar",
    isLiked: false,
  },
  {
    quote:
      "Doing nothing is very hard to do… you never know when you’re finished.",
    author: "Leslie Nielsen",
    isLiked: false,
  },
  {
    quote:
      "Lisa, if you don’t like your job you don’t strike. You just go in every day and do it really halfway. That’s the American way.",
    author: "Homer Simpson",
    isLiked: false,
  },
  //     `“Sometimes the best part of my job is that the chair swivels.”

  // Unknown`,
  //     `“By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.”

  // Robert Frost`,
  //     `“The best way to appreciate your job is to imagine yourself without one.”

  // Oscar Wilde`,
  //     `“Most people work just hard enough not to get fired and get paid just enough money not to quit.”

  // George Carlin`,
  //     `“The taxpayer – that’s someone who works for the federal government but doesn’t have to take the civil service examination.”

  // Ronald Reagan`,
  //     `“I told my boss 2 companies were after me and I needed a raise to stay at my present job. He asked which 3 were interested. I said the gas, electric, and cable. ”

  // Unknown`,
  //     `“Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all.”

  // Sam Ewing`
];

app();
console.log(quotes[1])
