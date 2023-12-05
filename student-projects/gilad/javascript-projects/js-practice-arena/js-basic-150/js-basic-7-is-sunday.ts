/* 
    Exercise: 
    Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

    Vlad's Notes:

    I'll be using the Date object and manually enter the date and recieve the day index of the week
    with ".getDay()"
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

    The Date object has a constructor which can recieve the day,month,year seperatly. This helps
    us when inserting the date with a loop because it helps us to avoid `Format Literals` ( or 
    as known as string interpolation)
    NOTICE! When inserting date components as individual arguments, the month argument uses 
    "MONTH INDEX" which starts with 0 , an so we must use month-1 .
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    
    Using the for loop, i'll be able to loop across a range of years to manually insert them
    in the Date object.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

    

    1. I'll create a function that recieves a range of years and it'll loop between the given range.
      for each year, we'll create a new Date object with the date 1/january and assign the index
      as the year.

    2. After that, I'll get the day's week index using .getDay() method.

    3. if the return value equals to 0 - it means it's sunday! :) ( 0 - 6 = Sunday - Saturday)
*/

function isSundayBetween( startYear: number, endYear: number ) {

    let sundayCounter: number = 0;
    // loop between year range
    for (let year = startYear; year < endYear; year++) {
        
        // for each year, get the day index and check if it's sunday (equals 0).
        if (new Date( year, 0, 1).getDay() === 0) {
            sundayCounter++;
        }
    }

    console.log(`The 1st of January will be a Sunday ${sundayCounter} times between the years ${startYear} - ${endYear}`);
}

isSundayBetween(2014, 2050);