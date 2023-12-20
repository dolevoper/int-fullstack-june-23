
document.body.style.background = "#f3f3f3 url('flwer.jpg') no-repeat center"
const backgroundImg = document.createElement("img");
backgroundImg.src = "flwer.jpg"
backgroundImg.style.opacity = "0.5";
const price = {economic:90 ,standard:140 , luxurie: 180 }
type evantType = "Birthday" | "Wedding" | "Bar mitzva" | "Funetral" | "Other";
type bouquetType = "Economic" | "Standard" | "Luxurie" ;
console.log(backgroundImg);
type flwer = {
    name: string
    address: string
    evant: evantType;
    bouquetType: bouquetType;
    priceTag: string;
};

type flwerArry = flwer[];
const flwers: flwerArry =[];

const addFlwerForm = document.querySelector(".bouquet") as HTMLFormElement | null;

if (!addFlwerForm){
    console.error("Couldn't find send flwer form.");
} 
else{
    addFlwerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

    flwers.push({
    name: getRequiredString(formData, "name"),
    address: getRequiredString(formData, "address"),
    Evant:  parseEvent(getRequiredString(formData, "evant")),
    bouquetType:parseBouquet(getRequiredString(formData, "bouquetType")),
    priceTag: getRequiredString(formData, "priceTag"),
});
    console.log(flwers);
   
});
}
function getString(formData:FormData , key: string ){
    const value = formData.get(key);
   
    console.log(value);
    return value;
    
};

function getRequiredString(formData:FormData , key: string ){
    const value = getString(formData, key);
    
    return value;
};

function parseEvent(value: evantType): evantType{
   
    return value;
} 
function parseBouquet(value: bouquetType): bouquetType{
    return value;
} 