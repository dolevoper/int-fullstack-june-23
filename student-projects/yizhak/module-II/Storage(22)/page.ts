
const btnlogout = document.getElementById("logout") as HTMLButtonElement;

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("userpassword");
    window.location.href = "index.html";
    alert("you logout");
    return
}

btnlogout.addEventListener("click", logout);
