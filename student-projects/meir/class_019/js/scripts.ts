
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


