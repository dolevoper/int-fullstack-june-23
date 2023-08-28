/*
    Problem Definition: write a program that checks whether a string is a palindrome

    1.  Recieve a string of text/numbers as a variable named "text".

    2.  Iterate through each character of "text".
        repeat text's length times, each iteration corresponds to the current character of text:
            2.1 reffer to the current character of "text" from the START of "text".
            2.2 reffer to the current character of "text" from the END of "text".
            2.3 Compare both reffered characters:
                2.3.1 if the characters are not equal: return FALSE.
                2.3.2 else continue iteration.
                
    3.  If iteration completed successfully, return TRUE.
*/

function isPalindrome(text: string) {
  for (let currentChar = 0; currentChar < text.length; currentChar++) {
    if (text[currentChar] !== text[text.length - 1 - currentChar]) return false;
  }
  return true;
}
