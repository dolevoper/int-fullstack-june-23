const btnIncrease = document.getElementById('btn-increase')?.addEventListener('click', function(){
const valueElement = document.getElementsByClassName('value');
if(!valueElement){
    return
}
const curantValue = Number(valueElement.textContent);

valueElement.textContent = `${curantValue + 1}`

})
    

