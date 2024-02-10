
function validationRegister(event: any) {

    event.preventDefault();

    let Regis: any = {};

    const firstName = document.querySelector("#firstName") as HTMLInputElement;
    const lastName = document.querySelector("#lastName") as HTMLInputElement;
    const idNumber = document.querySelector("#idnumber") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const phone = document.querySelector("#phone") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    const confirmPassword = document.querySelector("#confirmpassword") as HTMLInputElement;
    const city = document.querySelector("#city") as HTMLInputElement;
    const street = document.querySelector("#street") as HTMLInputElement;
    const housenumber = document.querySelector("#housenumber") as HTMLInputElement;


    const firstNameErr = document.querySelector("#firstName-error") as HTMLSpanElement;
    const lastNameErr = document.querySelector("#lastName-error") as HTMLSpanElement;
    const idnumberErr = document.querySelector("#idnumber-error") as HTMLSpanElement;
    const emailErr = document.querySelector("#email-error") as HTMLSpanElement;
    const phoneErr = document.querySelector("#phone-error") as HTMLSpanElement;
    const passwordErr = document.querySelector("#password-error") as HTMLSpanElement;
    const confirmpasswordErr = document.querySelector("#confirmpassword-error") as HTMLSpanElement;
    const cityErr = document.querySelector("#city-error") as HTMLSpanElement;
    const streetErr = document.querySelector("#street-error") as HTMLSpanElement;
    const housenumberErr = document.querySelector("#housenumber-error") as HTMLSpanElement;


    const letters =   /^[A-Za-z\s]*$/
    const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName.value === "") {
        firstNameErr.innerHTML = "First Name is required";
        firstName.focus();
        return false;
    } else {
        firstNameErr.innerHTML = "";
    }

    if (!firstName.value.match(letters)) {
        firstNameErr.innerHTML = "First Name must be only string";
        firstName.focus();
        return false;
    } else {
        firstNameErr.innerHTML = "";
    }

    if (lastName.value === "") {
        lastNameErr.innerHTML = "Last Name is required";
        lastName.focus();
        return false;
    } else {
        lastNameErr.innerHTML = "";
    }

    if (!lastName.value.match(letters)) {
        lastNameErr.innerHTML = "Last Name must be only string";
        lastName.focus();
        return false;
    } else {
        lastNameErr.innerHTML = "";
    }
    
    if (idNumber.value === "") {
        idnumberErr.innerHTML = "ID number is required";
        idNumber.focus();
        return false;
    } else {
        idnumberErr.innerHTML = "";
    }

    if (/^[0-9]+$/.test(idNumber.value) === false) {
        idnumberErr.innerHTML = "ID number is only numbers";
        idNumber.focus();
        return false;
    } else {
        idnumberErr.innerHTML = "";
    }

    if (email.value === "") {
        emailErr.innerHTML = "Email is required";
        email.focus();
        return false;
    } else {
        emailErr.innerHTML = "";
    }

    if (!email.value.match(validRegexEmail)) {
        emailErr.innerHTML = "Email invalid";
        email.focus();
        return false;
    } else {
        emailErr.innerHTML = "";
    }

    if (phone.value === "") {
        phoneErr.innerHTML = "Phone is required";
        phone.focus();
        return false;
    } else {
        phoneErr.innerHTML = "";
    }

    if (phone.value.length < 10 ) {
        phoneErr.innerHTML = "Phone must equal 10 digits";
        phone.focus();
        return false;
    }else{
        phoneErr.innerHTML = "";

    if (/^[0-9]+$/.test(phone.value) === false) {
        phoneErr.innerHTML = "Phone is only numbers";
        phone.focus();
        return false;
    } else {
        phoneErr.innerHTML = "";
    }

    if (password.value === "") {
        passwordErr.innerHTML = "Password is required";
        password.focus();
        return false;
    } else {
        passwordErr.innerHTML = "";
    }

    if (password.value.length < 8) {
        passwordErr.innerHTML = "Password is bigger then 8 characters";
        password.focus();
        return false;
    }else{
        passwordErr.innerHTML = "";
    }

    if (confirmPassword.value === "") {
        confirmpasswordErr.innerHTML = "Confirm password is required";
        confirmPassword.focus();
        return false;
    } else {
        confirmpasswordErr.innerHTML = "";
    }

    if (confirmPassword.value.length < 8) {
        confirmpasswordErr.innerHTML = "Confirm password is less then 8 characters";
        confirmPassword.focus();
        return false;
    }else{
        passwordErr.innerHTML = "";
    }

    if (password.value !== confirmPassword.value) {
        confirmpasswordErr.innerHTML = "Password and confirm Password did not match";
        return false;
    } else {
        confirmpasswordErr.innerHTML = "";
    }

    if (city.value === "") {
        cityErr.innerHTML = "City is required";
        city.focus();
        return false;
    } else {
        cityErr.innerHTML = "";
    }

    if (!city.value.match(letters)) {
        cityErr.innerHTML = "City must be only string";
        city.focus();
        return false;
    } else {
        cityErr.innerHTML = "";
    }

    if (street.value === "") {
        streetErr.innerHTML = "Street is required";
        street.focus();
        return false;
    } else {
        streetErr.innerHTML = "";
    }

    if (housenumber.value === "") {
        housenumberErr.innerHTML = "House number is required";
        housenumber.focus();
        return false;
    } else {
        housenumberErr.innerHTML = "";
    }

    if (/^[0-9]+$/.test(housenumber.value) === false) {
        housenumberErr.innerHTML = "House number is only numbers";
        housenumber.focus();
        return false;
    } else {
        housenumberErr.innerHTML = "";
    }
    

    const RegForm = document.querySelector("#RegistrationForm") as HTMLFormElement;
    const fd = new FormData(RegForm);
    const obj = Object.fromEntries(fd);
    
    Regis = JSON.parse(localStorage.getItem("Registration") || "[]");
    Regis = [...Regis, obj];
    localStorage.setItem("Registration", JSON.stringify(Regis));
    RegForm.reset();
    
    window.location.href = "signin.html";

    //localStorage.setItem("Signin", "Ok");
    

    return true;
}