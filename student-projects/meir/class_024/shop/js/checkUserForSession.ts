
const tempEmailPass = JSON.parse(sessionStorage.getItem("tempSignIn") || "[]");
const myBasket = document.querySelector("#basketProds") as HTMLSpanElement;

let Regis: any = {};
Regis = JSON.parse(localStorage.getItem("Registration") || "[]");

for (let i = 0; i < Regis.length; i++) {

    if (Regis[i].email === tempEmailPass[0] && Regis[i].password === tempEmailPass[1]) {     // Have session

        Regis[i].shoping = String(Number(Regis[i].shoping) + 1);
        localStorage.setItem("Registration", JSON.stringify(Regis));

        myBasket.innerHTML = Regis[i].shoping;

    }

}
