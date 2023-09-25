//


const books = [
    {
        title: "Book 1",
        author: "Author 1",
        publicationYear: 2020,
        genres: ["Fiction", "Mystery"],
        pageCount: 300,
    },
    {
        title: "Book 2",
        author: "Author 2",
        publicationYear: 2019,
        genres: ["Science Fiction", "Adventure"],
        pageCount: 400,
    },
    {
        title: "Book 3",
        author: "Author 3",
        publicationYear: 2021,
        genres: ["Fantasy", "Young Adult"],
        pageCount: 250,
    },
];
const booksListElement = document.querySelector("#book-list")

const bookListHTML = books.map((book) => `
    <div class="book-card">
        <h2 class= headline>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Publication Year: ${book.publicationYear}</p>
        <p>Genres: ${book.genres.join(", ")}</p>
        <p>Page Count: ${book.pageCount}</p>
    </div>
`).join('');

if(booksListElement){
    booksListElement.innerHTML =bookListHTML;
}

const bookCards = document.querySelectorAll(".book-card");

bookCards.forEach((bookCard) => {
    const paragraphs = bookCard.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.color = "#FF9B82";
        paragraph.style.fontSize = "1.4rem";
    });
});
