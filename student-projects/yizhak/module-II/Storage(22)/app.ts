const body = document.querySelector("body") as HTMLBodyElement;

let Count = 0;

body.addEventListener("click", (e) => {
  Count++;
});

const numberTostr = JSON.stringify(Count);
localStorage.setItem("click", numberTostr);

body.style.backgroundColor = "white";

//לבדןק למה זה לא עובד!

const form = document.getElementById("form[login]")! as HTMLFormElement;
const username = document.getElementById("username") as HTMLInputElement;
const userpassword = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  localStorage.setItem("user name", username.value);
  localStorage.setItem("user password", userpassword.value);
  e.preventDefault();
});

const resetbtn = document.getElementById("reset")!;

resetbtn.addEventListener("click", (e) => {
  username.textContent = ""
  userpassword.textContent = ""
});
//עובדדדדד יש ברוך ה