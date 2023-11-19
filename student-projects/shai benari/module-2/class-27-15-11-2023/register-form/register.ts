const lable1 = document.getElementById('username') as HTMLAnchorElement;
lable1.insertAdjacentHTML("beforebegin", '<label for="username"> Username</label>')

const lable2 = document.getElementById('password') as HTMLAnchorElement || null;

lable2.insertAdjacentHTML("beforebegin", '<label for="password"> Password</label>')

const lable3 = document.getElementById('confirmPassword') as HTMLAnchorElement;
lable3.insertAdjacentHTML("beforebegin", '<label for="confirmPassword"> Confirm Password</label>')

// const checkInput = (event) => {
// const errorEelement = Array.from(event.target.parentNode.querySelectorAll('span'));
// if(event.target.value === " " && !errorEelement.length ){
//    event.target.insertAdjacentHTML("afterend", '<span class="mesge" style="color: red;">Requierd</span>');

// }
// // if(errorEelement && event.target.value !== " "  ){
// //     errorEelement.forEach(elem => elem.remove());
// // }
// }
// document.getElementById("username")?.addEventListener('blur' , checkInput );
// document.getElementById("password")?.addEventListener('blur' , checkInput );
// document.getElementById("confirmPassword")?.addEventListener('blur' , checkInput );

// document.getElementById('confirmPassword')?.addEventListener('blur',(e) =>{
//     if(e.target !== document.getElementById("password")){
//     e.target?.insertAdjacentHTML("afterend", '<span class="mesge" style="color: red;">Requierd</span>');
//     }
// });

// const btn = document.querySelector('button');
// btn!.setAttribute('disabled', 'disabled');
// document.getElementById("registrationForm")?.addEventListener('change',(event)=>{
//     const formIsFilled = Array.from(document.querySelectorAll("input"))
//     .every(input => input.value)
//     if(formIsFilled){
//        btn?.removeAttribute("disabled") 
//     }else{
//         btn?.setAttribute('disabled', 'disabled');
//     }
//   console.log(formIsFilled)
//   console.log(btn)
// });
const form = document.getElementById('registrationForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add("alert" , "alert-sessful");
    alert.innerText = "the form was regitrated"
    form.prepend(alert);

} )

