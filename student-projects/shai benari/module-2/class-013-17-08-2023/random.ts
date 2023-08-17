
const randomnum = Math.floor(Math.random() * 10) + 1;
alert(randomnum);
const gussnum = Number(prompt("guss a number betwin 1 and 10"));
if(randomnum===gussnum){alert("your guss is right")}
else if(gussnum<=1 || gussnum>10){alert("your guss is out of range")}
else{alert("your guss is wrong")}

