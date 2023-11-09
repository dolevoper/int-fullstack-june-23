const btnIncrease = document.getElementById('btn-increase')?.addEventListener('click', function(){
const valueElement = document.getElementById("value");
if(!valueElement){
    return
}
const curantValue = Number(valueElement.textContent);

valueElement.textContent = `${curantValue + 1}`

})
const btndecrese = document.getElementById('btn-decrease')?.addEventListener('click', function(){
    const valueElement = document.getElementById("value");
    if(!valueElement){
        return
    }
    const curantValue = Number(valueElement.textContent);
    
    valueElement.textContent = `${curantValue - 1}`
    
    })
          
    const btndubel = document.getElementById('btn-dublicate')?.addEventListener('click', function(){
        const valueElement = document.getElementById("value");
        if(!valueElement){
            return
        }
        const curantValue = Number(valueElement.textContent);
        
        valueElement.textContent = `${curantValue * 2}`
        
        })
