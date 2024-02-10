/*

# Easy
- Create an object array with information
- Dump the array into the HTML page using 'innerHTML'
- Use an external CSS file to format the page

Notes
- 'innerHTML' only accepts a single value. Use array method to create a single HTML fragment (string) to populate it.
- The actual HTML elements used for 'innerHTML' doesn't matter (use '<p>', a '<ul>' '<li>' combo or anything else).

### Medium
- Add an image property to the class pointing a local image file for each instance.
- Include the image in the HTML output.

### Advanced
- Repeat the medium assignment using 'document.createElement()'
- Don't use 'innerHTML' at all

//
combine the system you create in the lastlesson with what you learned today!
ex: Create a user card and add it to dom, remove a defeted monster etc.

*/

var myProps = [
    {
        "title": "Margherita Pizza",
        "img": "images/piza_1.jpg",
        "txt": "Margherita pizza is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil. It's known for its simplicity and the use of colors that represent the Italian flag.",
        "txtBtn": "Order now",
    },
    {
        "title": "Pepperoni Pizza",
        "img": "images/piza_2.jpg",
        "txt": "Pepperoni pizza features tomato sauce, mozzarella cheese, and slices of pepperoni, which is a type of spicy Italian sausage. It's a popular choice in the United States and known for its savory and slightly spicy flavor.",
        "txtBtn": "Order now",

    },
    {
        "title": "Hawaiian Pizza",
        "img": "images/piza_3.jpg",
        "txt": "Hawaiian pizza combines tomato sauce, mozzarella cheese, ham, and pineapple chunks. It's a sweet and savory combination that's loved by many, despite being a topic of debate among pizza enthusiasts.  of debate among pizza enthusiasts..",
        "txtBtn": "Order now",

    },
    {
        "title": "BBQ Chicken Pizza",
        "img": "images/piza_4.jpg",
        "txt": "BBQ chicken pizza is topped with barbecue sauce, diced or shredded chicken, red onions, and mozzarella cheese. The sweet and tangy barbecue sauce gives it a unique and flavorful twist. it a unique and flavorful twist",
        "txtBtn": "Order now",

    },
    {
        "title": "Margherita Pizza",
        "img": "images/piza_5.jpg",
        "txt": "Margherita pizza is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil. It's known for its simplicity and the use of colors that represent the Italian flag.",
        "txtBtn": "Order now",

    },
    {
        "title": "Veggie Supreme Pizza",
        "img": "images/piza_6.jpg",
        "txt": "Veggie supreme pizza is a vegetarian option loaded with a variety of colorful vegetables like bell peppers, onions, olives, mushrooms, and sometimes spinach. It's a healthier choice for pizza lovers.",
        "txtBtn": "Order now",

    },
    {
        "title": "Meat Lover's Pizza",
        "img": "images/piza_7.jpg",
        "txt": "Meat lover's pizza is a carnivore's dream, featuring a combination of various meats such as pepperoni, sausage, bacon, and sometimes ground beef or ham, along with tomato sauce and mozzarella cheese.",
        "txtBtn": "Order now",

    },
    {
        "title": "White Pizza",
        "img": "images/piza_8.jpg",
        "txt": "White pizza skips the tomato sauce and instead uses a creamy base typically made from ricotta cheese, mozzarella cheese, garlic, and olive oil. It can also include additional toppings like spinach, mushrooms, or artichoke hearts.",
        "txtBtn": "Order now",

    },
];

const flexContent = document.getElementById("flex-content") as HTMLDivElement;


myProps.forEach((value, index) => {

    const myDiv = document.createElement("div");

    let myContent = "<p class='myTitle'>" + value.title + "</p>";
        myContent += "<img src='" + value.img + "'></img>";
        myContent += "<p class='mainTxt'>" + value.txt + "</p>";
        myContent += "<button>" + value.txtBtn + "</button";


    myDiv.innerHTML = myContent;
    flexContent.appendChild(myDiv);
});
