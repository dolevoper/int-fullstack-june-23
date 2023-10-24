const firstName = "shai"
const lastName = "benari"
window.sessionStorage.setItem("first name" ,firstName);
window.localStorage.setItem("last name" , lastName);

type age = "under 18" | "18-30" | "31-50" | "51-70" | "above 70";
type gender = "male" | "fmale";

type UserData = {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    gender: gender;
    age: age;
}
type UserDataArry = UserData[];
const UsersData: UserDataArry =[];

const addUserForm = document.querySelector("form[class='home']") as HTMLFormElement | null;
if (!addUserForm) {
    console.error("Couldn't find add user form.");
} 
else {
    addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);


UsersData.push({
    firstName: getRequiredString(formData, "firstName"),
    lastName: getRequiredString(formData, "lastName"),
    password: getRequiredString(formData, "password"),
    confirmPassword: getRequiredString(formData, "confirmPassword"),
    gender: parseGender(getRequiredString(formData, "gender")),
    age: parseAge(getRequiredString(formData, "age")),

})
});
}

function getString(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        return undefined;
    }
    return value;
}
function getRequiredString(formData: FormData, key: string) {
    const value = getString(formData, key);

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
}
function parseGender(value: string): gender {
    if (value !== "male" && value !== "fmale" ) {
        throw new Error(`Invalid gender type: ${value}`);
    }

    return value;
}
function parseAge(value: string): age {
    if (value !== "under 18" && value !== "18-30" && value !== "31-50" && value !== "51-70"  && value !== "above 70") {
        throw new Error(`Invalid age type: ${value}`);
    }
    return value;
}
