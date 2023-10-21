const body = document.querySelector("body") as HTMLBodyElement;

let Count = 0;

/*body.addEventListener("click", (e) => {
  Count++;
});

const numberTostr = JSON.stringify(Count);
localStorage.setItem("click", numberTostr); */

//לבדןק למה זה לא עובד!

const form = document.querySelector("form[name='login']") as HTMLFormElement;
const username = document.getElementById("username") as HTMLInputElement;
const userpassword = document.getElementById("password") as HTMLInputElement;
const resetbtn = document.getElementById("reset") as HTMLButtonElement;
const send = document.getElementById("btnsend") as HTMLButtonElement;// לבדוק למה זה null


type user = [
  username: string,
  userpassword: string
]

const userarr:user[] = []

if (!form) {
  console.error("Couldn't find the form.");
} else {
form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("user name", username.value);
  localStorage.setItem("user password", userpassword.value);
  //userarr.push(username.value , userpassword.value)
  console.log(userarr)
  window.location.href = "page.html";
});
}


resetbtn.addEventListener("click", (e) => {
  username.value = "";
  userpassword.value = "";
});





//עובדדדדד יש ברוך ה

const darkmode = document.getElementById("color")!;

darkmode.addEventListener("click", (e) => {
  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    darkmode.textContent = "light-mode";
  } else {
    darkmode.textContent = "dark-mode";
  }
});
//גם המצב לילה עובד ברוך ה