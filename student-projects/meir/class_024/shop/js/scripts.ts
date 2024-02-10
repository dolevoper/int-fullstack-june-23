/*
Level 1
    The app should have a form for adding new stuff.
    Once added a list of all the stuff should be updated bellow the form.
    The form should have some validation logic, use Errors and try/catch to validate the form and display the errors to the user on the page.
    The list should be persisted to local storage and loaded from there on page load.

Level 2
    Add a button to each item in the list that will delete the item from the list.
    Add a button to each item in the list that will edit the item.
    Add buttons to each item in the list to move the item up and down the list.

Level 3
    Add login and registration pages to the app.
    The login/register forms should have validation logic, similar to the form in level 1.
    Add a logout button to the app.
    Items in the list should be associated with the user that created them.

Level 4
    Add a list of users to the app.
    Add another entity to the app that is associated with users - for example likes, comments, etc.
    Make some functionality of the app available only to logged in users.
*/

var myProps = [
    {
        "title": "Hand Drills",
        "img": "images/prod_1.png",
        "txt": "Hand drills are the most basic type of drills and are operated manually by turning a handle. They are simple and versatile, making them suitable for small tasks and precision work. Hand drills are the most basic",
        "newPrice": "100",
        "oldPrice": "120",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Hand Drills",
        "img": "images/prod_2.png",
        "txt": "Cordless drills, also known as battery-powered drills, offer mobility and convenience. They are powered by rechargeable batteries, making them portable for various tasks, from woodworking to DIY projects.",
        "newPrice": "120",
        "oldPrice": "140",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Hammer Drills",
        "img": "images/prod_3.png",
        "txt": "Hammer drills combine drilling and hammering actions, making them suitable for drilling into hard materials like concrete and masonry. They provide rapid, powerful drilling with less effort.",
        "newPrice": "140",
        "oldPrice": "160",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Impact Drills",
        "img": "images/prod_4.png",
        "txt": "Impact drills deliver high rotational force, ideal for driving screws and fasteners into tough materials. They have a hammering mechanism that adds extra torque during operation. Impact drills deliver high rotational",
        "newPrice": "160",
        "oldPrice": "180",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Drill Presses",
        "img": "images/prod_5.png",
        "txt": "Drill presses are stationary tools used for precision drilling. They consist of a base, column, and adjustable worktable, allowing for accurate drilling of holes at specific angles and depths. Drill presses are stationary tools",
        "newPrice": "180",
        "oldPrice": "200",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Rotary Drills",
        "img": "images/prod_6.png",
        "txt": "Rotary drills are designed for heavy-duty applications, such as drilling large holes in wood, metal, and plastics. They offer adjustable speed settings for various tasks. Rotary drills are designed",
        "newPrice": "200",
        "oldPrice": "220",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Magnetic Drills",
        "img": "images/prod_7.png",
        "txt": "Magnetic drills are used for drilling large-diameter holes in metal. They feature a magnetic base that securely attaches to the workpiece, ensuring stability during drilling. Magnetic drills are used",
        "newPrice": "220",
        "oldPrice": "240",
        "txtBtn": "Details & Order",
    },
    {
        "title": "Core Drills",
        "img": "images/prod_8.png",
        "txt": "Angle drills have a compact, angled design that allows them to reach tight or awkward spaces where a regular drill cannot fit. They are commonly used in plumbing and electrical work. Angle drills have a compact",
        "newPrice": "240",
        "oldPrice": "260",
        "txtBtn": "Details & Order",
    },
];


localStorage.setItem("ObjectsTools", JSON.stringify(myProps));                          // insert all data objects to localstorage
const flexContent = document.getElementById("flex-content") as HTMLDivElement;
setBaket();

myProps.forEach((value, index) => {

    const myDiv = document.createElement("div");

    let myContent = "<p class='myTitle'><span>" + value.title + "</span></p>";
    myContent += "<img src='" + value.img + "'></img>";
    myContent += "<p class='mainTxt'>" + value.txt + "</p>";
    myContent += "<button id='prod_" + index + "' onclick='showProductPage(\"" + index + "\")'>" + value.txtBtn + "</button>";
    //myContent += "<button onclick='meir(\"" + value.title + "\")' id='sss'>" + value.txtBtn + "</button>";

    myDiv.innerHTML = myContent;
    flexContent.appendChild(myDiv);
});

/*
function meir(aa: string) {
    alert(aa)
}
*/

function showHideBoxs() {

    let filter = "";
    let txtValue: string = "";

    const input = document.getElementById("searchBox") as HTMLInputElement;
    filter = input.value.toUpperCase();

    const myFlex = document.getElementById("flex-content") as HTMLDivElement;
    const div = myFlex.getElementsByTagName("div");

    for (let i = 0; i < div.length; i++) {

        let mySpan = div[i].getElementsByTagName("span")[0];

        txtValue = mySpan.textContent || mySpan.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "block";
        } else {
            div[i].style.display = "none";
        }
    }

}

function showProductPage(myIndex: number) {
    window.location.href = "product.html?prod=" + myIndex + "";
}

function setBaket() {

    const tempEmailPass = JSON.parse(sessionStorage.getItem("tempSignIn") || "[]");
    const myBasket = document.querySelector("#basketProds") as HTMLSpanElement;

    let Regis: any = {};
    Regis = JSON.parse(localStorage.getItem("Registration") || "[]");

    for (let i = 0; i < Regis.length; i++) {

        if (Regis[i].email === tempEmailPass[0] && Regis[i].password === tempEmailPass[1]) {     // Have session
            myBasket.innerHTML = Regis[i].shoping;
        }

    }

}