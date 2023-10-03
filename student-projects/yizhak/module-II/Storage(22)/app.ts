const body = document.querySelector("body") as HTMLBodyElement;


let Count = 0;

body.addEventListener("click", (e) => {
  
  Count++;
  
});

const numberTostr = JSON.stringify(Count);
  localStorage.setItem("click", numberTostr);

body.style.backgroundColor = "blue";

//לבדןק למה זה לא עובד!


