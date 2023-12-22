document.querySelector(".bannerClose").addEventListener('click', function(){
    console.log(this);
    this.closest(".banner").remove();
})