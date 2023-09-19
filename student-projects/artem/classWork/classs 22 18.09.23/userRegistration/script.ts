function isUserLoggedIn() {
  const userName = localStorage.getItem("userName");
  console.log(userName, "alredy in storage");
  return !!userName;
}

function registerUser(event: Event) {
  event.preventDefault();

  const userNameInput = document.getElementById("userName") as HTMLInputElement;

  const userNameFromInput = userNameInput.value.trim();

  const userNameForChecking = localStorage.getItem(`${userNameFromInput}`);

  if (userNameFromInput === userNameForChecking) {
    alert("User is already logged in. Redirecting to the dashboard.");
    window.location.href = "dashboard.html";
  } else {
    localStorage.setItem(`${userNameFromInput}`, userNameFromInput);
    alert(`Welcome ${userNameFromInput}!`);
  }

  //   if (!userName) {
  //     alert("Please enter username!");
  //     return;
  //   }

  //   if (isUserLoggedIn()) {
  //     alert("User is already logged in. Redirecting to the dashboard.");
  //     window.location.href = "dashboard.html";
  //   } else {
  //     localStorage.setItem("userName", userName);
  //     alert(`Welcome ${userName}!`);
  //   }
}

function initializeRegistrationForm() {
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", registerUser);
  }
}

window.addEventListener("load", () => {
  if (!isUserLoggedIn()) {
    initializeRegistrationForm();
  }
});
