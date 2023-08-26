/* 
    Exercise: 
        Write a JavaScript program to print the current window contents.

    Vlad's Notes:
        We can use the `window:print()` instance method to print the whole `window` object
        method.
        https://developer.mozilla.org/en-US/docs/Web/API/Window
        https://developer.mozilla.org/en-US/docs/Web/API/Window/print
*/

function printPage() {

    window.print();
}

printPage();