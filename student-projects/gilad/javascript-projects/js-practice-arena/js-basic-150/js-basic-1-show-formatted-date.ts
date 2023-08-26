/*
    Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38

    My notes:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

    * I can fetch current date & time using Date object.

    * If I want to convert the Date object's returned values into a language representation
    of date/time I should use Intl object, specifically the Intl.DateTimeFormat.

*/

function displayCurrentDayTime() {

    // Get a new Date object with current time (no arguments = current datetime)
    const currentDate: Date = new Date();

    // Using Intl object to convert current day index to language representation
    // To set specific formats we can use the `options` argument, for example,
    // ask for numeric/short/long representation of date value.

    const day = Intl.DateTimeFormat( "default", { weekday: "long" } ).format(currentDate);
    const hour = Intl.DateTimeFormat( "default", { hour: "2-digit" } ).format(currentDate);
    const minutes = Intl.DateTimeFormat("default", { minute: "numeric" } ).format(currentDate);
    const seconds = Intl.DateTimeFormat("default", { second: "numeric" } ).format(currentDate);

    const msg = `Today is : ${day}\nCurrent time is : ${hour} : ${minutes} : ${seconds}`;
    
    return msg
}

console.log(displayCurrentDayTime());