// x1. Convert more strings to objects in the quotes array (don't forget to uncomment the new quotes)
// 2. Add "liked" field to all quotes. Initial value should be false. Add menu option to like quote by id
// 3. Add menu option to see random liked quote

function app() {
	showRandomQuote();

	const promptText = `Welcome to quotes app!

What would you like to do?
    1. Show random quote
    2. Show quote by Id
    3. Show quote by author
    4. Like Quote by Id
    5. See random liked quote`;

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
			showRandomQuoteByLike();
			break;
		default:
			alert("Please choose an option from the menu using their numbers.");
	}
}

function showRandomQuote() {
	const quoteIndex = Math.floor(Math.random() * quotes.length);

	showQuote(quoteIndex);
}

function showRandomQuoteByLike() {
	const likedQuotes = quotes.filter(function (quote) {
		return quote.like;
	});
	if (!likedQuotes.length) {
		alert("No liked quotes!");
		return;
	}
	const quoteRandomIndex = Math.floor(Math.random() * likedQuotes.length);
	const randomLikedQuote = likedQuotes[quoteRandomIndex];
	alert(
		`Random liked quote:\n${randomLikedQuote.quote}\n\nBy: ${randomLikedQuote.author}`
	);
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

function likeQuoteById() {
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

	likeQuote(userInput - 1);
}

function likeQuote(id: number) {
	const quoteById = quotes[id];
	quoteById.like = !quoteById.like;
	alert(
		`${quoteById.like ? "Liked" : "Unliked"} quote:\n${quoteById.quote}\n\n${
			quoteById.author
		}`
	);
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

// “No man goes before his time—unless the boss leaves early.”
const quotes = [
	{
		quote:
			"I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.",
		author: "Bill Gates",
		like: false,
	},
	{
		quote: "No man goes before his time—unless the boss leaves early.",
		author: "Groucho Marx",
		like: false,
	},
	{
		quote:
			"If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.",
		author: "John Gotti",
		like: false,
	},
	{
		quote:
			"Show me a man who is a good loser and I’ll show you a man who is playing golf with his boss.",
		author: "Jim Murray",
		like: false,
	},
	{
		quote:
			"People who work sitting down get paid more than people who work standing up.",
		author: "Ogden Nash",
		like: false,
	},
	{
		quote:
			"You can’t have a million dollar dream with a minimum wage worth ethic.",
		author: "Zig Ziglar",
		like: false,
	},
	{
		quote:
			"Lisa, if you don’t like your job you don’t strike. You just go in every day and do it really halfway. That’s the American way.",
		author: "Leslie Nielsen",
		like: false,
	},
	{
		quote: "Sometimes the best part of my job is that the chair swivels.",
		author: "Homer Simpson",
		like: false,
	},
	{
		quote:
			"By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
		author: "Unknown",
		like: false,
	},
	{
		quote:
			"The best way to appreciate your job is to imagine yourself without one.",
		author: "Robert Frost",
		like: false,
	},
	{
		quote:
			"Most people work just hard enough not to get fired and get paid just enough money not to quit.",
		author: "Oscar Wilde",
		like: false,
	},
	{
		quote:
			"The taxpayer – that’s someone who works for the federal government but doesn’t have to take the civil service examination.",
		author: "George Carlin",
		like: false,
	},
	{
		quote:
			"I told my boss 2 companies were after me and I needed a raise to stay at my present job. He asked which 3 were interested. I said the gas, electric, and cable.",
		author: " Unknown",
		like: false,
	},
	{
		quote:
			"Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all.",
		author: "Sam Ewing",
		like: false,
	},
];

app();
