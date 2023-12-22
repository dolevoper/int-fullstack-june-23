type gender = "male" | "female";

type user = {
    firstName: string;
    lastName: string;
    age: string;
    gender: gender;
    email: string;
    userName: string;
    password: string;
};

type usersArray = user[];

const users : usersArray = [];
const addUsersForm = document.querySelector("form[name='add-new-user']") as HTMLFormElement | null;

let usersNumber:  any  = localStorage.getItem('usersNumber');

if (!usersNumber) {
    usersNumber = 0;
} 

localStorage.setItem('usersNumber', usersNumber.toString());

if (!addUsersForm) {
    console.error("couldnt find add user form");
} else {
    addUsersForm.addEventListener("submit", function(e){
        e.preventDefault();

        const formData = new FormData (e.target as HTMLFormElement);

        for (let i=0; i<usersNumber; i++) {
            let userData = localStorage.getItem(("user " + (i+1) + " info").toString());
            let userNameCheck = getRequiredString(formData, "user-name");
            let passwordCheck = getRequiredString(formData, "password");

            if (userData && userData.includes(userNameCheck) === true && userData.includes(passwordCheck) === true) {
                // location.href="homepage.html";
                console.log ("exist");
            } 
        }
        users.push({
            firstName: getRequiredString(formData, "first-name"),
            lastName: getRequiredString(formData, "last-name"),
            age: getRequiredString(formData, "age"),
            gender: genderCheck(getRequiredString(formData, "gender")),
            email: getRequiredString(formData, "email"),
            userName: getRequiredString(formData, "user-name"),
            password: getRequiredString(formData, "password")
        });

        console.log(users);
        
        usersNumber++;
        localStorage.setItem('usersNumber', usersNumber.toString());
        
        const stringifiedObject = JSON.stringify(users[users.length-1]);
        const userInfo = ("user " + (usersNumber) + " info").toString();
    
        localStorage.setItem(userInfo, stringifiedObject);
        console.log(localStorage.getItem("usersNumber"));
    });
}


function getRequiredString(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
}

function genderCheck(value: string): gender {
    if (value !== "male" && value !== "female") {
        throw new Error(`Invalid gender: ${value}`);
    }

    return value;
}



