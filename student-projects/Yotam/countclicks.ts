const pagebody = document.querySelector('.root');
localStorage.setItem("clix", "0");


    pagebody.addEventListener("click", () => {
        const previousClicks = localStorage.getItem("clix");
    
        console.log("test");
    
        if (previousClicks) {
            localStorage.setItem("clix",(parseInt(previousClicks) + 1).toString());
            console.log("click");
        }
    });
   

function handleClick(event: Event) {

    const previousClicks = localStorage.getItem("clix");
    
    console.log(event);

    if (previousClicks) {
        localStorage.setItem("clix",(parseInt(previousClicks) + 1).toString());
        console.log("click");
    }

}