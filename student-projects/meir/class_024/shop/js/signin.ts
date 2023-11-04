function validationSignin(event: any) {

    event.preventDefault();

    const email = document.querySelector("#email") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;

    const emailErr = document.querySelector("#email-error") as HTMLSpanElement;
    const passwordErr = document.querySelector("#password-error") as HTMLSpanElement;
    const signinErr = document.querySelector("#signin-error") as HTMLDivElement;


    const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value === "") {
        emailErr.innerHTML = "Email is required";
        return false;
    } else {
        emailErr.innerHTML = "";
    }

    if (!email.value.match(validRegexEmail)) {
        emailErr.innerHTML = "Email invalid";
        return false;
    } else {
        emailErr.innerHTML = "";
    }

    if (password.value === "") {
        passwordErr.innerHTML = "Password is required";
        return false;
    } else {
        passwordErr.innerHTML = "";
    }

    if (password.value.length < 8) {
        passwordErr.innerHTML = "Password is bigger then 8 characters";
        return false;
    } else {
        passwordErr.innerHTML = "";
    }


    let Regis: any = {};


    Regis = JSON.parse(localStorage.getItem("Registration") || "[]");

    for (let i = 0; i < Regis.length; i++) {

        if (Regis[i].email === email.value && Regis[i].password === password.value) {
            //Regis[i].haveSession = "OK";
            localStorage.setItem("Registration", JSON.stringify(Regis));
            setTempSession(Regis[i].email, Regis[i].password);
            signinErr.innerHTML = "";
            window.location.href = "checkUserForSession.html";
            break;
        } else {
            signinErr.innerHTML = "There is no mail with this password";
        }

    }

    return true;
}

let RegisTemp: any = [];

function setTempSession(a: string, b: string) {
    RegisTemp.push(a);
    RegisTemp.push(b)
    sessionStorage.setItem("tempSignIn", JSON.stringify(RegisTemp));
}




