let Count = 0;

const clickCountElement = document.getElementById("clickCount");

document.addEventListener("click", (e) => {
  JSON.stringify({ Count });
  Count++;
  //clickCountElement.textContent = Count;
});

localStorage.setItemetItem("Count", Count);

alert("ffffffffffffff");
