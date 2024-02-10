/*
    3. save user preferences, (light mode, F or C etc)

    4. while the user is typing, save the field of the login form, so that when the user refreshes, it returns the data before refreshing.
    extra: prompt the user and see if he wants to retreive this data at all.
    extra extra: make it custom prompt.

*/

const preferences = prompt("Enter Fahrenheit temperature") as string;

localStorage.setItem("temperature", preferences + "deg");