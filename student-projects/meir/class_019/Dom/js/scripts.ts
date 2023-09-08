/*

# Easy
- Create an object array with information
- Dump the array into the HTML page using 'innerHTML'
- Use an external CSS file to format the page

Notes
- 'innerHTML' only accepts a single value. Use array method to create a single HTML fragment (string) to populate it.
- The actual HTML elements used for 'innerHTML' doesn't matter (use '<p>', a '<ul>' '<li>' combo or anything else).

### Medium
- Add an image property to the class pointing a local image file for each instance.
- Include the image in the HTML output.

### Advanced
- Repeat the medium assignment using 'document.createElement()'
- Don't use 'innerHTML' at all

//
combine the system you create in the lastlesson with what you learned today!
ex: Create a user card and add it to dom, remove a defeted monster etc.

*/

const myUl = document.querySelector("#myUlId");

if(myUl){
    alert("The element '#myUlId' exists");
}else{
    alert("The element '#myUlId' not exists");
}



let myClassLi = document.querySelectorAll(".myLiclass");
if(myClassLi){
    alert("The class '.myLiclass' exists");
}else{
    alert("The class '.myLiclass' not exists");
}
console.log(myClassLi.length);

for(let i=0; i<myClassLi.length;i++){
    alert(i);
}


