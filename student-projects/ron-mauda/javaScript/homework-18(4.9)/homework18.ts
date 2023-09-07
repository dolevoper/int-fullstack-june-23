{
    "compilerOptions": {
        "target": "ESNext",
        "lib": ["ESNext", "DOM"],
        "strictNullChecks": true,
        "noImplicitAny": true
    },
    "include": ["./*.ts"]
}



const cars = [
    {
        model: "Audi",
        manufacturersByCountry : "Germany",
        price : 240000 
    },
    {
        model:"Lambretta",
        manufacturersByCountry : "Italy",
        price : 230000
    },
    {
        model: "Toyota",
        manufacturersByCountry : "Japan",
        price : 140000
    },
    {
        model: "Kia",
        manufacturersByCountry : "Korea",
        price : 140000
    },
    {
        model: "Peugeot",
        manufacturersByCountry : "France",
        price : 90000
    },
    {
        model: "Geely",
        manufacturersByCountry : "China",
        price : 120000
    },
    {
        model: "Seat",
        manufacturersByCountry : "spain",
        price : 160000
    }   
]

function menu(){
    const promptText = "How you want to choose a car.\n 1. by model \n 2.by manufacturers By Country \n 3. by price";
    
    let userInput = prompt(promptText); 

    while(userInput !== null){
        swichMenu(userInput);
        userInput  = prompt(promptText); 
    }
}

function swichMenu(userInput: string){
    switch (userInput.trim()){
        case "1":
           byModel()
           break;

        case "2":
           byCountry ()
           break;

        case "3":
            byPrice()
           break;

        default:
            alert("Please choose an option from the menu using their numbers.");
    }
}



function byModel(){
     const userInput = prompt("please choose your model")?.trim();
     const carModel = cars.filter(function(driver){
        return driver.model.toLowerCase() === userInput?.toLocaleLowerCase()
     });
     if (!carModel.length) {
        alert(`No model by ${userInput} in our database.`);
    }
    const result = cars.indexOf(carModel[0]);
    printCard(result)
}


function byCountry (){
    const userInput = prompt("please choose the manufacturers By Country ")?.trim();
    const carCountry = cars.filter(function(country){
       return country.manufacturersByCountry.toLocaleLowerCase()  === userInput?.toLocaleLowerCase();
    })
    if (!carCountry.length) {
        alert(`No country by ${userInput} in our database.`);
    }
    const result = cars.indexOf(carCountry[0]);
    printCard(result);
}




function printCard(x : number){
    const driver = cars[x];

    alert(`Model : ${driver.model} \n\n Country : ${driver.manufacturersByCountry} \n\n Price :  ${driver.price}`)

}


function byPrice(){
    const userInput = Number(prompt("choose the price you search \n 1. 0-100,000 \n\n 2.100,001 - 200,000 \n\n 3.200,001-300,000"));
    const price = cars.filter(function(prices){
        if (userInput===1){
            return (prices.price <= 100000);
        }else if (userInput === 2){
            return (100001 <= prices.price && prices.price<=200000)
        } else if (userInput === 3){
            return (200001 <= prices.price && prices.price<=300000)
        }
    })
    alert("You have " + price.length +" results for what you searched for")
    for (let i = 0 ; i<price.length ; i++ ){
        
        alert(`Model : ${price[i].model} \n\n Country : ${price[i].manufacturersByCountry} \n\n Price :  ${price[i].price}`)
    }
    
}

menu();
