console.log("connected")

const handleRegister = async (ev) => {
    try {
        ev.preventDefault()
        console.log(ev)
        const password = ev.target.password.value;
        const email = ev.target.email.value;

        if (!email || !password) throw new Error("password and email requierd");

        const response = await axios.post("/api/users", {email, password});

        console.log(response)
    
    } catch (error) {
        console.error(error)
    }
}

// decoding cookie example - client side

async function handleCheckIfUserIsconnected() {
    try {
      //@ts-ignore
      const { data } = await axios.get("/api/users/get-user-by-cookie");
      const { userDB } = data;
  
      console.log("user has connected!")
    } catch (error) {
      console.error(error);
    }
  }