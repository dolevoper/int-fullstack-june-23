console.log("connected");
const handleGetData = async () => {
  try {
    console.log("start");
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(response);
    const result = await response.json();
    console.log(result);
    console.log("after function and data");

    const image = document.querySelector("#img") as HTMLImageElement;
    image.src = result.message;
  } catch (error) {
    console.error(error);
  }
  console.log("after catch");
};

// solution for callback hell
// const a = async() => {
//    try {
//     const resultFromA = await fetch("https://dog.ceo/api/breeds/image/random");
//     const resultFromB = await fetch(resultFromA);
//     const resultFromC = await fetch(resultFromB);
//    } catch (error) {
//     console.error
//    }
// }

const handlePromise = () => {
  console.log("promise start");
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 5000);
  });

  myPromise
    .then((data) => {
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("promise end");
};

// handlePromise();

handleGetData();
console.log("end");

// async await login function
const handleLogin = async (ev: SubmitEvent) => {
  try {
    ev.preventDefault();
    console.log("test");
    const username = ev.target?.username.value;
    const password = ev.target?.password.value;
    if (!username || !password) {
      throw new Error(
        "no data from client in FUNCTION handleLogin on FILE app.ts"
      );
    }

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log("end async await")
  } catch (error) {
    console.error(error);
    console.log("this is catch");
    handleErrors(error);
  }
};
// with Promise login function
const handleLoginPromise = async (ev: SubmitEvent) => {
  ev.preventDefault();
  console.log("test");
  const username = ev.target?.username.value;
  const password = ev.target?.password.value;
  if (!username || !password) {
    throw new Error(
      "no data from client in FUNCTION handleLogin on FILE app.ts"
    );
  }

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then(console.log);
    console.log("after promise")
};

const handleErrors = (errorToDisplay) => {
  console.log("enter error");
  const root = document.querySelector("#root") as HTMLDivElement;
  if (errorToDisplay && errorToDisplay.message) {
    console.log("enter error if");
    root.innerHTML = `${errorToDisplay.message}`;
  }
};
