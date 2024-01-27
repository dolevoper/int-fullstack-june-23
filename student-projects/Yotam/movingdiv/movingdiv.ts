document.addEventListener("keydown", (event: KeyboardEvent) => {

    const movingDiv = document.querySelector(".movingDiv") as HTMLElement;

    //if (movingDiv === null) { console.log("got null"); }

    if (movingDiv !== null) {

        console.log(`Key pressed: ${event.key}`);

        if (event.key === "ArrowUp" || event.key === "w") {

            let currentTop = parseInt(getComputedStyle(movingDiv).top);
            currentTop--;
            movingDiv.style.top = currentTop + "px";
        } else

        if (event.key === "ArrowDown" || event.key === "s") {

            let currentTop = parseInt(getComputedStyle(movingDiv).top);
            currentTop++;
            movingDiv.style.top = currentTop + "px";
        } else

        if (event.key === "ArrowLeft" || event.key === "a") {

            let currentLeft = parseInt(getComputedStyle(movingDiv).left);
            currentLeft--;
            movingDiv.style.left = currentLeft + "px";
        } else

        if (event.key === "ArrowRight" || event.key === "d") {

            let currentLeft = parseInt(getComputedStyle(movingDiv).left);
            currentLeft++;
            movingDiv.style.left = currentLeft + "px";
        }

    } else {

        console.log("Could not get the element data!"); 
    }
});