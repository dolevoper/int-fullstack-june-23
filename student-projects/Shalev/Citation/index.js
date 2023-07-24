document.addEventListener("DOMContentLoaded", function () {
    const citationLink = document.querySelector(".citation");
    citationLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    });
});