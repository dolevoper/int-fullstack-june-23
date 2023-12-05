type Item = "espresso" | "double espresso ";
type Order = { name :  string, items : []};

const order = [ { name : "espresso", items : ["espresso"]} ,
                { name: "double espresso", items : ["espresso", "espresso"]}];

function addOrder(newOrder : Order) {}