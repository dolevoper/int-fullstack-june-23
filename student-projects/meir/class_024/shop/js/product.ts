
setBaket();

const urlParams = new URLSearchParams(window.location.search);
urlParams.toString();
const indexProdParam = Number(urlParams.get('prod'));

let ages = JSON.parse(localStorage.getItem("ObjectsTools") || "[]");
const setProd = document.querySelector("#prodWrap") as HTMLDivElement

if (indexProdParam >= ages.length) {
    setProd.innerHTML = "<span class='noProd'>Sorry, there is no products right now!</span>";
}

for (let i = 0; i <= ages.length - 1; i++) {

    if (i === indexProdParam) {

        ages = JSON.parse(localStorage.getItem("ObjectsTools") || "[]")[indexProdParam];

        let choosenProd = "<div class='flex-content-prod'>";
        choosenProd += "<div id='demo'><img src='" + ages.img + "' class='prodImg'></div>";
        choosenProd += "<div id='detailes'>";
        choosenProd += "<p class='prodTitle'>" + ages.title + "</p>";
        choosenProd += "<ul>";
        choosenProd += "<li>" + ages.txt + "</li>";
        choosenProd += "</ul>";
        choosenProd += "<p class='newPrc'><span>New Price</span> $ " + ages.newPrice + "</p>";
        choosenProd += "<p class='oldPrc'>Old Price $ <span>" + ages.oldPrice + "</span></p>";
        choosenProd += "<a href='checkUserForSession.html' class='buyit'>Add to cart</button>";
        choosenProd += "<a href='#' class='buyit'>Buy now</button>";
        choosenProd += "</div>";
        choosenProd += "</div>";

        setProd.innerHTML = choosenProd;

    }

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

