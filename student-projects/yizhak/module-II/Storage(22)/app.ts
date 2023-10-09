const body = document.querySelector("body") as HTMLBodyElement;


let Count = 0;

body.addEventListener("click", (e) => {
  
  Count++;
  
});

const numberTostr = JSON.stringify(Count);
  localStorage.setItem("click", numberTostr);

body.style.backgroundColor = "white";

//לבדןק למה זה לא עובד!

const form = document.getElementById("form[login]") as HTMLFormElement;
const username = document.getElementById("username") as HTMLFormElement;
const password = document.getElementById("password") as HTMLFormElement;


localStorage.setItem("username", username);
localStorage.setItem("password", userpassword);
