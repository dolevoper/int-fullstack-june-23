const h1 = document.createElement('h1');
h1.innerText = "My bloog"
h1.setAttribute("style", 'color: blue');
document.body.append(h1);
const p = document.createElement('p');
p.setAttribute('id' , 'intro')
const text1 = document.createTextNode( 'helow it is nice')
const strong = document.createElement('strong');
strong.innerText = " to meet"
const text2 = document.createTextNode( ' you');
p.append(text1, strong, text2 );
document.body.append(p)

// function craetParagrph(text: string , attributes = {} ){
// const paragraph = document.createElement("p") as HTMLElement;
//  paragraph.textContent = text ;
 
//  for(const [key, value ] of Object.entries(attributes)){
    
//     paragraph.setAttribute(key , value );
    
// }
//  return paragraph

//  console.log(paragraph)
// }
// const p1 = craetParagrph('paragraph 1', {id: 'one'});
// const p2 = craetParagrph('paragraph 2' , {id: 'two'});
// const p3 = craetParagrph('paragraph 3' , {id: 'threק'});

// document.prepend(p1);
// document.prepend(p2);
// document.prepend(p3);

const pExer3 = document.createElement("p");
pExer3.innerText = "Helow my name is shai 😘"

const div = document.createElement('div');
const label = document.createElement('label');
label.textContent = "first name"
const input = document.createElement('input');
div.append(label);
div.append(input);

const nev = document.createElement("nev");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "Home"
const li2 = document.createElement("li");
li2.textContent = "Blog"
const li3 = document.createElement("li");
li3.textContent = "About"
nev.append(ul);
ul.append(li1);
ul.append(li2);
ul.append(li3);

const elements = [p, div, nev];

setInterval(() => {
    const indexRandom = Math.floor(Math.random() * elements.length)

    for ( const child of document.body.children ){
        child.remove;
    }

    document.body.append(elements[indexRandom]);
    
},1000);




