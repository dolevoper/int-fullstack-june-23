console.log("connected");

const users = [
  { id: 1, email: "gili@gili.com", password: "Aa123456!", username: "gili" },
  {
    id: 2,
    email: "lilach@gmail.com",
    password: "Qazwsx123456!",
    username: "lilach",
  },
];

const onPickDate = (ev) => {
  // console.log(typeof(ev.target.value))
  const newDate = new Date(ev.target.value);
  const today = new Date();

  console.log(today.getMonth());
  console.log(newDate.getMonth());
  console.log(newDate.getTime())

  if (today.getTime() > newDate.getTime()) {

    console.log("past");
  } else {
    console.log("future")
  }
};

function log(event) {
//   console.log(new Date().getTime())
  
  var id = "id" + Math.random().toString(16).slice(2)
    
  console.log(id)
}

const handleLogin = (event: SubmitEvent) => {
  event.preventDefault();
  const email = event.target!.email.value;
  const password = event.target!.password.value;
  console.log(email, password);
  const userDB = users.find(
    (user) => user.email === email && user.password === password
  );
  if (userDB) {
    localStorage.setItem("userId", userDB.id.toString());
    window.location.href = "./dashboard.html";
  }
};

const handleLoad = () => {
  const userId = localStorage.getItem("userId");
  const userDB = users.find((user) => user.id === Number(userId));
  const usernameHello = document.querySelector("#username");
  usernameHello?.innerHTML = `${userDB?.username}`;
};

const handleLogout = () => {
  localStorage.removeItem("userId");
  window.location.href = "./index.html";
};
