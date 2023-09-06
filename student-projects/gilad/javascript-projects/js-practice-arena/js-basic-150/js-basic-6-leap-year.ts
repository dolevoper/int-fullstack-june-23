/* 
    Exercise: 
        Write a JavaScript program to determine whether a given year is a 
        leap year in the Gregorian calendar. 

    Vlad's Notes:

    The gregorian calendar, established in 1582 by Pope Gregory XIII, has 365 days in a year, 
    while the astronomical year (or solar year) takes 365.25 days to complete (a quarter 1/4 day more).
    To compensate for the quarter days that desynchronize between the two calendars, we add an additonal
    day every fourth day.
    https://en.wikipedia.org/wiki/Leap_year

    To calculate if a year is a "leap year" all we need to do is to check whether the given criterea
    are valid:
    1. the year is evenly divisible by 4.
    2. if it's divisible by 4, but not by 100.
    3. if it's divisible by 4, and by 100, then only if it also divisible by 400.

    check if the year is divisible by 100.
    if yes - it must be divisible by 4 and 400.
    if no - it must be divisible by 4.
    
    we can see that if the year is divisible by 100, it must be divisible by 400. so:

    is divisible by 100?
    if yes - must be divisible by 400.
    if no - must be divisible by 4.


*/

function isLeapYear( year: number ) {

//            is by 100?           if yes, is by 400?     if no, is by 4?
    return ( year % 100 === 0 ) ? ( year % 400 === 0 ) : ( year % 4 === 0 );
}

// To test the funciton, we'll feed it with a list of known leap & common years :
// 1972, 1700, 1800, 100, 2024
console.log( `The year 1972 is a leap year: ${isLeapYear(1972)}` );
console.log( `The year 1700 is a leap year: ${isLeapYear(1700)}` );
console.log( `The year 1800 is a leap year: ${isLeapYear(1800)}` );
console.log( `The year 100 is a leap year: ${isLeapYear(100)}` );
console.log( `The year 2024 is a leap year: ${isLeapYear(2024)}` );