/*
    2. register user to an array, if user is already logged in, navigate to dashboard.
*/

let myArr: string[] = [];
const user = prompt("Enter your name");

const userNameVal = localStorage.getItem("userName");

if (userNameVal === null) { // לא קיים
    myArr.push(String(user));
    localStorage.setItem("userName", myArr)
} else {                   // קיים
    myArr.push(localStorage.getItem("userName"));
    const fromStorage = localStorage.getItem("userName");
    
    if (fromStorage.includes(String(user))) {
        alert('The user is include in array, navigate to dashboard');
        //dashboard();
      } else {
        alert('The user is NOT include in array');
      }

    //myArr.push(user);
    //localStorage.setItem("userName", myArr);
}