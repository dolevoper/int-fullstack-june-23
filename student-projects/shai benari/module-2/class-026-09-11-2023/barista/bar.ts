type order = {
    name: string,
    items: item[]
}


type item =  |"espresso";
const orders: order[] = [
    {name: "espresso", items: ["espresso"]}
    {name: "double espresso", items: ["espresso" , "espresso"]}
];


const items: item[] = []

function useCoffeeMachine(){
items.push('espresso');

for(const order of orders){
    if(orderIsAvialable(order)){
        markOrderAvialable(order) 
    }
}

 const itemsList = document.getElementById("items-list");
 if (!itemsList){
    return;
 }

 const li = document.createElement("li");
 li.textContent = "espresso"

 itemsList.append(li);

}

document.getElementById("coffee-machine")?.addEventListener("click", useCoffeeMachine);
 
 function orderIsAvialable( order: order){
    return false;
    
 }
 function markOrderAvialable( order: order){
    throw new Error("function is not implemented");
 }

 console.log(items);
