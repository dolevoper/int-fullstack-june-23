//**********************************easy ************************************************** 

//************************************************************* 


function baloons() {
    const div = document.createElement("div") as HTMLDivElement
    document.body.appendChild(div)
    const baloon = document.createElement("img") as HTMLImageElement
    div.appendChild(baloon)
    baloon.setAttribute("src", "https://png.pngtree.com/element_our/png/20180807/baloon-png_56687.jpg")
    baloon.setAttribute("id" , "style")
    baloon.addEventListener("click", clickOnBaloon)
    function clickOnBaloon(){
        baloon.remove()
        const allIBaloons = document.querySelectorAll("img")
        if(allIBaloons.length === 0) {
            alert("All the divs are gone")
            location.reload();
        }
    
    }
    
}

function play(){
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    baloons()
    
}

play()





































