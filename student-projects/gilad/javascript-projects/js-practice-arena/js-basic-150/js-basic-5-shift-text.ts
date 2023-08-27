/* 
    Exercise: 
        Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
        This is done by periodically removing one letter from the string end and attaching it to the front.  

    Vlad's Notes:

    * The text rotation is recognisable as shift ! 
      Arrays have the `shift()` method, and an indentical operation can be done with `substring` with strings.
     
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

    * notice that the exercise specifically asks for right-shifting, so the operation will be:
    substring the last character using `.length` property of string.
    String length gives the number of characters in a string, while tring index starts with 0, therefore 
    I'll need to refer to the string.length - 1 character. 
    
    Because of that, we can simplify the whole process with using the .slice method which handles negative
    indexes, and cutting the last character text.substring( text.length -1 ) becomes as simple as text.slice(-1).

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

    * I'll slice the last character and add it to the slice of whole text up until the last character.
*/

function textShiftRight( text: string ) {

    return text.slice( -1 ) + text.slice( 0, - 1);
}

function textShiftLeft( text: string ) {

    return  text.slice( 1 ) + text.slice( 0, 1 );
}

console.log(textShiftRight("hello"));

