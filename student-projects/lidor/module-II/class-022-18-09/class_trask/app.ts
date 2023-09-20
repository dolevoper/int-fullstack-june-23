/*function clickcounte() {
    let Counter = 0;

    document.addEventListener('click', function () {
        Counter++;
        window.localStorage.setItem('Counter', Counter.toString());
    });

    console.log(Counter); 
}

clickcounte(); 
*/

type users = {
    username: string;
    password: string;
    age : number;
    email: string;

}

type userArray = users[];
const users: userArray = [];

const addUserForm = document.querySelector("form[name='add_user']") as HTMLFormElement | null;
if (!addUserForm) {
    console.error("Couldn't find add user form.");
} else {
    addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        users.push({
            username:getRequiredString(formData, "username"),
            password: getRequiredString(formData, "password"),
            age: getRequiredNumber(formData,"age"),
            email:getRequiredString(formData, "email") ,
        });
        console.log(users);
        
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

function getRequiredNumber(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) {
        throw new Error(`Value of field ${key} is not a valid number!`);
    }

    return numericValue;
}



function getRequiredString(formData: FormData, key: string) {
    const value = getString(formData, key);

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;


   
}
 
function isUserDuplicate(newUser) {
    return users.some(user =>
        user.username === newUser.username ||
        user.password === newUser.password ||
        user.email === newUser.email
    );
}