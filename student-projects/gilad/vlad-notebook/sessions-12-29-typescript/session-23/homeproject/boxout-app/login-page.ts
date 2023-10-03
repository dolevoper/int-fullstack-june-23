import * as User from "./User.js";


function initLoginForm() {

    const client = new User.Client("vlad", "123")
    const admin = new User.Admin("vladik", "123")
    
    // User.clearCurrentUser();
    User.saveCurrentUser(client)
    const currentUser = User.loadCurrentUser();

    if(!currentUser)
        console.log("No user found in storage");
    if(currentUser instanceof User.Admin)
        console.log(currentUser.adminId)
    if(currentUser instanceof User.Client)
        console.log(currentUser.clientId)

}

function main() {
    console.log("login page");
    initLoginForm();
}


main();