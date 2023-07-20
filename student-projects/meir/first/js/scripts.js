var swap = 0;
function swaper() {

    if (swap == 0) {
        document.getElementById("aaa").style.display = "inline-block";
        document.getElementById("bbb").innerHTML = "&#10005;";

        swap = 1;
    } else {
        document.getElementById("aaa").style.display = "none";
        document.getElementById("bbb").innerHTML = "&#9776;";
        swap = 0;
    }

}