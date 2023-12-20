
// const randomnum = Math.floor(Math.random() * 10) + 1;
// alert(randomnum);
// const gussnum = Number(prompt("guss a number betwin 1 and 10"));
// if(randomnum===gussnum){alert("your guss is right")}
// else if(gussnum<=1 || gussnum>10){alert("your guss is out of range")}
// else{alert("your guss is wrong")}
// if(gussnum<randomnum){alert("your guss is less then the number")}
// if(gussnum>randomnum){alert("your guss is bigger then the number")}
// const level = Number(prompt("for Easy level anter 1\n for hard level anter 2\n for very hard level enter 3")); 
//  if(level===1){const randomnum1 = Math.floor(Math.random() * 10) + 1};
//  alert(randomnum1);
//  if(level===2){const randomnum2 = Math.floor(Math.random() * 100) + 1};
//  alert(randomnum2);
//  if(level===3){const randomnum3 = Math.floor(Math.random() * 1000) + 1};
//  alert(randomnum3);

const level = prompt("for easy level anter: Easy\n for hard level anter Hard\n for very hard level enter: Imp"); 
if(level==="Easy"){const randomnum = Math.floor(Math.random() * 10) + 1};
   alert(randomnum);
   const gussnum = Number(prompt("guss a number betwin 1 and 10"));
   if(randomnum===gussnum){alert("your guss is right")}
   else if(gussnum<=1 || gussnum>10){alert("your guss is out of range")}
   else{alert("your guss is wrong")}
   if(gussnum<randomnum){alert("your guss is less then the number")}
   if(gussnum>randomnum){alert("your guss is bigger then the number")}
 
 else if(level==="Hard"){const randomnum1 = Math.floor(Math.random() * 100) + 1};
   alert(randomnum1);
   const gussnum = Number(prompt("guss a number betwin 1 and 100"));
   if(randomnum1===gussnum){alert("your guss is right")}
   else if(gussnum<=1 || gussnum>100){alert("your guss is out of range")}
   else{alert("your guss is wrong")}
   if(gussnum<randomnum1){alert("your guss is less then the number")}
   if(gussnum>randomnum1){alert("your guss is bigger then the number")}
 
 else if(level==="Imp"){const randomnum2 = Math.floor(Math.random() * 1000) + 1};
    alert(randomnum2);
    const gussnum = Number(prompt("guss a number betwin 1 and 1000"));
    if(randomnum2===gussnum){alert("your guss is right")}
    else if(gussnum<=1 || gussnum>1000){alert("your guss is out of range")}
    else{alert("your guss is wrong")}
    if(gussnum<randomnum2){alert("your guss is less then the number")}
    if(gussnum>randomnum2){alert("your guss is bigger then the number")}