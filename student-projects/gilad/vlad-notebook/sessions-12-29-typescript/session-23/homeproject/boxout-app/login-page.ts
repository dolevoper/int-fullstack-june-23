import { SmartForm, ValidatableInput } from "./SmartForm.js"
import { InvalidPassword, UserNotFound, UsersManager } from "./UsersManager.js"
import * as LoginValidators from "./LoginValidators.js"
import { Admin, Client } from "./User.js"

const usersManager = new UsersManager()

function skipLoginIfAlreadySignedIn() {
    if (!usersManager.currentUser)
        return;
    if (usersManager.isCurrentUserAdmin())
        openAdminDashboard();
    if (usersManager.isCurrentUserClient())
        openClientDashboard();
}

function initLoginForm() {

    const smartForm = new SmartForm("login-form");

    const username = smartForm.getInput("login-username") as ValidatableInput<string>;
    username.addValidator(LoginValidators.lengthValidation);
    username.addValidator(LoginValidators.mustBeValidEmail)

    const password = smartForm.getInput("login-password") as ValidatableInput<string>;
    password.addValidator(LoginValidators.specialCharValidation);
    password.addValidator(LoginValidators.lengthValidation);
    password.addValidator(LoginValidators.mustContainVlad);

    const remember = smartForm.getInput("login-remember") as ValidatableInput<boolean>;
    // remember.addValidator(LoginValidators.checkedValidation)

    smartForm.onSubmit((event) => {
        event.preventDefault();

        if (smartForm.validate()) {
            const loginResult = usersManager.login(username.getValue(), password.getValue());

            if (loginResult instanceof UserNotFound) {
                console.log("user not found!")
                return;
            }
            if (loginResult instanceof InvalidPassword) {
                console.log("invalid password")
                return;
            }
            if (remember.getValue())
                usersManager.saveCurrentUser(loginResult);

            if (UsersManager.isAdmin(loginResult)) {
                openAdminDashboard();
            }
            else if (UsersManager.isClient(loginResult)) {
                openClientDashboard();
            }

        }
    });
}

function openAdminDashboard() {
    console.log("Opening admin dashboard")
}

function openClientDashboard() {
    console.log("Opening client dashboard")
}

function main() {
    skipLoginIfAlreadySignedIn();
    initLoginForm();
}

usersManager.registerUser(Admin, "Admin@gmail.com", "1234Vlad")
usersManager.registerUser(Client, "Client@gmail.com", "Vlad1234")
usersManager.registerUser(Client, "Client2@gmail.com", "Vlad12345")

main();