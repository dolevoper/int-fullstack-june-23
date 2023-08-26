/* 
    Exercise: 
        Write a JavaScript program to get the current date.  
        Expected Output :
        mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

    Vlad's Notes:
    Same as exercise 1, we can get the current date using `Date` object
    and use Intl localization for the date numeric values.

    This time, I want to make the function a little bit more usefull by formatting 
    the current date according to the requested format.

    * I'll be using string.includes() to check if '-' or '/' are the requested seperators
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


    * I'll be splitting the requested format, and place day/month/year according to the
      format's order.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    
    * I'll be iterating over the splitted format array and change the date component (mm or dd or yyyy)
      with actual date values, using array's .map method 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    * Then I'll be using the .join method to join back the sperated date values with the original
      seperator.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    * I'll be chaining the last 3 actions to practice chaining
      
*/

function formatCurrentDate(formatString: string) {
    
    // Get current date with Date object
    const currentDate: Date = new Date();

    // Use Intl to get formatted results from Date object
    const day = Intl.DateTimeFormat("default", { day: "2-digit" }).format(currentDate);
    const month = Intl.DateTimeFormat("default", { month: "2-digit" }).format(currentDate);
    const year = Intl.DateTimeFormat("default", { year: "numeric" }).format(currentDate);
    
    // Using ternary, check whether requested format contains '/' or '-' using include()
    const seperator: string = ( (formatString.includes('/') ? '/' : '-'));

    // 1.  Split the current format by / or - 
    // 2. Use map on array to replace date component representation (dd or mm or yyyy)
    // to the actual date while keeping the same order.
    // 3. Join the newly created ordered date values array using .join with the original seperator.
    // notice that we chained .split .map and .join

    const dateFormatted = formatString
        .split(seperator)

        .map( component => {
        
            switch (component) {
                case 'dd': return day;
                case 'mm': return month;
                case 'yyyy': return year;
            }
        })

        .join(seperator);

    return dateFormatted;    
}

// Try: 
// mm-dd-yyyy
// mm/dd/yyyy
// dd-mm-yyyy
// dd/mm/yyyy
console.log( formatCurrentDate("mm/dd/yyyy") );