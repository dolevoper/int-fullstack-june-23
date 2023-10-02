

//\ אפלקציה מאפשרת למשתמשים לנהל אוסף של ספרים.
// הם יכולים להוסיף ספרים חדשים,
// לרשום את כל הספרים בספרייה,
// לחפש ספרים לפי כותרת או מחבר,
//   ולצאת מהאפליקציה.

function app() {
    const promptText = `Welcome to the Library App!
  
  What would you like to do?
  1. Add a new book
  2. List all books
  3. Search books by title
  4. Search books by author
  0. Exit`;
  let userInput = prompt(promptText);

  while (userInput !== null) {
    if (userInput.trim() === "0") {
      console.log("Exiting the Library App.");
      break; // Exit the loop when the user enters 0
    }
    handleUserInput(userInput);
    userInput = prompt(promptText);
  }
}
  
  function handleUserInput(userInput:any) {
    switch (userInput.trim()) {
      case "1":
        addBook();
        break;
      case "2":
        listBooks();
        break;
      case "3":
        searchBooksByTitle();
        break;
      case "4":
        searchBooksByAuthor();
        break;
      case "0":
        alert("Exiting the Library App.");
        break;
      default:
        alert("Please choose an option from the menu using their numbers.");
    }
  }
  
  const library:any = [];
  
  function addBook() {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const year = parseInt(prompt("Enter the publication year:"));
  
    const book = {
      title,
      author,
      year,
    };
  
    library.push(book);
    alert("New book added successfully!");
  }
  
  function listBooks() {
    alert("List of Books:");
    library.forEach((book : any, index : any) => {
      alert(`${index + 1}. ${book.title} by ${book.author}, published in ${book.year}`);
    });
  }
  
  function searchBooksByTitle() {
    const userInput = prompt("Enter the title to search for:").trim().toLowerCase();
  
    const matchingBooks = library.filter((book : any) =>
      book.title.toLowerCase().includes(userInput)
    );
  
    if (matchingBooks.length === 0) {
      alert("No matching books found.");
      return;
    }
  
    matchingBooks.forEach((book : any, index : any) => {
      alert(`${index + 1}. ${book.title} by ${book.author}, published in ${book.year}`);
    });
  }
  
  function searchBooksByAuthor() {
    const userInput = prompt("Enter the author's name to search for:").trim().toLowerCase();
  
    const matchingBooks = library.filter((book : any) =>
      book.author.toLowerCase().includes(userInput)
    );
  
    if (matchingBooks.length === 0) {
      alert("No matching books found.");
      return;
    }
  
    matchingBooks.forEach((book : any, index : any) => {
      alert(`${index + 1}. ${book.title} by ${book.author}, published in ${book.year}`);
    });
  }
  
  app();